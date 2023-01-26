import Wrapper from "../assets/wrappers/ErrorPage";
import ErrorImage from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={ErrorImage} alt="" />
      </div>
      <div>
        <h2>Ohh! Page Not Found</h2>
        <p>We can't seem to find the page you're looking for</p>
      </div>
      <Link to="/">Back Home</Link>
    </Wrapper>
  );
};

export default Error;
