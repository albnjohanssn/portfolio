import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className='mt-20'>
        <div className='flex justify-center'>
          <h1 className='text-5xl text-zinc-800'>Hello, I&apos;m albn_johanssn!</h1>
        </div>
        <div className='my-20 flex justify-center'>
          <Image
            alt="Your Company"
            src="/profile_picture.jpg"
            width={164}
            height={164}
            className="rounded-full"
          />
        </div>
      </header>
      <main className='my-20 flex justify-center'>
        <header className='flex flex-row gap-x-16'>
          <h2 className='text-3xl text-zinc-800'>Designer</h2>
          <h2 className='text-3xl text-zinc-800'>Software Developer</h2>
          <h2 className='text-3xl text-zinc-800'>Student</h2>
        </header>
      </main>
      <Footer />
    </div>
  );
}
