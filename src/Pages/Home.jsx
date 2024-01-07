import React from 'react';
import { Canvas } from '@react-three/fiber';


const Home = () => {
  return (
    <section  className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'> 
    <p> Right now, I'm building <a class="underline decoration-gray-400 text-black font-medium rounded-md hover:bg-gray-200 transition-colors motion-reduce:transition-none duration-200" href="https://learnexpo.app">@LearnExpo</a>: The Open Learning place. My hope is that one day, we'll be able to learn, teacb, and collaborate on the <span class="italic">web</span>.</p>
    </div>
    
      <Canvas>
      </Canvas>
    </section>
  )
}

export default Home;