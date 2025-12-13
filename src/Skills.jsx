export default function Skills() {
  return (
    <section id="skills">
      <h3 className="font-bold my-4 text-2xl text-center">Skills</h3>
      <div className="section-flex">
        <div className="card w-1/6 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">Languages</h4>
          <hr />
          <ul className="tags">
            <li>C</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="card w-1/6 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">Backend</h4>
          <hr />
          <ul className="tags">
            <li>Express</li>
            <li>Node.js</li>
            <li>SQLite</li>
          </ul>
        </div>
        <div className="card w-1/6 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">Frontend</h4>
          <hr />
          <ul className="tags">
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Vite</li>
          </ul>
        </div>
        <div className="card w-1/6 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">Python Libraries</h4>
          <hr />
          <ul className="tags">
            <li>Matplotlib</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Tkinter</li>
          </ul>
        </div>
        <div className="card w-1/6 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">Operating Systems</h4>
          <hr />
          <ul className="tags">
            <li>Ubuntu (WSL)</li>
            <li>Windows 11</li>
          </ul>
        </div>
        <div className="card w-1/6 flex-auto rounded-xl">
          <h4 className="font-bold text-lg text-center">Other Tools</h4>
          <hr />
          <ul className="tags">
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
