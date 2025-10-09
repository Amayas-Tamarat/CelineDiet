import React from "react";

const Home = () => {
    return (
        <div className="relative mt-6 mb-14 flex justify-center items-center">
            <div className="relative w-full xl:w-[50%] mx-6 flex justify-center items-center">
                <picture className="w-full flex justify-center items-center">
                    <source
                        media="(min-width: 640px)"
                        srcSet="/LogoGrand.png"
                        type="image/png"
                    />
                    <img
                        src="/Logo.png"
                        alt="Illustration décorative"
                        className="w-full h-auto"
                    />
                </picture>
                <a
                    href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                    className=" absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 md:text-xl lg:text-2xl"
                    target="_blank"
                >
                    Prendre RDV
                </a>
            </div>
        </div>
    );
};

export default Home;
