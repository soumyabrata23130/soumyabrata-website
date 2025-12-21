import Entry from "./Entry.jsx";

export default function Contact() {
  return (
    <section id="contact">
      <h3 className="font-bold my-4 text-2xl text-center">Get In Touch</h3>
      <div className="grid gap-4">
        <Entry
          title="Address"
          content={
            <div>
              <p>9, Natunpally, Ward 8<br />
                P.O. & P.S. Burdwan<br />
                Dist: Purba Bardhaman, PIN: 713101<br />
                State: West Bengal, India</p>
            </div>
          }
        />
        <Entry
          title="Phone"
          content={
            <a href="tel:+917908876512">+91 7908876512</a>
          }
        />
        <Entry
          title="Email"
          content={
            <a href="mailto:soumyabrata23130@gmail.com">
              soumyabrata23130@gmail.com
            </a>
          }
        />
      </div>
    </section>
  );
}
