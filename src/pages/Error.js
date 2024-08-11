import React, { useEffect, useRef } from 'react'
import { useRouteError , Link } from 'react-router-dom'
import { motion , useAnimation} from 'framer-motion';
import Typed from 'typed.js';


const Error = () => {
    const error = useRouteError();
    const typedRef = useRef(null);
    const controls=useAnimation();


    useEffect(() => {
        if (error.status === 404) {
            const options = {
                strings: ["sorry for your inconvenience the page you're looking for doesn't exist..."],
                typeSpeed: 25,
                loop: false, 
                showCursor: false, 
            };
            const typed = new Typed(typedRef.current, options);

            return () => {
                typed.destroy();
            };
        }
    }, [error.status]);

    useEffect(() => {
        controls.start({
          y: 0,
          transition: {
            type: "spring",
            damping: 8,      // Reduced for more oscillation
            stiffness: 90,   // Adjusted for gentler bounce
            mass: 0.75,      // Adjust for faster or slower speed
            bounce: 0.7,     // Increased for more bounce
        
          }
        });
      }, [controls]);

 if(error.status===404){
    return <main className='error-container grid min-h-[80vh] place-items-center'>
        <div className='text-center'>
            <div className='status-404 flex justify-center'>
    <motion.div className='text-primary font-bold text-9xl' initial={{y:-1000}} animate={{ y: 0 }}
  transition={{ delay: 0.5,type: "spring",damping: 8, stiffness: 100,mass: 0.60,bounce: 10  }}>4</motion.div>
     <motion.div className='text-primary font-bold text-9xl' initial={{y:-1000}} animate={{ y: 0 }}
  transition={{ delay: 1,type: "spring",damping: 8, stiffness: 100,mass: 0.60,bounce: 10}}>0</motion.div>
     <motion.div className='text-primary font-bold text-9xl' initial={{y:-1000}} animate={{ y: 0 }}
  transition={{ delay: 1.5 ,type: "spring",damping: 8, stiffness: 100,mass: 0.60,bounce: 10}}>4</motion.div>
  </div>
    <motion.div className='page-not-found text-5xl mt-4 text-red-500 sm:text-2xl font-semibold' initial={{y:1000}} animate={{y:0}} transition={{delay:0.6,duration:0.6}}>Page Not Found</motion.div>
    <motion.div className='apology-404 mt-6 text-lg' ref={typedRef}></motion.div>
    <motion.div className='button-container mt-10' initial={{ y: 1000 }} animate={controls} transition={{ delay: 0.6, duration: 0.6 }}>
     <Link to='/' className='btn btn-secondary'>
      go back
     </Link>
    </motion.div>
    </div>
      </main>
      
 }


}

export default Error