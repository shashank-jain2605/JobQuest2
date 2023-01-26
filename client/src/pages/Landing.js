import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            porro sed atque ratione, commodi enim quaerat tempore pariatur at
            laborum saepe, accusamus iste, magnam quasi iure dolorem dignissimos
            labore autem.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="hero" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
