import VueSalle from "../assets/VueSalle.png";

const Who = () => {
  return (
    <section className="grid gap-8">
      <div>
        <img className="w-full" src={VueSalle} />
      </div>
      <div className="mx-4">
        <h1 className="text-4xl mb-4 flex justify-center">Qui suis-je?</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas
          impedit ex aliquam amet repellendus a sunt quibusdam dolorum explicabo
          sit, ipsam voluptatem corrupti nemo? Dignissimos fugiat reiciendis rem
          omnis.
        </p>
      </div>
      
    </section>
  );
};

export default Who;
