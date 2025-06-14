// import { Cpu, Code, Zap, FlaskConical, Layers, Globe } from 'lucide-react';
// import { motion } from 'framer-motion';

// export function FeaturesSection() {
//   const features = [
//     {
//       icon: <Cpu className="w-6 h-6" />,
//       title: 'AI-Powered Generation',
//       description:
//         'Describe your website in natural language and watch as Bolt generates all the code and assets for you.',
//     },
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: 'Interactive Editor',
//       description:
//         'Make precise adjustments with our fully-featured code editor with syntax highlighting and autocompletion.',
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: 'Reprompt and Edit',
//       description:
//         'Easily reprompt or edit your website to get the perfect design and functionality you desire.',
//     },
//     {
//       icon: <FlaskConical className="w-6 h-6" />,
//       title: 'WebContainer Technology',
//       description:
//         'Run your web applications directly in the browser with our cutting-edge WebContainer technology.',
//     },
//     {
//       icon: <Layers className="w-6 h-6" />,
//       title: 'Step-by-Step Guidance',
//       description:
//         'Follow our intuitive step-by-step process to bring your web application from concept to completion.',
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: 'Download and Deploy',
//       description:
//         'Easily download your generated website as a zip file and host it on any platform of your choice.',
//     },
//   ];

//   return (
//     <motion.section
//       id="features"
//       className="relative z-10"
//       initial={{ filter: 'blur(10px)' }}
//       animate={{ filter: 'blur(0px)' }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-2xl sm:text-3xl text-center text-white font-medium">
//           Why Choose Bolt for Creating Website?
//         </h2>
//         <p className="text-lg text-center mt-4 max-w-lg mx-auto text-gray-400">
//           Bolt offers a powerful suite of features to make web development and
//           deployment effortless.
//         </p>
//         <div className="text-center text-3xl text-white font-medium mt-20">
//           <h1>Powerful Features!</h1>
//         </div>
//         <div className="text-center text-lg text-gray-400  mt-4">
//           <h3>Bolt is a powerful tool that combines the best of AI and web</h3>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 text-center px-4 sm:px-0 max-w-7xl mx-auto">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="width-fit text-left md:ml-7 border border-gray-800 rounded-lg p-4"
//               initial={{ filter: 'blur(10px)' }}
//               animate={{ filter: 'blur(0px)' }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <div className="flex items-center gap-2">
//                 <div className="mb-2 w-fit rounded-lg p-1 text-center text-blue-400">
//                   {feature.icon}
//                 </div>
//                 <div className="text-md mb-1 font-normal text-gray-900 dark:text-gray-100">
//                   {feature.title}
//                 </div>
//               </div>
//               <div className="font-regular max-w-sm text-sm text-gray-600 dark:text-gray-400">
//                 {feature.description}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }






import { Cpu, Code, Zap, FlaskConical, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const features = [
    {
      icon: <Cpu className="w-7 h-7" />,
      title: 'AI-Powered Creation',
      description:
        'Transform your wildest ideas into stunning websites with our advanced AI. Simply describe your vision, and watch it come to life instantly.',
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Professional Code Editor',
      description:
        'Fine-tune every detail with our premium code editor featuring intelligent autocomplete, syntax highlighting, and real-time previews.',
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Instant Iterations',
      description:
        'Evolve your website effortlessly. Refine, reprompt, and perfect your creation until it matches your exact vision.',
    },
    {
      icon: <FlaskConical className="w-7 h-7" />,
      title: 'WebContainer Innovation',
      description:
        'Experience the future of web development with our breakthrough WebContainer technology - run full applications directly in your browser.',
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: 'Guided Workflows',
      description:
        'From concept to launch, our intelligent guidance system ensures every step of your creative journey is smooth and intuitive.',
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'One-Click Deployment',
      description:
        'Launch your masterpiece to the world in seconds. Export, deploy, and share your website across any platform with ease.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      filter: 'blur(20px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)'
    },
  };

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Creators Choose Wilder
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Unleash your creativity with AI-powered web development that transforms ideas into reality
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              {/* Main Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 h-full hover:border-gray-700/50 transition-all duration-300">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-400/30 transition-all duration-300">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20 pt-16 border-t border-gray-800/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Create Something Wild?
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of creators who are building the future of the web with Wilder's AI-powered platform
          </p>
        </motion.div>
      </div>
    </section>
  );
}