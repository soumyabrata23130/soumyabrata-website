export default function Contact() {
  return (
    <section id="contact">
      <h3 className="font-bold my-4 text-2xl text-center">Get In Touch</h3>
      <div className="section-flex text-center">
        <div className="card rounded-xl">
          <p>Soumyabrata Bhattacharjee</p>
          <p>9, Natunpally, Ward 8</p>
          <p>P.O. & P.S. Burdwan</p>
          <p>Dist: Purba Bardhaman, PIN: 713101</p>
          <p>State: West Bengal, India</p>
        </div>
        <div className="card rounded-xl">
          <ul>
            <li>
              <a href="tel:+917908876512">+91 7908876512</a>
            </li>
            <li>
              <a href="mailto:soumyabrata8974@gmail.com">
                soumyabrata8974@gmail.com
              </a>
              &nbsp;(main)
            </li>
            <li>
              <a href="mailto:soumyabrata8974@gmail.com">
                soumyabrata23130@gmail.com
              </a>{" "}
              (alternative)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
