// import { useState, useEffect } from 'react';
// import { useAppContext } from '../context/AppContext';
// import { Navbar } from '../components/Navbar';
// import { HeroSection } from '../components/HeroSection';
// // import { WilderHeroSection as HeroSection } from '../components/HeroSection';
// import { FeaturesSection } from '../components/FeaturesSection';
// import { FaqSection } from '../components/FaqSection';
// // import { Footer } from '../components/Footer';
// import { WilderFooter as Footer } from '../components/Footer';

// import { BackgroundElements } from '../components/BackgroundElements';
// import HowitWork from '@/components/Works';

// export function Home() {
//   const { prompt, setPrompt } = useAppContext();
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollY]);

//   return (
//     <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 min-h-screen relative">
//       <BackgroundElements />

//       <Navbar scrollY={scrollY} />

//       <HeroSection prompt={prompt} setPrompt={setPrompt} />

//       <FeaturesSection />
      
//       <HowitWork/>

//       <FaqSection />

//       <Footer />
//     </div>
//   );
// }






// import { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useAppContext } from '../context/AppContext';
// import { Navbar } from '../components/Navbar';
// import { HeroSection } from '../components/HeroSection';
// import { FeaturesSection } from '../components/FeaturesSection';
// import { FaqSection } from '../components/FaqSection';
// import { WilderFooter as Footer } from '../components/Footer';
// import { BackgroundElements } from '../components/BackgroundElements';
// import HowitWork from '@/components/Works';

// // Enhanced Particle System Component
// const ParticleSystem = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Floating orbs */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={`orb-${i}`}
//           className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm"
//           style={{
//             width: `${20 + i * 8}px`,
//             height: `${20 + i * 8}px`,
//             left: `${15 + i * 15}%`,
//             top: `${10 + i * 12}%`,
//           }}
//           animate={{
//             y: [-20, -80, -20],
//             x: [-10, 10, -10],
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.7, 0.3],
//           }}
//           transition={{
//             duration: 6 + i * 0.5,
//             repeat: Infinity,
//             delay: i * 0.8,
//             ease: "easeInOut" as const
//           }}
//         />
//       ))}
      
//       {/* Micro particles */}
//       {[...Array(12)].map((_, i) => (
//         <motion.div
//           key={`particle-${i}`}
//           className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [-100, -200],
//             opacity: [0, 1, 0],
//             scale: [0, 1, 0]
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//             ease: "easeOut" as const
//           }}
//         />
//       ))}
      
