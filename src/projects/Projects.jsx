export default function Projects() {
  return (
    <section id="projects">
      <div className="content">
        <h3 className="font-bold my-4 text-2xl text-center">Projects</h3>
        <div className="section-flex">
          <div className="card rounded-xl">
            <h4 className="font-bold text-lg my-1 text-center">
              Caesar Cipher
            </h4>
            <hr />
            <p className="flex-1 my-1 text-justify">
              A cryptography application encrypting and decrypting a given text
              using the simple Caesar cipher algorithm. The interface is
              designed to be as user-friendly as possible.
            </p>
            <ul className="tech">
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
            <div className="flex gap-2 justify-center wrap">
              <a
                className="button rounded-lg"
                href="https://github.com/soumyabrata23130/caesar-cipher"
              >
                GitHub
              </a>
              <a
                className="button rounded-lg"
                href="https://soumyabrata23130.github.io/caesar-cipher"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="card rounded-xl">
            <h4 className="font-bold text-lg my-1 text-center">Converter</h4>
            <hr />
            <p className="flex-1 my-1 text-justify">
              A unit conversion application supporting area, information,
              length, mass, pressure, temperature and volume. Great for everyday
              use and understanding how different units relate to each other.
              The interface is designed to be as user-friendly as possible.
            </p>
            <ul className="tech">
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
            <div className="flex gap-2 justify-center wrap">
              <a
                className="button rounded-lg"
                href="https://github.com/soumyabrata23130/converter"
              >
                GitHub
              </a>
              <a
                className="button rounded-lg"
                href="https://soumyabrata23130.github.io/converter"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="card rounded-xl">
            <h4 className="font-bold text-lg my-1 text-center">Weather</h4>
            <hr />
            <p className="flex-1 my-1 text-justify">
              A web application that provides basic weather information from
              OpenWeather's API. Enter a city, press "Get Weather" and you will
              get the basic weather information of the city, including
              temperature, air quality, humidity, pressure and wind speed. The
              interface is designed to be as user-friendly as possible.
            </p>
            <ul className="tech">
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
            <div className="flex gap-2 justify-center wrap">
              <a
                className="button rounded-lg"
                href="https://github.com/soumyabrata23130/weather-html-css-js"
              >
                GitHub
              </a>
              <a
                className="button rounded-lg"
                href="https://soumyabrata23130.github.io/weather-html-css-js"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
