"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Lantern animation variants
const lanternVariants = {
  sway: (i: number) => ({
    y: [0, -10, 0],
    x: [0, i % 2 === 0 ? 5 : -5, 0],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const lanternColors = ["#ffe66d", "#4a90e2", "#ffe66d", "#e60000", "#ffe66d", "#4a90e2", "#e60000"];
const lanternSizes = [
  { w: 40, h: 60},
  { w: 34, h: 40 },
  { w: 63, h: 94 },
  { w: 52, h: 70 },
  { w: 60, h: 90 },
  { w: 39, h: 50 },
  { w: 29, h: 40 },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      <div className="flex h-screen bg-white text-black overflow-hidden">
        {/* Left Panel */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-screen w-1/4 min-w-[300px] bg-[#ffe66d] relative flex flex-col items-center pt-8 px-6"
        >
          {/* Logo Container */}
          <div className="flex items-center gap-4 mb-12">
            <motion.img
              src="/samurai-helmet.svg"
              alt="Samurai Helmet"
              className="w-16 h-16"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            />
            <h2 className="text-3xl font-bold tracking-wider text-white">SAMURAI</h2>
          </div>

          {/* Vertical Japanese Text */}
          <div className="writing-vertical-rl absolute top-[15%] text-8xl font-japanese text-white font-bold tracking-[1rem]">
            侍道は名誉
          </div>

          {/* Bottom Quote */}
          <div className="absolute bottom-7 text-red-600 font-bold text-center max-w-[80%]">
            <p className="text-sm mb-0">THE WAY OF THE SAMURAI IS TO LIVE BY HONOR AND LOYALTY</p>
          </div>
        </motion.div>

        {/* Right Panel */}
        <div className="flex-1 relative">
          {/* Sun Circle */}
          <div className="absolute left-[-50px] top-9/22 transform -translate-y-1/2 w-[300px] h-[300px] bg-red-600 rounded-full z-50" />
          {/* Lanterns */}
          <div className="relative flex justify-around py-8">
            {lanternColors.map((color, i) => (
              <div key={i} className="relative" style={{ marginTop: `${i % 2 * 20}px` }}>
                {/* Wire */}
                <motion.div 
                  custom={i}
                  variants={lanternVariants}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0.5"
                  animate={{
                    y: [-10, 10],
                    height: [54, 74], // 64px - 10px to 64px + 10px to maintain connection
                    transition: {
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      repeatType: "reverse", 
                      ease: "easeInOut"
                    }
                  }}
                  style={{ 
                    background: color,
                    opacity: 0.5,
                    width: '1px',
                  }}
                />
                {/* Lantern */}
                <motion.div
                  custom={i}
                  variants={lanternVariants}
                  animate={{
                    y: [-10, 10],
                    transition: {
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  className="lantern-glow relative"
                  style={{
                    width: `${lanternSizes[i].w}px`,
                    height: `${lanternSizes[i].h}px`,
                    backgroundColor: color,
                    borderRadius: '35%',
                    opacity: 0.5,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="px-12 py-16 relative z-10"
          >
            
            
          </motion.div>
        </div>
      </div>

      <div className="bottom-0 left-0 right-0 text-center text-white p-12 bg-[#ffe66d] mt-1">
        <motion.div>
          <h1 className="text-7xl font-bold mb-8 text-red-600">
            CYBER SAMURAI
          </h1>
          <p className="text-sm text-gray-600">
            CYBER SAMURAI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/5 backdrop-blur-lg rounded-xl p-8 border-l-4 border-red-600"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600">Honor</h2>
                <p className="text-gray-700">
                  True strength lies not in the sword, but in the heart.
                </p>
                <p className="font-japanese text-sm mt-2 text-gray-600">
                  真の強さは刀ではなく、心にある
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/5 backdrop-blur-lg rounded-xl p-8 border-l-4 border-red-600"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600">Loyalty</h2>
                <p className="text-gray-700">
                  Walk the path of honor with unwavering dedication.
                </p>
                <p className="font-japanese text-sm mt-2 text-gray-600">
                  揺るぎない献身で名誉の道を歩む
                </p>
              </motion.div>
            </div>
      </div>
    </div>
  );
}
