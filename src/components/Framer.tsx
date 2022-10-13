import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Framer() {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible((visiblity) => !visiblity)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Animate
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              scale: "0%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            transition={{ type: "tween" }}
            animate={{ scale: "100%" }}
            exit={{ scale: "0%" }}
            className="fixed top-1/2 left-1/2 h-96 w-[calc(100vw-60px)] bg-white shadow-2xl rounded-3xl border-gray-300 border p-4"
          >
            <button
              onClick={() => setVisible((visiblity) => !visiblity)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
