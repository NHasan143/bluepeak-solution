import { Link } from "react-router-dom";

export default function PageTitle({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="page-title">
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{title}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{crumb}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
