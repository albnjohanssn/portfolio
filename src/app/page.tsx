import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className='mt-20'>
        <div className='flex justify-center'>
          <h1 className='text-5xl text-zinc-800'>Hello, I'm albn_johanssn!</h1>
        </div>
        <div className='my-20 flex justify-center'>
          <img
            alt="profile_picture.jpg"
            src="/profile_picture.jpg"
            className="inline-block size-48 rounded-full"
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
