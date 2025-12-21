function Entry({ year, degree, school, location }) {
  return (
    <div className="card rounded-xl grid grid-cols-3 gap-8">
      <h4 className="font-bold text-lg text-right">{year}</h4>
      <div className="col-span-2 text-left">
        <p>{degree}</p>
        <p>{school}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education">
      <h3 className="font-bold my-4 text-2xl text-center">Education</h3>
      <div className="grid gap-4">
        <Entry
          year="2023-2027"
          degree="Bachelor of Technology in Computer Science and Engineering"
          school="Academy of Technology"
          location="Adisaptagram, WB"
        />
        <Entry
          year="2011-2023"
          degree="School Education (State Board)"
          school="Burdwan Town School"
          location="Bardhaman, WB"
        />
      </div>
    </section>
  );
}
