import "./Portfolio.css";
import oddiy from "./oddiy.jpg";

const Portfolio = () => {
  return (
    <div className="about">
      <img src={oddiy} alt="" />
      <div className="text">
        <h1>Agent</h1>
        <h2>Norin tuman Xo'jaobod MFY</h2>
        <p>Yordamchi agent <br />
          Rahimova Shahnoza <br />
          Shahsiy fazilatlari tirishqoqlik, halollik <br />
          Yordamchi agent raqami <br />
          +998333204040 <br />
          Malumoti: O'rta <br />
          Mutahasisligi: Pedagog <br />
          Tug'ilgan sanasi: 03.01.1988y
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
