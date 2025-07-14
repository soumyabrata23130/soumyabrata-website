import profilePicture from "../assets/photo_2025.jpg";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-wrap gap-6 items-center justify-center">
        <img
          className="border-2 mx-2 rounded-full"
          src={profilePicture}
          alt="Me in 2025"
          width="180"
          height="180"
        />
        <div>
          <h1 className="font-bold my-2 text-4xl text-center">
            Soumyabrata Bhattacharjee
          </h1>
          <p className="text-xl my-2 text-center">
            Web Developer, UI/UX Designer and Gamer
          </p>
          <div className="flex flex-wrap gap-2 justify-center my-1">
            <a className="button rounded-lg" href="#projects">
              Projects
            </a>
            <a
              className="button rounded-lg"
              href="https://1drv.ms/b/c/c90f54a69696f32d/Efx9vvkjYHtAkBefXaH9i6EBNwhcVGoNAJ0K3ujqc7qriw?e=dCrbby"
            >
              Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
