import React from 'react';

const Home = () => {
  return (
    <div className="relative mt-6 mb-14 flex xl:items-center xl:justify-center sm:items-center sm:justify-center">
      <picture className="xl:w-[50%] mx-6 flex justify-center items-center">
        <source
          media="(min-width: 640px)"
          srcSet="/src/assets/LogoGrand.png"
          type="image/png"
        />
        <img
          src="/src/assets/Logo.png"
          alt="Illustration décorative"
          className="w-full h-auto"
        />
      </picture>
      <div className="absolute inset-0  flex-col items-center justify-center top-[10%]  xl:top-[30%] xl:justify-center  hidden sm:flex">
        <a
          href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
          className=" lg:text-2xl absolute lg:top-[80%] lg:left-[46%] md:text-xl md:top-[80%] md:left-[42%] bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 xl:mr-6"
        >
          Prendre RDV
        </a>
      </div>
    </div>
  );
};

export default Home;