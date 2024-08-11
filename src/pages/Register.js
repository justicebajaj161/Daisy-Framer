import React, { useEffect, useRef } from 'react'
import Forminput from '../components/Forminput'
import Submitbutton from '../components/Submitbutton'
import { Form, Link } from 'react-router-dom'
import { motion , useAnimation } from 'framer-motion';
import Typed from 'typed.js';

const Register = () => {
  const controls = useAnimation();
  const typedRef = useRef(null);
  const typedReftwo = useRef(null);

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

  useEffect(() => {
    const currentRef = typedRef.current;
  
    const options = {
      strings: ["Already a member?"],
      typeSpeed: 33,
      loop: false, 
      showCursor: false, 
      startDelay: 1500 
    };
  
    const typed = new Typed(currentRef, options);
  
    return () => {
      typed.destroy();
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, []);

  useEffect(() => {
    const currentRef = typedReftwo.current;
  
    const options = {
      strings: ["Login"],
      typeSpeed: 33,
      loop: false, 
      showCursor: false, 
      startDelay: 2500 
    };
  
    const typed = new Typed(currentRef, options);
  
    return () => {
      typed.destroy();
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className='register-container grid h-screen place-items-center'>
    <motion.div className='box' initial={{y:-1000}} animate={controls} transition={{ delay: 1, duration: 1 }} >
    <Form method='post' className='card w-96 shadow-2xl p-8 bg-base-100'>
      <motion.div className='login-title text-center text-3xl font-bold' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>Register</motion.div>
      <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ delay: 0.6, duration: 0.6 }}><Forminput type='text' label='Username' name='username' /></motion.div>
      <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ delay: 0.6, duration: 0.6 }}><Forminput type='email' label='Email' name='email'/></motion.div>
      <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ delay: 0.6, duration: 0.6 }}><Forminput type='password' label='Password' name='password'/></motion.div>

      <motion.div className='mt-4' initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <Submitbutton text='Register' />
      </motion.div>
      <motion.div className='flex justify-center'>
      <p className='text-center font-semibold mt-2' ref={typedRef}></p>
      <p className='mt-2 text-center font-semibold'><Link to='/login' className='ml-2 link link-hover link-secondary capitalize' ref={typedReftwo}></Link></p>
        
        </motion.div>
    </Form>
    </motion.div>
  </section>
  )
}

export default Register