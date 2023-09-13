import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import List from '../../assets/images/list.jpg';

const Chart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() > 0.9) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYProgress]);

  const textMotion = {
    initial: { opacity: 0 },
    animate: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 },
    exit: { opacity: 0, y: isVisible ? -50 : 0 },
    transition: { duration: 2, ease: 'easeInOut' },
  };

  const imageMotion = {
    initial: { opacity: 0 },
    animate: { opacity: isVisible ? 1 : 0, y: isVisible ? 1 : -75 },
    exit: { opacity: 0, y: isVisible ? -50 : 0 },
    transition: { duration: 2, ease: 'easeInOut', delay: 1 },
  };

  return (
    <>
      <header className="bg-cover bg-center h-screen  bg-white " style={{}}>
        <div className="w-full h-full  bg-opacity-70">
          <div className="flex flex-col justify-center items-center ">
            <motion.div ref={ref} {...textMotion}>
              <div className=" font-sigmar-one text-5xl mt-20 ">
                <p>당신이 어디에 있든</p>
                <p>당신의 기분에 따라</p>
                <span>날시에 따라</span>
                <p>자기의 노래를 추천하는</p>
              </div>
            </motion.div>
            <motion.div {...imageMotion}>
              <img src={List} alt="" className="w-[300px] h-[300px] mt-24" />
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Chart;
