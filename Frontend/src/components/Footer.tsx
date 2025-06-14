
// export function Footer() {
//   return (
//     <footer className="border-t border-gray-800 py-16 relative z-10">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//           <div className="flex items-center space-x-1 mb-6 md:mb-0">
//             <div className="relative w-10 h-10 flex items-center justify-center">
//               <img
//                 src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgMkwzIDEzTDEyIDEzTDExIDIyTDIxIDExTDEyIDExTDEzIDJaIiBzdHJva2U9IiM2MEE1RkEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg=="
//                 alt="Bolt Logo"
//                 className="w-6 h-6 relative z-10"
//               />
//             </div>
//             <span className="text-2xl font-bold text-white">Bolt</span>
//           </div>

//           <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
//             <a
//               href="#features"
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               Features
//             </a>
//             <a
//               href="#howitworks"
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               How it works
//               </a>
//             <a
//               href="#faq"
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               FAQ
//             </a>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 mb-4 md:mb-0">
//             © 2025 Bolt. All rights reserved.
//           </p>
//           <div className="flex space-x-6">
//             <a
//               href="https://x.com/Pankajkumar_dev"
//               target="_blank"
//               className="text-gray-400 hover:text-white"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//               </svg>
//             </a>
//             <a
//               href="https://github.com/PankajKumardev/Bolt-Clone"
//               target="_blank"
//               className="text-gray-400 hover:text-white"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }









import { useState, useEffect } from 'react';
import { Twitter, Github, Heart, Zap } from 'lucide-react';

const cn = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(' ');

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, children, external = false }: FooterLinkProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "text-slate-400 hover:text-white transition-all duration-300",
        "hover:scale-105 hover:translate-y-[-1px]",
        "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5",
        "after:bg-gradient-to-r after:from-indigo-400 after:to-purple-400",
        "after:transition-all after:duration-300 hover:after:w-full",
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 rounded-sm"
      )}
    >
      {children}
    </a>
  );
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "p-2 rounded-xl text-slate-400 hover:text-white",
        "bg-white/5 hover:bg-white/10 backdrop-blur-sm",
        "border border-white/10 hover:border-white/20",
        "transition-all duration-300 hover:scale-110 hover:rotate-3",
        "hover:shadow-lg hover:shadow-indigo-500/20",
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
      )}
    >
      {icon}
    </a>
  );
}

export function WilderFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className={cn(
      "relative overflow-hidden transition-all duration-1000",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}>
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent backdrop-blur-xl" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className={cn(
            "flex flex-col md:flex-row justify-between items-center mb-12",
            "transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {/* Logo Section */}
            <div className="flex items-center space-x-3 mb-8 md:mb-0 group">
              <div className={cn(
                "relative w-12 h-12 flex items-center justify-center",
                "bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl",
                "shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40",
                "transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
              )}>
                {/* Replace this with your Wilder logo */}
                <Zap className="w-6 h-6 text-white" />
                
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">
                  Wilder
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wide">
                  AI Website Builder
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className={cn(
              "flex flex-wrap justify-center gap-x-8 gap-y-4",
              "transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            )}>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#how-it-works">How it works</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#beta" external>
                <span className="inline-flex items-center gap-1.5">
                  Join Beta
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                </span>
              </FooterLink>
            </nav>
          </div>

          {/* Divider with gradient */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-slate-900 px-4">
                <div className="w-16 h-px bg-gradient-to-r from-indigo-500 to-purple-500" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={cn(
            "flex flex-col md:flex-row justify-between items-center gap-6",
            "transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {/* Copyright and Tagline */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © 2025 Wilder. All rights reserved.
              </p>
              <div className="hidden md:block w-px h-4 bg-slate-600" />
              <p className="text-slate-500 text-sm flex items-center gap-1.5">
                Crafted with 
                <Heart className="w-3.5 h-3.5 text-red-400 animate-pulse" /> 
                by the Wilder team
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <SocialIcon
                href="https://x.com/WilderAI"
                icon={<Twitter className="w-5 h-5" />}
                label="Follow Wilder on Twitter"
              />
              <SocialIcon
                href="https://github.com/wilder-ai"
                icon={<Github className="w-5 h-5" />}
                label="View Wilder on GitHub"
              />
            </div>
          </div>

          {/* Call-to-Action Badge */}
          <div className={cn(
            "mt-8 flex justify-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-gradient-to-r from-indigo-500/10 to-purple-500/10",
              "border border-indigo-500/20 backdrop-blur-sm",
              "text-slate-300 text-xs font-medium",
              "hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-400/30",
              "transition-all duration-300 cursor-default"
            )}>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              Building the future of web development
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Demo wrapper component
export default function WilderFooterDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Some content to show the footer in context */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Wilder</h1>
          <p className="text-slate-400 text-lg">AI-Powered Website Builder</p>
        </div>
      </div>
      <WilderFooter />
    </div>
  );
}