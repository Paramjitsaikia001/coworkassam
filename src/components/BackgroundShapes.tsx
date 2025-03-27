import React from "react";
import { motion } from "framer-motion";

const shapes = [
  { id: 1, className: "bg-blue-500 rounded-full", size: "w-48 h-48", x: -300, y: 50 },
  { id: 2, className: "bg-yellow-400 rounded-lg", size: "w-40 h-40", x: 350, y: -100 },
  { id: 3, className: "bg-pink-500 rounded-full", size: "w-56 h-56", x: -200, y: 200 },
  { id: 4, className: "bg-green-400 rotate-45", size: "w-32 h-32", x: 300, y: 300 },
  { id: 5, className: "bg-purple-500 rounded-full", size: "w-52 h-52", x: -250, y: -150 },
];

const BackgroundShapes: React.FC = () => {
  return (
    <div className="absolute w-[80vw] h-[80vh] px-8 inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.className} opacity-40`}
          initial={{ x: shape.x, y: shape.y, scale: 0.9, rotate: 0 }}
          animate={{
            x: [shape.x, shape.x + 30, shape.x],
            y: [shape.y, shape.y - 30, shape.y],
            rotate: [0, 180, 360],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
      ))}
    </div>
  );
};

export default BackgroundShapes;
