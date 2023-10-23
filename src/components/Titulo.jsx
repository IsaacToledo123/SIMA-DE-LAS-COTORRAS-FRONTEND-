import React from 'react';
import { motion } from 'framer-motion';

const Titulo = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -300 }, 
    visible: { opacity: 1, y: 0 }
  };

  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className='pl-20 pr-20'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className='flex justify-center p-5 rounded-lg bg-red-800 opacity-90'
        transition={{ duration: 0.3}}

      >
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={textVariants}
          className='capitalize md:uppercase text-white text-5xl'
        >
          Registro de Usuario
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Titulo;
