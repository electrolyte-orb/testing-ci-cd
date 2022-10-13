import { Navbar, Framer, Gsap, Anime } from "@components";

function App() {
  return (
    <>
      <Navbar />
      <section className="p-5">
        <h1 className="text-6xl lg:text-9xl font-black">Hello world</h1>
        <div className="border border-gray-300 p-4 rounded-lg mt-4">
          <h1 className="text-3xl font-black">Framer Motion</h1>
          <Framer />
        </div>
        <div className="border border-gray-300 p-4 rounded-lg mt-4">
          <h1 className="text-3xl font-black">Green Sock</h1>
          <Gsap />
        </div>
        <div className="border border-gray-300 p-4 rounded-lg mt-4">
          <h1 className="text-3xl font-black">Anime.js</h1>
          <Anime />
        </div>
      </section>
    </>
  );
}

export default App;
