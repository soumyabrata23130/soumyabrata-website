export default function Skills() {
  return (
    <section id="skills">
      <h3 className="font-bold my-4 text-2xl text-center">Skills</h3>
      <div className="section-flex">
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Languages</h4>
          <hr />
          <ul className="tech">
            <li>C</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Frameworks</h4>
          <hr />
          <ul className="tech">
            <li>Bootstrap</li>
            <li>Flask</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Libraries</h4>
          <hr />
          <ul className="tech">
            <li>Matplotlib</li>
            <li>NumPy</li>
            <li>React</li>
            <li>Tkinter</li>
          </ul>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Operating Systems</h4>
          <hr />
          <ul className="tech">
            <li>Linux</li>
            <li>Windows 11</li>
          </ul>
        </div>
        <div className="card rounded-xl">
          <h4 className="font-bold text-lg text-center">Other Tools</h4>
          <hr />
          <ul className="tech">
            <li>Figma</li>
            <li>FreeCAD</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Inkscape</li>
            <li>Node.js</li>
            <li>Vite</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
