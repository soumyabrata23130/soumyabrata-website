export default function Personal() {
  return (
    <section id="personal">
      <h3 className="font-bold my-4 text-2xl text-center">
        Personal Details
      </h3>
      <div className="section-flex">
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Birth</h4>
          <hr />
          <p className="my-1 text-center">27 May 2004</p>
          <p className="my-1 text-center">SDO Hospital, P.O. Bolpur</p>
          <p className="my-1 text-center">Dist: Birbhum, PIN: 731204</p>
          <p className="my-1 text-center">State: West Bengal, India</p>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Parents</h4>
          <hr />
          <p className="my-1 text-center">
            Papiya Bhattacharya (née Goswami; born 1980)
          </p>
          <p className="my-1 text-center">Rajesh Bhattacharjee (born 1974)</p>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Languages</h4>
          <hr />
          <p className="my-1 text-center">Bengali (first)</p>
          <p className="my-1 text-center">English (second)</p>
          <p className="my-1 text-center">Hindi (self-learned)</p>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Memberships</h4>
          <hr />
          <p className="my-1 text-center">
            IEI Students' Chapter CSE (2024-present)
          </p>
        </div>
      </div>
    </section>
  );
}
