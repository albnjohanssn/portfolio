import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from "next/image"

export default function about() {
  return <div>
    <Navbar />
    <header className='flex justify-center mt-32'>
      <h1 className='text-4xl font-medium'>About Me</h1>
    </header>
    <div className='flex justify-center items-center mt-6'>
      <article className='text-left min-w-20 max-w-96'>
        <p>I&apos;m 19 years old and currently studing software development on my senior year at Optima - Jakobstad, Finland. My strenghts are UI and UX design. I sometimes dabble in game development and video editing as a hobby.</p>
      </article>
    </div>
    <div className='my-8 flex justify-center'>
      <Image
        alt="Your Company"
        src="/profile_picture.jpg"
        width={164}
        height={164}
        className="inline-block rounded-full"
      />
    </div>
    <Footer />
  </div>;
}
