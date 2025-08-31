import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";

// Custom hook for typewriter effect
const useTypewriter = (text, speed = 50, delay = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayedText("");
    }, delay);
    
    return () => clearTimeout(initialDelay);
  }, [delay]);

  return displayedText;
};

const Hero = () => {

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <style>{`
        .typewriter-text:first-of-type::after {
          content: '|';
          animation: blink 0.8s ease-in-out infinite;
          color: white;
          font-weight: bold;
        }
        
        .typewriter-text:not(:first-of-type)::after {
          content: '|';
          animation: blink 0.8s ease-in-out infinite;
          color: #915EFF;
          font-weight: bold;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .typewriter-text {
          display: inline-block;
          min-height: 1.2em;
        }
      `}</style>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="typewriter-text">{useTypewriter("Hey there! I'm", 50)}</span>
            <br />
            <span className='text-[#915EFF] typewriter-text'>{useTypewriter("Dhruv Tripathi", 60, 800)}</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            <div className="flex flex-col gap-3 text-xl md:text-2xl lg:text-3xl">
              <div className="flex items-center gap-3">
                <span className="text-white/90 font-medium">🧠 Learning Today's ML, Building Tomorrow's AI</span>
                <span className="text-white/50 text-lg">|</span>
                <span className="text-white/90 font-medium">💻 Coding with Precision,</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/90 font-medium"> Learning with Passion</span>
                <span className="text-white/50 text-lg">|</span>
                <span className="text-white/90 font-medium">🚀 Solving Real-World Problems</span>
                
              </div>
              
            </div>
          </div>
          <p className="mt-4 text-secondary text-xl max-w-6xl leading-relaxed">
          I am a third-year B.Tech (Information Technology) student driven by a passion for technology and innovation. I hold a strong foundation in machine learning and am building expertise in artificial intelligence and quantum computing. My interests span intelligent systems and advanced computing. I develop practical projects and write clean, efficient code to turn theory into impactful solutions.
          </p>
        </div>
      </div>

      


    </section>
  );
};

export default Hero;
