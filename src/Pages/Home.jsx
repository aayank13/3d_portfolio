import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Earth from '../models/earth';


const Home = () => {
  return (
    <section className='w-full h-screen relative'>
     <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000}}>
      <Suspense fallback={<Loader />}>
        <directionalLight />
        <ambientLight />
        <pointLight />
        <spotLight />
        <hemisphereLight />
        <Earth />
      </Suspense>

     </Canvas>

    </section>
  )
}

export default Home;



// <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'> 
//     <p> Right now, I'm building <a class="underline decoration-gray-400 text-black font-medium rounded-md hover:bg-gray-200 transition-colors motion-reduce:transition-none duration-200" href="https://learnexpo.app">@LearnExpo</a>: The Open Learning place. My hope is that one day, we'll be able to learn, teach, and collaborate on the <span class="italic">web</span>.</p>
//     </div>
    