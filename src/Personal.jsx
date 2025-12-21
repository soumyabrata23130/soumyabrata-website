import Entry from "./Entry.jsx";

export default function Personal() {
  return (
    <section id="personal">
      <h3 className="font-bold my-4 text-2xl text-center">
        Personal Details
      </h3>
      <div className="grid gap-4">
        <Entry
          title="Birth"
          content={
            <div>
              {/* birth date */}
              <p>27 May 2004</p>
              {/* birthplace */}
              <p>SDO Hospital, P.O. Bolpur<br />
                Dist: Birbhum, PIN: 731204<br />
                State: West Bengal, India</p>
            </div>
          }
        />
        <Entry
          title="Parents"
          content={
            <div>
              {/* mother */}
              <p>Papiya Bhattacharjee (née Goswami; born 1980)</p>
              {/* father */}
              <p>Rajesh Bhattacharjee (born 1974)</p>
            </div>
          }
        />
        <Entry
          title="Languages"
          content={
            <div>
              <p>Bengali (first)</p>
              <p>English (second)</p>
              <p>Hindi (self-learned)</p>
            </div>
          }
        />
        <Entry
          title="Memberships"
          content={
            <div>
              <p>Tech Team, IEI Students' Chapter CSE (2025-present)</p>
              <p>Resourcio Community (2025-present)</p>
              <p>IEI Students' Chapter CSE (2024-present)</p>
            </div>
          }
        />
      </div>
    </section>
  );
}