//       {/* Geometric shapes */}
//       {[...Array(4)].map((_, i) => (
//         <motion.div
//           key={`shape-${i}`}
//           className="absolute border border-purple-400/20 backdrop-blur-sm"
//           style={{
//             width: `${30 + i * 10}px`,
//             height: `${30 + i * 10}px`,
//             left: `${20 + i * 20}%`,
//             top: `${20 + i * 15}%`,
//             borderRadius: i % 2 === 0 ? '50%' : '0%',
//           }}
//           animate={{
//             rotate: [0, 360],
//             scale: [1, 1.1, 1],
//             opacity: [0.2, 0.5, 0.2],
//           }}
//           transition={{
//             duration: 8 + i,
//             repeat: Infinity,
//             delay: i * 0.5,
//             ease: "linear" as const
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Enhanced Glow Effects Component
// const GlowEffects = () => {
//   return (
//     <>
//       {/* Dynamic gradient overlays */}
//       <motion.div 
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         animate={{
//           background: [
//             "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
//             "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)",
//             "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
//             "radial-gradient(circle at 60% 80%, rgba(239, 68, 68, 0.4) 0%, transparent 50%)",
//             "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)"
//           ]
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut" as const
//         }}
//       />
      
//       {/* Pulsing glow spots */}
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={`glow-${i}`}
//           className="absolute rounded-full blur-3xl pointer-events-none"
//           style={{
//             width: `${200 + i * 50}px`,
//             height: `${200 + i * 50}px`,
//             left: `${10 + i * 20}%`,
//             top: `${5 + i * 20}%`,
//             background: `linear-gradient(45deg, ${
//               ['rgba(59, 130, 246, 0.1)', 'rgba(147, 51, 234, 0.1)', 'rgba(16, 185, 129, 0.1)', 'rgba(239, 68, 68, 0.1)', 'rgba(245, 158, 11, 0.1)'][i]
//             }, transparent)`
//           }}
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.1, 0.3, 0.1],
//           }}
//           transition={{
//             duration: 4 + i,
//             repeat: Infinity,
//             delay: i * 0.8,
//             ease: "easeInOut" as const
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export function Home() {
//   const { prompt, setPrompt } = useAppContext();
//   const [scrollY, setScrollY] = useState(0);
//   const { scrollYProgress } = useScroll();
  
//   // Advanced scroll-based transforms
//   const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 0.6, 0.2]);
//   const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollY]);

//   // Enhanced animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: "easeOut" as const,
//         staggerChildren: 0.2,
//         delayChildren: 0.1
//       }
//     }
//   };

//   const childVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 60,
//       scale: 0.9,
//       filter: "blur(10px)"
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.8,
//         ease: "easeOut" as const
//       }
//     }
//   };

//   const navbarVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: -50,
//       filter: "blur(10px)"
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: {
//         duration: 1,
//         ease: "easeOut" as const,
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   const heroVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8,
//       rotateX: -15,
//       filter: "blur(20px)"
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotateX: 0,
//       filter: "blur(0px)",
//       transition: {
//         duration: 1.2,
//         ease: "easeOut" as const,
//         type: "spring",
//         stiffness: 80
//       }
//     }
//   };

//   const sectionVariants = {
//     hidden: {
//       opacity: 0,
//       y: 80,
//       scale: 0.95,
//       rotateX: 10
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       rotateX: 0,
//       transition: {
//         duration: 0.9,
//         ease: "easeOut" as const
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 min-h-screen relative overflow-hidden"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       style={{ perspective: 1000 }}
//     >
//       {/* Enhanced layered backgrounds */}
//       <motion.div 
//         className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-cyan-950/30 pointer-events-none"
//         style={{ y: backgroundY }}
//       />
      
//       <motion.div 
//         className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-purple-950/10 to-pink-950/20 pointer-events-none"
//         animate={{
//           opacity: [0.2, 0.4, 0.2]
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut" as const
//         }}
//       />

//       {/* Enhanced Glow Effects */}
//       <motion.div style={{ opacity: glowOpacity }}>
//         <GlowEffects />
//       </motion.div>

//       {/* Advanced Particle System */}
//       <ParticleSystem />

//       {/* Rotating geometric overlay */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none opacity-5"
//         style={{ 
//           rotateZ: rotateX,
//           background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.1), transparent)`
//         }}
//       />

//       {/* Animated mesh gradient */}
//       <motion.div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         animate={{
//           background: [
//             "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 25%, rgba(147, 51, 234, 0.1) 50%, transparent 75%, rgba(16, 185, 129, 0.1) 100%)",
//             "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 25%, rgba(16, 185, 129, 0.1) 50%, transparent 75%, rgba(59, 130, 246, 0.1) 100%)",
//             "linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, transparent 25%, rgba(59, 130, 246, 0.1) 50%, transparent 75%, rgba(147, 51, 234, 0.1) 100%)"
//           ]
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear" as const
//         }}
//       />

//       {/* Background elements with enhanced parallax */}
//       <motion.div
//         initial={{ opacity: 0, scale: 1.1 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, delay: 0.3 }}
//         style={{
//           transform: `translateY(${scrollY * 0.05}px) translateX(${scrollY * 0.02}px)`
//         }}
//       >
//         <BackgroundElements />
//       </motion.div>

//       {/* Navbar with enhanced animation */}
//       <motion.div 
//         variants={navbarVariants}
//         whileHover={{ scale: 1.01 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Navbar scrollY={scrollY} />
//       </motion.div>

//       {/* Hero section with dramatic entrance */}
//       <motion.div 
//         variants={heroVariants}
//         whileHover={{ scale: 1.01 }}
//         transition={{ duration: 0.5 }}
//       >
//         <HeroSection prompt={prompt} setPrompt={setPrompt} />
//       </motion.div>

//       {/* Enhanced sections with viewport-triggered animations */}
//       <motion.div 
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         whileHover={{ scale: 1.005 }}
//         transition={{ duration: 0.3 }}
//       >
//         <FeaturesSection />
//       </motion.div>

//       <motion.div 
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         whileHover={{ scale: 1.005 }}
//         transition={{ duration: 0.3 }}
//       >
//         <HowitWork />
//       </motion.div>

//       <motion.div 
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         whileHover={{ scale: 1.005 }}
//         transition={{ duration: 0.3 }}
//       >
//         <FaqSection />
//       </motion.div>

//       <motion.div 
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         whileHover={{ scale: 1.005 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Footer />
//       </motion.div>

//       {/* Enhanced premium effects */}
//       <motion.div 
//         className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.1, 0.2, 0.1]
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut" as const
//         }}
//       />
      
//       <motion.div 
//         className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
//         animate={{
//           scale: [1.2, 1, 1.2],
//           opacity: [0.2, 0.1, 0.2]
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut" as const
//         }}
//       />
      
//       {/* Dynamic vignette effect */}
//       <motion.div 
//         className="absolute inset-0 pointer-events-none"
//         animate={{
//           background: [
//             "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%)",
//             "radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.2) 100%)",
//             "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%)"
//           ]
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut" as const
//         }}
//       />

//       {/* Subtle scanline effect */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none opacity-5"
//         style={{
//           background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
//         }}
//         animate={{
//           y: [-100, 0]
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "linear" as const
//         }}
//       />
//     </motion.div>
//   );
// }
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { FaqSection } from '../components/FaqSection';
import { WilderFooter as Footer } from '../components/Footer';
import { BackgroundElements } from '../components/BackgroundElements';
import HowitWork from '@/components/Works';

// Enhanced Particle System Component
const ParticleSystem = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs - increased count */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm"
          style={{
            width: `${15 + i * 6}px`,
            height: `${15 + i * 6}px`,
            left: `${5 + (i * 8) % 90}%`,
            top: `${5 + (i * 7) % 80}%`,
          }}
          animate={{
            y: [-20, -80, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut" as const
          }}
        />
      ))}
      
      {/* Medium flowing dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`medium-dot-${i}`}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-50, -150],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut" as const
          }}
        />
      ))}
      
      {/* Micro particles - increased count */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-100, -200],
            x: [0, Math.random() * 30 - 15],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut" as const
          }}
        />
      ))}

      {/* Tiny sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut" as const
          }}
        />
      ))}

      {/* Larger flowing bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full border border-blue-400/20 bg-blue-400/5"
          style={{
            width: `${40 + i * 8}px`,
            height: `${40 + i * 8}px`,
            left: `${10 + i * 12}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [-30, -120, -30],
            x: [-15, 15, -15],
            scale: [0.8, 1.1, 0.8],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut" as const
          }}
        />
      ))}
      
      {/* Geometric shapes - increased count */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-purple-400/20 backdrop-blur-sm"
          style={{
            width: `${20 + i * 8}px`,
            height: `${20 + i * 8}px`,
            left: `${15 + i * 11}%`,
            top: `${15 + i * 11}%`,
            borderRadius: i % 2 === 0 ? '50%' : '0%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
            y: [-20, -60, -20]
          }}
          transition={{
            duration: 6 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear" as const
          }}
        />
      ))}

      {/* Diagonal flowing lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          style={{
            width: `${100 + i * 50}px`,
            height: '1px',
            left: `${i * 15}%`,
            top: `${i * 15}%`,
            rotate: '45deg'
          }}
          animate={{
            x: [-200, 200],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut" as const
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Glow Effects Component
const GlowEffects = () => {
  return (
    <>
      {/* Dynamic gradient overlays */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 80%, rgba(239, 68, 68, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      
      {/* Pulsing glow spots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: `${200 + i * 50}px`,
            height: `${200 + i * 50}px`,
            left: `${10 + i * 20}%`,
            top: `${5 + i * 20}%`,
            background: `linear-gradient(45deg, ${
              ['rgba(59, 130, 246, 0.1)', 'rgba(147, 51, 234, 0.1)', 'rgba(16, 185, 129, 0.1)', 'rgba(239, 68, 68, 0.1)', 'rgba(245, 158, 11, 0.1)'][i]
            }, transparent)`
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut" as const
          }}
        />
      ))}
    </>
  );
};

export function Home() {
  const { prompt, setPrompt } = useAppContext();
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Advanced scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 0.6, 0.2]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  // Enhanced animation variants - FIXED TYPE ISSUES
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const navbarVariants = {
    hidden: { 
      opacity: 0, 
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const heroVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 min-h-screen relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ perspective: 1000 }}
    >
      {/* Enhanced layered backgrounds */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-cyan-950/30 pointer-events-none"
        style={{ y: backgroundY }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-purple-950/10 to-pink-950/20 pointer-events-none"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />

      {/* Enhanced Glow Effects */}
      <motion.div style={{ opacity: glowOpacity }}>
        <GlowEffects />
      </motion.div>

      {/* Advanced Particle System */}
      <ParticleSystem />

      {/* Rotating geometric overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{ 
          rotateZ: rotateX,
          background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.1), transparent)`
        }}
      />

      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 25%, rgba(147, 51, 234, 0.1) 50%, transparent 75%, rgba(16, 185, 129, 0.1) 100%)",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 25%, rgba(16, 185, 129, 0.1) 50%, transparent 75%, rgba(59, 130, 246, 0.1) 100%)",
            "linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, transparent 25%, rgba(59, 130, 246, 0.1) 50%, transparent 75%, rgba(147, 51, 234, 0.1) 100%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear" as const
        }}
      />

      {/* Background elements with enhanced parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          transform: `translateY(${scrollY * 0.05}px) translateX(${scrollY * 0.02}px)`
        }}
      >
        <BackgroundElements />
      </motion.div>

      {/* Navbar with enhanced animation */}
      <motion.div 
        variants={navbarVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar scrollY={scrollY} />
      </motion.div>

      {/* Hero section with clean entrance */}
      <motion.div 
        variants={heroVariants}
      >
        <HeroSection prompt={prompt} setPrompt={setPrompt} />
      </motion.div>

      {/* Enhanced sections with viewport-triggered animations */}
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3 }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3 }}
      >
        <HowitWork />
      </motion.div>

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3 }}
      >
        <FaqSection />
      </motion.div>

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3 }}
      >
        <Footer />
      </motion.div>

      {/* Enhanced premium effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      
      {/* Dynamic vignette effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%)",
            "radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.2) 100%)",
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />

      {/* Subtle scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
        }}
        animate={{
          y: [-100, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear" as const
        }}
      />
    </motion.div>
  );
}