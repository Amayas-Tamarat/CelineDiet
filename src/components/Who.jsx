import VueSalle from "../assets/VueSalle.png";

const Who = () => {
  return (
    <section className="grid gap-8 sm:grid-cols-2 sm:text-left sm:mx-8 mb-4 sm:pt-4 sm:ml-16">
      <div className="flex justify-center items-center">
        <img className="h-48 rounded-lg sm:h-[100%] sm:ml-5" src={VueSalle} />
      </div>
      <div className="mx-9 sm:ml-11">
        <h1 className="text-5xl mb-8 flex justify-center font-semibold sm:justify-start sm:text-7xl">Qui suis-je?</h1>
        <p className="text-justify leading-loose text-grey sm:w-[75%] sm:text-2xl sm:leading-10">
          Forte de mes deux compétences, la Diététique reconnue par un BTS
          Diététique et le Sport par une licence STAPS option Activités physique adaptées, ma double qualification vous apportera une
          expertise complète et qualitative. Je vous propose des consultations diététiques et/ou des séances pratiques de sport adapté. Les prises en
          charge s'adressent à toutes personnes atteintes de pathologies chroniques, digestives ou métaboliques ou à tous ceux désireux de
          retrouver une alimentation équilibrée et le plaisir de bouger
          quotidiennement.
        </p>
      </div>
    </section>
  );
};

export default Who;
