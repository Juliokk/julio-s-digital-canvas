import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Aurora blobs - higher opacity for light mode visibility */}
      <motion.div
        className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full opacity-30 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-[20%] -right-[20%] w-[70%] h-[70%] rounded-full opacity-25 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(212 95% 55% / 0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-[30%] left-[20%] w-[60%] h-[60%] rounded-full opacity-25 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(280 85% 55% / 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, -30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mesh overlay for texture - visible in both modes */}
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
