// import { cn } from "../utils/cn";

// interface LoaderProps {
//   size?: 'sm' | 'md' | 'lg';
//   className?: string;
// }

// export function Loader({ size = 'md', className }: LoaderProps) {
//   const sizeClasses = {
//     sm: "w-4 h-4",
//     md: "w-8 h-8",
//     lg: "w-12 h-12"
//   };

//   return (
//     <div className={cn("flex items-center justify-center", className)}>
//       <div className="relative">
//         <div className={cn("animate-spin rounded-full border-t-2 border-b-2 border-blue-500", sizeClasses[size])}></div>
//         <div className={cn("absolute top-0 left-0 animate-pulse opacity-75", sizeClasses[size])}>
//           <svg className="text-blue-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="60 120" strokeLinecap="round" />
//           </svg>
//         </div>
//       </div>
//       <span className="sr-only">Loading...</span>
//     </div>
//   );
// }




import { cn } from "../utils/cn";
import { useEffect } from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Loader({ size = 'md', className }: LoaderProps) {
  // Add shimmer keyframes to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shimmer {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Only remove if it still exists
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  const sizeConfig = {
    sm: {
      container: "w-4 h-4",
      svg: "w-4 h-4",
      strokeWidth: "2",
      glow: false
    },
    md: {
      container: "w-8 h-8",
      svg: "w-8 h-8", 
      strokeWidth: "2.5",
      glow: true
    },
    lg: {
      container: "w-12 h-12",
      svg: "w-12 h-12",
      strokeWidth: "3",
      glow: true
    }
  };

  const config = sizeConfig[size];

  return (
    <div 
      className={cn("flex items-center justify-center", className)}
      aria-hidden="true"
    >
      <div className="relative">
        {/* Glow effect for md and lg sizes */}
        {config.glow && (
          <div className={cn(
            "absolute inset-0 rounded-full blur-sm opacity-40",
            "bg-gradient-to-r from-indigo-500/30 to-purple-500/30",
            "animate-pulse",
            config.container
          )} />
        )}
        
        {/* Main loader container */}
        <div className={cn("relative", config.container)}>
          {/* Primary spinning ring */}
          <svg
            className={cn(
              "absolute inset-0 animate-spin text-indigo-500 dark:text-indigo-400",
              config.svg
            )}
            style={{ animationDuration: '1.5s' }}
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth={config.strokeWidth}
              strokeDasharray="31.416 31.416"
              strokeLinecap="round"
              className="opacity-75"
            />
          </svg>

          {/* Secondary shimmer ring */}
          <svg
            className={cn(
              "absolute inset-0 text-purple-500 dark:text-purple-400",
              config.svg
            )}
            style={{ 
              animation: 'spin 2s linear infinite reverse, shimmer 3s ease-in-out infinite'
            }}
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth={config.strokeWidth}
              strokeDasharray="15.708 47.124"
              strokeLinecap="round"
              className="opacity-50"
            />
          </svg>

          {/* Inner pulse dot */}
          <div className={cn(
            "absolute inset-0 flex items-center justify-center"
          )}>
            <div 
              className="w-1 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>
      </div>
      
      {/* Screen reader text */}
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
}

// Demo component to showcase all sizes
export default function LoaderDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Wilder Loader Components
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Premium AI website builder loading states
          </p>
        </div>

        {/* Light theme examples */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Light Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-sm font-medium text-slate-700">Small</h3>
              <div className="flex justify-center">
                <Loader size="sm" />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-sm font-medium text-slate-700">Medium</h3>
              <div className="flex justify-center">
                <Loader size="md" />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-sm font-medium text-slate-700">Large</h3>
              <div className="flex justify-center">
                <Loader size="lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Dark theme examples */}
        <div className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-6">Dark Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-sm font-medium text-slate-300">Small</h3>
              <div className="flex justify-center">
                <Loader size="sm" className="dark" />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-sm font-medium text-slate-300">Medium</h3>
              <div className="flex justify-center">
                <Loader size="md" className="dark" />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-sm font-medium text-slate-300">Large</h3>
              <div className="flex justify-center">
                <Loader size="lg" className="dark" />
              </div>
            </div>
          </div>
        </div>

        {/* Usage examples */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Usage Examples
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-4">
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs">
                {'<Loader size="sm" />'}
              </code>
              <span className="text-slate-600 dark:text-slate-400">Button loading states</span>
              <Loader size="sm" />
            </div>
            <div className="flex items-center gap-4">
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs">
                {'<Loader size="md" />'}
              </code>
              <span className="text-slate-600 dark:text-slate-400">Card/section loading</span>
              <Loader size="md" />
            </div>
            <div className="flex items-center gap-4">
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs">
                {'<Loader size="lg" />'}
              </code>
              <span className="text-slate-600 dark:text-slate-400">Full page loading</span>
              <Loader size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}