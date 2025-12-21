import Card from "./Card.jsx";

function Entry({ date, event, anchor, organizer, venue }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <h4 className="font-bold text-right">{date}</h4>
      <div className="col-span-2 text-left">
        <p>{event}</p>
        {anchor && <p>by {anchor}</p>}
        {organizer && <p>by {organizer}</p>}
        <p>{venue}</p>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events">
      <h3 className="font-bold my-4 text-2xl text-center">Events</h3>
      <div className="section-flex">
        <Card
          title="Tech Events"
          content={
            <div className="grid gap-2">
              <h5 className="font-bold text-center">2025</h5>
              <Entry
                date="August-December"
                event="Smart India Hackathon"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="30 August-3 September"
                event="IOTricity S02"
                organizer="IEI Students' Chapter EE"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="25-26 April"
                event="TechFiesta (UXplore & FreeForm)"
                organizer="AOT Acuity"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="12-13 April"
                event="UXopia 2.0"
                organizer="IEI Students' Chapter CSBS"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="24-29 March"
                event="Gnosis Week (QuillCode & XPedition)"
                organizer="IEI Students' Chapter CSE"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="28 February-14 April"
                event="Apertre 2.0"
                organizer="Resourcio Community"
                venue="GitHub"
              />
              <h5 className="font-bold text-center">2024</h5>
              <Entry
                date="8-9 April"
                event="TechFiesta (Cynox & TraceIt)"
                organizer="AOT Acuity"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="19-23 March"
                event="Techquisitive 5.0"
                organizer="IEI Students' Chapter CSE"
                venue="Academy of Technology, WB"
              />
            </div>
          }
        />
        <Card
          title="Seminars"
          content={
            <div className="grid gap-2">
              <h5 className="font-bold text-center">2025</h5>
              <Entry
                date="10 October"
                event="Design Dynamics - A Session for Growth"
                anchor="Mr Shounak Devbhuti"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="13 September"
                event="Symposium 3.0"
                anchor="Debangana Bhattacharjee and Sayantan Chowdhury"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="5 April"
                event="Special Talk on AI"
                anchor="Dr Anupam Basu"
                venue="Academy of Technology, WB"
              />
              <h5 className="font-bold text-center">2024</h5>
              <Entry
                date="26 November"
                event="TCS Leadership Connect"
                anchor="Mr Abhijit Niyogi"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="14 August"
                event="AOT Entrepreneurship Conclave"
                anchor="Mr Manosiz Bhattacharyya"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="27 July"
                event="Symposium 2.0"
                anchor="Dr Debabrata Samanta"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="21 March"
                event="Polymers and Plastics in Everyday life"
                anchor="Dr Priyadarsi De"
                venue="Academy of Technology, WB"
              />
            </div>
          }
        />
        <Card
          title="Webinars"
          content={
            <div className="grid gap-2">
              <h5 className="font-bold text-center">2025</h5>
              <Entry
                date="12 May-28 June"
                event="Code Your Future"
                organizer="IEI Students' Chapter CSE"
              />
              <Entry
                date="26 April"
                event="Master of the Model Control Protocol"
                organizer="GDG Kolkata"
              />
              <h5 className="font-bold text-center">2024</h5>
              <Entry
                date="22 December"
                event="Blockchain & Solidity Unpacked"
                anchor="Naitik Sharma"
                organizer="FrostHacks S01"
              />
              <Entry
                date="1-2 October"
                event="Build with AI"
                organizer="GDG On Campus AOT"
              />
              <Entry
                date="30 September"
                event="Generative AI and Large Language Models"
                organizer="Insha Manowar"
              />
              <Entry
                date="22 September"
                event="Freshman Induction"
                organizer="Coding Ninjas"
              />
            </div>
          }
        />
        <Card
          title="Other Events"
          content={
            <div className="grid gap-2">
              <h5 className="font-bold text-center">2024</h5>
              <Entry
                date="28-29 September"
                event="4th International Conference on Computer, Communication, Control &
                Information Technology (C3IT)"
                venue="Academy of Technology, WB"
              />
              <Entry
                date="14 May"
                event="IISER Kolkata Outreach"
                anchor="Dr Priyadarsi De"
                venue="IISER Kolkata, WB"
              />
            </div>
          }
        />
      </div>
    </section>
  );
}
