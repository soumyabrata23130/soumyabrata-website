import Card from "./Card.jsx";

export default function Skills() {
  const languages = [
    'C',
    'Java',
    'JavaScript',
    'Python'
  ];

  const frontend = [
    'CSS',
    'HTML',
    'JavaScript',
    'React',
    'Tailwind',
    'Vite'
  ];

  const backend = [
    'Express',
    'Node.js',
    'SQLite'
  ];

  const python = [
    'Matplotlib',
    'NumPy',
    'Pandas',
    'Tkinter'
  ];

  const operating_systems = [
    'Android',
    'Fedora Linux',
    'Ubuntu LTS',
    'Windows 11'
  ];

  const version_control = [
    'Git',
    'GitHub',
    'GitLab'
  ];

  const others = [
    'Chrome',
    'Figma',
    'Firefox',
    'FreeCAD',
    'Inkscape',
    'VS Code'
  ];

  return (
    <section id="skills">
      <h3 className="font-bold my-4 text-2xl text-center">Skills</h3>
      <div className="section-flex">
        <Card
          title="Languages"
          content={
            <ul className="tags">
              {languages.map(lang => <li>{lang}</li>)}
            </ul>
          }
        />
        <Card
          title="Frontend"
          content={
            <ul className="tags">
              {frontend.map(front => <li>{front}</li>)}
            </ul>
          }
        />
        <Card
          title="Backend"
          content={
            <ul className="tags">
              {backend.map(back => <li>{back}</li>)}
            </ul>
          }
        />
        <Card
          title="Python Libraries"
          content={
            <ul className="tags">
              {python.map(py => <li>{py}</li>)}
            </ul>
          }
        />
        <Card
          title="Operating Systems"
          content={
            <ul className="tags">
              {operating_systems.map(os => <li>{os}</li>)}
            </ul>
          }
        />
        <Card
          title="Version Control"
          content={
            <ul className="tags">
              {version_control.map(vc => <li>{vc}</li>)}
            </ul>
          }
        />
        <Card
          title="Other Tools"
          content={
            <ul className="tags">
              {others.map(ot => <li>{ot}</li>)}
            </ul>
          }
        />
      </div>
    </section>
  );
}
