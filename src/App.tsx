import { Navbar } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <Navbar />
      <section className="p-5">
        <h1 className="text-6xl lg:text-9xl font-black">Hello world</h1>
        <motion.button
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => setVisible((visiblity) => !visiblity)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Click here
        </motion.button>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{
                scale: 0,
                translateX: "-50%",
                translateY: "-50%",
                scaleZ: "0%",
              }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
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
      </section>
    </>
  );
}

export default App;
