export default function Card({ title, subtitle, content }) {
  return (
    <div className="card w-1/6 flex-auto flex-column rounded-xl">
      <h4 className="font-bold text-lg text-center">{title}</h4>
      <h5 className="font-medium text-medium text-center">{subtitle}</h5>
      <hr />
      {content}
    </div>
  );
}
