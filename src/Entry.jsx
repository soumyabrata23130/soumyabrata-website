export default function Entry({ title, content }) {
    return (
        <div className="card rounded-xl grid grid-cols-3 gap-8">
            <h4 className="font-bold text-lg text-right">{title}</h4>
            <p className="col-span-2 text-left">{content}</p>
        </div>
    );
}  