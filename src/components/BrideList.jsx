import { Link } from "react-router-dom";

const BrideList = () => {
  const brides = [
    { id: 1, name: "Bride A", image: "/images/bride1.jpg" },
    { id: 2, name: "Bride B", image: "/images/bride2.jpg" },
    { id: 3, name: "Bride C", image: "/images/bride3.jpg" },
  ];

  return (
    <div className="bride-list">
      {brides.map((bride) => (
        <Link to={`/bride/${bride.id}`} key={bride.id} className="bride-card">
          <img src={bride.image} alt={bride.name} className="bride-thumbnail" />
          <h3>{bride.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default BrideList;
