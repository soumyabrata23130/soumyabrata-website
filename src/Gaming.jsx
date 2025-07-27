export default function Gaming() {
  return (
    <section id="gaming">
      <h3 className="font-bold my-4 text-2xl text-center">Gaming</h3>
      <div className="section-flex">
        <div className="card w-1/3 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">Games</h4>
          <hr />
          <p className="my-1 text-center">Airport City (since 2025)</p>
          <p className="my-1 text-center">
            Kerbal Space Program (KSP) (since 2025)
          </p>
          <p className="my-1 text-center">
            Orbiter Space Flight Simulator (since 2018)
          </p>
        </div>
        <div className="card w-1/3 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">PC</h4>
          <hr />
          <p className="my-1 text-center">Victus by HP Gaming Laptop</p>
          <p className="my-1 text-center">13th Gen Intel Core i5-13420H</p>
          <p className="my-1 text-center">2.10 GHz, 16GB RAM</p>
        </div>
      </div>
    </section>
  );
}
