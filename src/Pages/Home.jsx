import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Earth from '../models/earth';
import Stars from '../models/stars';



const Home = () => {

  const adjustEarthForScreenSize = () => {
    let screenScale, screenPosition;
    let earthRotation = [0, 0, 0]; // Adjust as needed
  
    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8]; // Decrease the scale for smaller screens
      screenPosition = [0, -6.5, -40]; // Move the Earth closer for smaller screens
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -60]; // Move the Earth further for larger screens
    }
  
    return [screenScale, screenPosition, earthRotation];
  }
  

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

  return (
    <section className='w-full h-screen relative'>
     <Canvas className='w-full h-screen bg-transparent' camera={{ position: [0, 0, 160], fov: 40 }}>
      <Suspense fallback={<Loader />}>
        <Stars />
        <Earth 
          position = {earthPosition}
          scale = {earthScale}
          rotation = {earthRotation}
        />
      </Suspense>

     </Canvas>

    </section>
  )
}

export default Home;



// <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'> 
//     <p> Right now, I'm building <a class="underline decoration-gray-400 text-black font-medium rounded-md hover:bg-gray-200 transition-colors motion-reduce:transition-none duration-200" href="https://learnexpo.app">@LearnExpo</a>: The Open Learning place. My hope is that one day, we'll be able to learn, teach, and collaborate on the <span class="italic">web</span>.</p>
//     </div>
    