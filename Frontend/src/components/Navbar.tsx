// import { cn } from '../utils/cn';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// interface NavbarProps {
//   scrollY: number;
// }

// export function Navbar({ scrollY }: NavbarProps) {
//   const navigator = useNavigate();
//   return (
//     <motion.nav
//       initial={{ filter: 'blur(10px)' }}
//       animate={{ filter: 'blur(0px)' }}
//       transition={{ duration: 0.3 }}
//       className={cn(
//         'fixed z-20 flex items-center justify-between py-6 md:p-6 transition-all duration-300 w-full',
//         scrollY > 50
//           ? 'backdrop-blur-lg bg-gray-950/70 shadow-lg shadow-black/10'
//           : 'bg-transparent'
//       )}
//     >
//       <div className="w-full flex items-center justify-between md:px-8 px-3 left-0 right-0">
//         <div className="flex items-center space-x-2">
//           <div
//             onClick={() => navigator('/')}
//             className="flex items-center space-x-1 cursor-pointer"
//           >
//             <div className="relative w-10 h-10 flex items-center justify-center">
//               <img
//                 src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgMkwzIDEzTDEyIDEzTDExIDIyTDIxIDExTDEyIDExTDEzIDJaIiBzdHJva2U9IiM2MEE1RkEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg=="
//                 alt="Bolt Logo"
//                 className="w-6 h-6 relative z-10"
//               />
//             </div>
//             <span className="text-2xl font-bold text-white">Bolt</span>
//           </div>
//         </div>
//         <div className="flex items-center space-x-6">
//           <a
//             href="#features"
//             className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
//           >
//             Features
//           </a>
//           <a
//             href="#howitworks"
//             className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
//           >
//             How it works
//           </a>
//           <a
//             href="#faq"
//             className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
//           >
//             FAQ
//           </a>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }




import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Utility function to conditionally join Tailwind CSS classes.
// This is a common pattern for handling dynamic classes.
function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ');
}

interface NavbarProps {
  scrollY: number;
}

// Extracted WilderLogo component for better code organization and reusability.
// This uses a simple SVG placeholder for demonstration. In a real application,
// you would replace this with your actual brand logo SVG.
const WilderLogo = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    {/* A modern, abstract 'W' or geometric shape for the Wilder logo */}
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full relative z-10 text-blue-400"
      aria-hidden="true" // Indicate to screen readers that this is decorative
    >
      {/* Example: A rounded rectangle with a diamond shape for a sleek look */}
      <rect x="5" y="5" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.8" />
      <path d="M10 15L15 10L20 15L15 20L10 15Z" fill="white" fillOpacity="0.9" />
    </svg>
  </div>
);

export function Navbar({ scrollY }: NavbarProps) {
  const navigator = useNavigate();

  // Determine if the scroll threshold has been met for styling changes
  const isScrolled = scrollY > 50;

  // Dynamically apply Tailwind classes based on scroll position for a glassmorphism effect
  const navClasses = cn(
    'fixed z-20 w-full transition-all duration-300',
    // Apply soft transparency and backdrop blur on scroll
    isScrolled
      ? 'backdrop-blur-xl bg-white/10 shadow-lg shadow-black/10'
      : 'bg-transparent',
    // Consistent padding across different screen sizes
    'py-4 md:py-5 px-4 md:px-8'
  );

  // Common classes for navigation links, including subtle hover effects
  const linkClasses =
    'text-gray-200 hover:text-white transition-colors duration-200 text-sm font-medium relative group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm';

  // Subtle hover underline animation for links
  const linkHoverEffect = (
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  );

  return (
    <motion.nav
      // Framer Motion for a subtle initial animation (fade in and slight drop)
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={navClasses}
      role="navigation" // ARIA role for navigation
      aria-label="Main website navigation" // Descriptive label for accessibility
    >
      {/* Max width container to center content and provide consistent layout */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Section: Logo and Name */}
        <div
          onClick={() => navigator('/')}
          className="flex items-center space-x-2 cursor-pointer"
          tabIndex={0} // Makes the div focusable for keyboard navigation
          role="link" // ARIA role to indicate it behaves like a link
          aria-label="Go to Wilder homepage" // Descriptive label for screen readers
          // Focus styles for keyboard navigation consistency
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              navigator('/');
            }
          }}
        >
          <WilderLogo />
          <span className="text-2xl font-extrabold text-white tracking-tight">Wilder</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="#features" className={linkClasses}>
            Features
            {linkHoverEffect}
          </a>
          <a href="#howitworks" className={linkClasses}>
            How it works
            {linkHoverEffect}
          </a>
          <a href="#faq" className={linkClasses}>
            FAQ
            {linkHoverEffect}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
