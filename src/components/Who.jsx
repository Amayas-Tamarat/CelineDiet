import VueSalle from "../assets/VueSalle.png";

const Who = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 mt-60">
      <h1 className="text-6xl flex justify-center items-start h-[300%]">
        Qui suis-je?
      </h1>
      <img className="row-span-3" src={VueSalle} />
      <p className="flex justify-center items-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas
        impedit ex aliquam amet repellendus a sunt quibusdam dolorum explicabo
        sit, ipsam voluptatem corrupti nemo? Dignissimos fugiat reiciendis rem
        omnis.
      </p>
    </div>
  );
};

export default Who;
