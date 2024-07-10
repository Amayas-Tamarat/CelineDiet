import HomePhoto from "../assets/HomePhoto.jpg";

const Home = () => {
  return (
    <div className="relative w-full">
      <img
        className="object-cover w-full h-[55vh]" src={HomePhoto} alt="Home background"/>
      <div className="absolute inset-0 flex flex-col items-center justify-center h-[55vh]">
        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tight text-rose-400 md:text-5xl lg:text-6xl dark:text-white w-[15vw] text-center justify-center">
          Céline Fougerouse
        </h1>
        <p className="mb-8 text-white leading-none tracking-tight font-bold">
          Diététicienne et coach sportive
        </p>
        <button className="mb-8 bg-slate-900 hover:bg-slate-950 text-white py-2 px-4 rounded font-bold">
          Prendre RDV
        </button>
      </div>
    </div>
  );
};

export default Home;
