import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

export function HeroSection({ prompt, setPrompt }: HeroSectionProps) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/builder');
    }
  };

  return (
    <header className="relative z-10 px-6 py-24 md:pt-48 pt-24 md:mb-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className=""></div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="space-y-6 pt-10 sm:pt-0"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Transform Ideas into Websites
            <br />
            <div className='flex flex-col'>
            <span className="bg-clip-text text-blue-400 font-semibold bg-gradient-to-r from-blue-400 to-blue-600">
              Powered by <span className='text-blue-500'>A!</span>
            </span>
            </div>
          </h1>

          <p className="text-base  font-normal text-gray-400 max-w-2xl mx-auto">
            Simply describe, create, and customize your website in seconds with
            <span className="text-blue-400 font-semibold"> Wilder</span>
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="backdrop-blur-md bg-gray-900/50 rounded-xl shadow-2xl border border-gray-800/80 overflow-hidden">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the website you want to build..."
              className="w-full h-32 p-5 bg-transparent text-gray-100 rounded-lg focus:outline-none resize-none placeholder-gray-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div className="p-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 bg-blue-500/90 hover:bg-blue-600 text-white py-2.5 px-5 rounded-md font-medium text-sm transition-all border border-blue-400/40 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              >
                <span>Generate Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </header>
  );
}











// import { useState, useEffect } from 'react';
// import { ArrowRight, Sparkles, Zap } from 'lucide-react';

// const cn = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(' ');

// interface HeroSectionProps {
//   prompt: string;
//   setPrompt: (prompt: string) => void;
// }

// export function WilderHeroSection({ prompt, setPrompt }: HeroSectionProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   // Add keyframes to document head
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes float {
//         0%, 100% { transform: translateY(0px) rotate(0deg); }
//         50% { transform: translateY(-20px) rotate(180deg); }
//       }
//     `;
//     document.head.appendChild(style);
    
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const handleSubmit = () => {
//     if (prompt.trim()) {
//       // Navigate to builder - replace with your routing logic
//       console.log('Navigating to builder with prompt:', prompt);
//     }
//   };

//   return (
//     <header className="relative z-10 px-6 py-24 md:pt-48 pt-32 md:mb-20 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Gradient orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
//         {/* Floating particles */}
//         <div className="absolute inset-0">
//           {Array.from({ length: 3 }).map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
//               style={{
//                 left: `${20 + i * 30}%`,
//                 top: `${30 + i * 20}%`,
//                 animation: `float ${3 + i}s ease-in-out infinite`,
//                 animationDelay: `${i * 0.5}s`
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto text-center relative">
//         {/* Staggered content reveal */}
//         <div
//           className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
//         >
//           {/* Headline */}
//           <div
//             className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6">
//               <Sparkles className="w-4 h-4 text-indigo-400" />
//               <span className="text-sm font-medium text-indigo-300">
//                 AI-Powered Website Builder
//               </span>
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
//               From Idea to Website.
//               <br />
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
//                   Instantly.
//                 </span>
//                 {/* Animated underline */}
//                 <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform scale-x-0 animate-in scale-in-x duration-1000 delay-1000 fill-mode-both origin-left" />
//               </span>
//             </h1>
//           </div>

//           {/* Subheadline */}
//           <div
//             className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both"
//           >
//             <p className="text-lg md:text-xl font-normal text-slate-300 max-w-3xl mx-auto leading-relaxed">
//               Wilder helps you launch beautiful, responsive websites with a single prompt.
//               <br />
//               <span className="text-slate-400">
//                 No coding required. Just describe your vision and watch it come to life.
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Form */}
//         <div
//           className="mt-16 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600 fill-mode-both"
//         >
//           <div className="relative group">
//             {/* Animated border glow */}
//             <div className={cn(
//               "absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500",
//               (isFocused || isHovered) && "opacity-30"
//             )} />
            
//             {/* Main form container */}
//             <div className={cn(
//               "relative backdrop-blur-xl bg-white/5 rounded-2xl shadow-2xl border transition-all duration-300",
//               (isFocused || isHovered) 
//                 ? "border-indigo-400/50 shadow-indigo-500/20" 
//                 : "border-white/10"
//             )}>
//               {/* Textarea */}
//               <div className="p-6 pb-4">
//                 <textarea
//                   value={prompt}
//                   onChange={(e) => setPrompt(e.target.value)}
//                   onFocus={() => setIsFocused(true)}
//                   onBlur={() => setIsFocused(false)}
//                   placeholder="e.g. A modern portfolio website for a UX designer with a dark theme, project showcase, testimonials section, and contact form..."
//                   className={cn(
//                     "w-full h-32 bg-transparent text-white placeholder-slate-400 text-base leading-relaxed",
//                     "focus:outline-none resize-none transition-all duration-200",
//                     "placeholder:text-slate-500"
//                   )}
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter' && !e.shiftKey) {
//                       e.preventDefault();
//                       handleSubmit();
//                     }
//                   }}
//                   aria-label="Describe your website idea"
//                 />
//               </div>
              
//               {/* Button */}
//               <div className="p-4 pt-0">
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                   disabled={!prompt.trim()}
//                   className={cn(
//                     "w-full group/btn flex items-center justify-center gap-2",
//                     "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700",
//                     "text-white py-4 px-6 rounded-xl font-semibold text-base",
//                     "transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
//                     "shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40",
//                     "border border-indigo-400/20 hover:border-indigo-400/40",
//                     "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900",
//                     "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//                   )}
//                 >
//                   <Zap className={cn(
//                     "w-5 h-5 transition-all duration-300",
//                     isHovered ? "rotate-12 scale-110" : ""
//                   )} />
//                   <span className="relative">
//                     Build with Wilder
//                     {/* Animated shine effect */}
//                     <div className={cn(
//                       "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
//                       "transform -skew-x-12 translate-x-[-100%] transition-transform duration-700",
//                       isHovered && "translate-x-[200%]"
//                     )} />
//                   </span>
//                   <ArrowRight className={cn(
//                     "w-5 h-5 transition-all duration-300 group-hover/btn:translate-x-1",
//                     isHovered ? "scale-110" : ""
//                   )} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Trust indicators */}
//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               <span>Free to start</span>
//             </div>
//             <div className="hidden sm:block w-px h-4 bg-slate-600" />
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200" />
//               <span>No credit card required</span>
//             </div>
//             <div className="hidden sm:block w-px h-4 bg-slate-600" />
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400" />
//               <span>Launch in seconds</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// // Demo component with state management
// export default function WilderHeroDemo() {
//   const [prompt, setPrompt] = useState('');

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       <WilderHeroSection prompt={prompt} setPrompt={setPrompt} />
//     </div>
//   );
// }