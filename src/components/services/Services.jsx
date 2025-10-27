import "./Services.css";
import shuh from "./shuh.jpg";

const Services = () => {
  return (
    <div className="abou">
      <img src={shuh} alt="" />
      <div className="text">
        <h1>Mahalla bankiri</h1>
        <h2>Sardor Rahimjonov</h2>
        <p><br />
          Sardor Rahimjonov <br />
          Shahsiy fazilatlari tirishqoqlik, halollik, jonkuyarlilik <br />
          Bankir raqami <br />
          +998944530140 <br />
          Malumoti: Oliy <br />
          Mutahasisligi: Iqtisodchi <br />
          Tug'ilgan sanasi: 03.09.1991y
        </p>
      </div>
    </div>
  );
};

export default Services;
