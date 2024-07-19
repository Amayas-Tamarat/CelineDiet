import VueSalle from "../assets/VueSalle.png";

const Who = () => {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left">
      <div>
        <h1 className="text-6xl">
          Qui suis-je?
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas
          impedit ex aliquam amet repellendus a sunt quibusdam dolorum explicabo
          sit, ipsam voluptatem corrupti nemo? Dignissimos fugiat reiciendis rem
          omnis.
        </p>
      </div>
      <div>
        <img className="w-full " src={VueSalle} />
      </div>
    </section>
  );
};

export default Who;
