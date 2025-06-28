import { Link } from "react-router";
import logo from "../../assets/my_logo.png";

const Logo = () => {
  return (
    <div className="text-2xl w-10 font-bold">
      <Link to="/">
        <img className="w-full" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
