import img from "../imgs/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logoImg">
          <img src={img} alt="logo" />
        </div>
        <div className="logoHeading">
          <h2>ABN</h2>
        </div>
        <div className="logoSubheading">
          <h3>Weather Forecast</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
