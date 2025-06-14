// import { ChevronDown } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Disclosure } from '@headlessui/react';
// import { cn } from '../utils/cn';

// export function FaqSection() {
//   const faqs = [
//     {
//       question: 'How does Bolt turn my prompts into a website?',
//       answer:
//         'Bolt uses advanced AI to interpret your natural language description and generate the necessary code to create a fully functional website. It analyzes your requirements and produces HTML, CSS, and JavaScript files that match your vision.',
//     },
//     {
//       question: 'Can I customize the generated website?',
//       answer:
//         'Absolutely! Bolt provides a full-featured code editor where you can make precise adjustments to any aspect of your website. The changes are reflected in real-time in the preview window.',
//     },
//     {
//       question: 'What kind of websites can I create with Bolt?',
//       answer:
//         "Bolt can help you create a wide range of websites, from simple landing pages to complex web applications with dynamic functionality. It's suitable for portfolios, blogs, e-commerce sites, dashboards, and more.",
//     },
//     {
//       question: 'Do I need coding experience to use Bolt?',
//       answer:
//         'No coding experience is required. Bolt is designed to be accessible to everyone, regardless of technical background. However, if you do have coding experience, you can leverage it to make more advanced customizations.',
//     },
//     {
//       question: 'How do I deploy my website?',
//       answer:
//         'Bolt allows you to download your generated website as a zip file. You can then host it on any web server or platform of your choice, such as GitHub Pages, Netlify, or Vercel.',
//     },
//   ];

//   return (
//     <section id="faq" className="py-20 md:py-30 relative z-10">
//       <div className="max-w-4xl mx-auto px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <motion.div
//             initial={{ filter: 'blur(10px)' }}
//             animate={{ filter: 'blur(0px)' }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-3xl font-semibold text-white mb-4">FAQ's </h2>
//             <p className="text-lg text-gray-400">
//               Find answers to common questions about Bolt.
//             </p>
//           </motion.div>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-800 rounded-lg overflow-hidden"
//               initial={{ filter: 'blur(10px)' }}
//               animate={{ filter: 'blur(0px)' }}
//               transition={{ duration: 0.3 }}
//             >
//               <Disclosure>
//                 {({ open }) => (
//                   <div>
//                     <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-white bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
//                       <span className="text-base font-medium">
//                         {faq.question}
//                       </span>
//                       <ChevronDown
//                         className={cn(
//                           'w-5 h-5 text-blue-400 transition-transform',
//                           open ? 'transform rotate-180' : ''
//                         )}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="px-6 py-2 text-sm bg-gray-900/30 backdrop-blur-sm text-gray-300">
//                       {faq.answer}
//                     </Disclosure.Panel>
//                   </div>
//                 )}
//               </Disclosure>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { cn } from '../utils/cn';

export function FaqSection() {
  const faqs = [
    {
      question: 'How does Wilder transform my ideas into stunning websites?',
      answer:
        'Wilder harnesses cutting-edge AI to understand your vision and craft beautiful, fully-functional websites from your natural language descriptions. Our intelligent system analyzes your requirements and generates clean, modern code that brings your ideas to life instantly.',
    },
    {
      question: 'Can I customize and refine my Wilder-generated website?',
      answer:
        'Absolutely! Wilder empowers you with a professional-grade code editor where you can fine-tune every detail of your website. Watch your changes come alive in real-time with our seamless preview experience.',
    },
    {
      question: 'What amazing websites can I build with Wilder?',
      answer:
        "Wilder unleashes your creativity to build anything from sleek landing pages to sophisticated web applications. Create stunning portfolios, dynamic blogs, powerful e-commerce platforms, interactive dashboards, and so much more - all powered by AI.",
    },
    {
      question: 'Do I need to be a developer to create with Wilder?',
      answer:
        'Not at all! Wilder is designed for dreamers and creators of all backgrounds. Simply describe your vision, and watch it come to life. For those with coding experience, Wilder becomes an even more powerful tool for advanced customization.',
    },
    {
      question: 'How do I share my Wilder creation with the world?',
      answer:
        'Wilder makes it effortless to launch your website. Download your complete project and deploy it anywhere - from GitHub Pages to Netlify, Vercel, or any hosting platform. Your website is ready to inspire the world.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)'
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      filter: 'blur(20px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)'
    },
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about creating with Wilder's AI-powered platform
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group"
            >
              <Disclosure>
                {({ open }) => (
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden hover:border-gray-700/50 transition-all duration-300">
                      <Disclosure.Button className="flex justify-between items-center w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 group">
                        <span className="text-lg font-semibold text-white pr-4 group-hover:text-purple-200 transition-colors duration-300">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: open ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                        </motion.div>
                      </Disclosure.Button>
                      
                      <Disclosure.Panel className="overflow-hidden">
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-8 pb-6 pt-0">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />
                            <p className="text-gray-300 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </Disclosure.Panel>
                    </div>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <p className="text-sm text-gray-500">
            Join our community or reach out to our support team for personalized assistance
          </p>
        </motion.div>
      </div>
    </section>
  );
}