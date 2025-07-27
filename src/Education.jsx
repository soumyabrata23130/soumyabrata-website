export default function Education() {
  return (
    <section id="education">
      <h3 className="font-bold my-4 text-2xl text-center">Education</h3>
      <div className="section-flex">
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">
            Bachelor of Technology in
            <br />
            Computer Science and Engineering
          </h4>
          <hr />
          <h5 className="my-1 text-center">
            Academy of Technology (2023-present)
          </h5>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">
            School Education (State Board)
          </h4>
          <hr />
          <h5 className="my-1 text-center">
            Burdwan Town School (2011-2023)
          </h5>
          <p className="my-1 text-center">
            87.4% in Higher Secondary Examination
          </p>
          <p className="my-1 text-center">
            88% in Madhyamik Pariksha (Secondary Examination)
          </p>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">
            Preschool Education
          </h4>
          <hr />
          <h5 className="my-1 text-center">
            Junior Kindergarten at Saraswati Shishu Mandir (2009)
          </h5>
          <h5 className="my-1 text-center">
            Senior Kindergarten at Burdwan Town School (2010)
          </h5>
        </div>
      </div>
    </section>
  );
}
