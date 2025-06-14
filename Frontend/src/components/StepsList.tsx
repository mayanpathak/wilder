// import { CheckCircle, Circle, Clock, FileEdit, FolderPlus, Terminal } from 'lucide-react';
// import { Step, StepType } from '../types';
// import { cn } from '../utils/cn';

// interface StepsListProps {
//   steps: Step[];
//   currentStep: number;
//   onStepClick: (stepId: number) => void;
// }

// function getStepIcon(type: StepType) {
//   switch (type) {
//     case StepType.CreateFile:
//       return <FileEdit className="w-4 h-4" />;
//     case StepType.CreateFolder:
//       return <FolderPlus className="w-4 h-4" />;
//     case StepType.RunScript:
//       return <Terminal className="w-4 h-4" />;
//     default:
//       return <Circle className="w-4 h-4" />;
//   }
// }

// export function StepsList({ steps, currentStep, onStepClick }: StepsListProps) {
//   if (steps.length === 0) {
//     return (
//       <div className="text-center py-8">
//         <div className="animate-pulse text-gray-500 text-sm">
//           Generating build steps...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-1">
//       {steps.map((step) => (
//         <div
//           key={step.id}
//           className={cn(
//             "p-3 rounded-lg cursor-pointer transition-all border border-transparent",
//             currentStep === step.id
//               ? "bg-gray-800/80 border-gray-700"
//               : "hover:bg-gray-800/50",
//           )}
//           onClick={() => onStepClick(step.id)}
//         >
//           <div className="flex items-start gap-3">
//             <div className="mt-0.5">
//               {step.status === 'completed' ? (
//                 <CheckCircle className="w-5 h-5 text-green-500" />
//               ) : step.status === 'in-progress' ? (
//                 <Clock className="w-5 h-5 text-blue-400" />
//               ) : (
//                 <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center">
//                   {getStepIcon(step.type)}
//                 </div>
//               )}
//             </div>
//             <div className="flex-1 min-w-0">
//               <h3 className={cn(
//                 "font-medium text-sm",
//                 step.status === 'completed' ? "text-gray-300" : "text-gray-400"
//               )}>
//                 {step.title}
//               </h3>
//               {step.description && (
//                 <p className="text-xs text-gray-500 mt-1 line-clamp-2">
//                   {step.description}
//                 </p>
//               )}
//               {step.type === StepType.CreateFile && step.path && (
//                 <p className="text-xs bg-gray-800 text-gray-400 rounded mt-2 px-2 py-1 font-mono truncate">
//                   {step.path}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }








import { useEffect, useState, memo } from 'react'; // Added memo for optional performance optimization
import { motion } from 'framer-motion'; // For subtle animations
// src/components/StepsList.tsx

// Utility function to conditionally join Tailwind CSS classes.
function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ');
}

// --- Type Definitions (If not already defined globally) ---
// Assuming these types are available from '../types', but defining them here
// for self-containment if they were meant to be internal to this component's file.
// In a real project, these would typically be in a shared `types.ts` file.

export enum StepType {
  // CreateFile = 'createFile',
  // CreateFolder = 'createFolder',
  // RunScript = 'runScript',
   CreateFile = 'createFile',
    ModifyFile = 'modifyFile',
    DeleteFile = 'deleteFile',
    CreateFolder = 'createFolder',
    EditFile = 'editFile',
    RunScript = 'runScript'
}

export type StepStatus = 'pending' | 'in-progress' | 'completed';

export interface Step {
  id: number;
  type: StepType;
  title: string;
  description?: string;
  status: StepStatus;
  path?: string; // Specific to CreateFile/CreateFolder
}

interface StepsListProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

// --- Inline SVG Icons (replacing lucide-react for self-containment) ---

const IconCheckCircle = () => (
  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.5" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconClock = () => (
  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconFileEdit = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L22 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><polyline points="14 2 14 8 20 8" /><path d="M10.42 12.67a.7.7 0 0 0 0 1l1.62 1.62a.7.7 0 0 0 1 0l3.07-3.07a.7.7 0 0 0 0-1l-1.62-1.62a.7.7 0 0 0-1 0z" />
  </svg>
);

const IconFolderPlus = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

const IconTerminal = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

// --- Step Icon Component ---
// Encapsulates logic for rendering the correct icon based on step status and type.
const StepIcon = memo(({ status, type }: { status: StepStatus; type: StepType }) => {
  if (status === 'completed') {
    return <IconCheckCircle />;
  }

  if (status === 'in-progress') {
    // Add a subtle bounce animation for in-progress steps
    return (
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        <IconClock />
      </motion.div>
    );
  }

  // Pending status
  let TypeIconComponent;
  switch (type) {
    case StepType.CreateFile:
      TypeIconComponent = IconFileEdit;
      break;
    case StepType.CreateFolder:
      TypeIconComponent = IconFolderPlus;
      break;
    case StepType.RunScript:
      TypeIconComponent = IconTerminal;
      break;
    default:
      // Fallback for unknown type, though typically all types should be handled
      TypeIconComponent = () => (
        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }

  return (
    <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center p-0.5">
      <TypeIconComponent />
    </div>
  );
});

// --- Main StepsList Component ---

export function StepsList({ steps, currentStep, onStepClick }: StepsListProps) {
  // Handle empty steps with a clear, animated message
  if (steps.length === 0) {
    return (
      <div className="text-center py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-500 text-sm animate-pulse-slow"
        >
          Generating build steps...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {steps.map((step) => {
        const isCurrent = currentStep === step.id;
        const isClickable = step.status !== 'in-progress'; // Prevent clicking if currently running

        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: step.id * 0.05 }} // Staggered entry animation
            className={cn(
              "relative p-3 rounded-lg transition-all duration-200 ease-in-out",
              "border", // Always have a border for consistent spacing/sizing
              isClickable ? "cursor-pointer" : "cursor-not-allowed",
              isCurrent
                ? "bg-gray-800 border-blue-600 shadow-md shadow-blue-900/30" // Stronger current step highlight
                : "bg-gray-900 border-gray-800 hover:bg-gray-800/60 hover:border-gray-700",
              isCurrent && step.status === 'in-progress' && "shadow-lg shadow-blue-500/20 animate-pulse-light", // Subtle pulse for active in-progress
            )}
            onClick={() => isClickable && onStepClick(step.id)}
            role="button" // Accessibility role for clickable div
            tabIndex={isClickable ? 0 : -1} // Make focusable only if clickable
            aria-current={isCurrent ? "step" : undefined} // Indicate current step for screen readers
            aria-disabled={!isClickable} // Indicate if step is not interactable
          >
            <div className="flex items-start gap-4"> {/* Increased gap for better spacing */}
              <div className="flex-shrink-0 mt-0.5">
                <StepIcon status={step.status} type={step.type} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={cn(
                  "font-medium text-sm",
                  step.status === 'completed' ? "text-gray-300" : "text-gray-200",
                  isCurrent ? "text-white" : "" // Current step title is brighter
                )}>
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {step.description}
                  </p>
                )}
                {step.type === StepType.CreateFile && step.path && (
                  <div className="mt-2">
                    <p className="text-xs bg-gray-700/50 text-gray-300 rounded px-2 py-1 font-mono break-all line-clamp-1" title={step.path}>
                      {step.path}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
