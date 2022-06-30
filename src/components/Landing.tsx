import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import landing from "../assets/landing.gif";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  let timer: any;

  useEffect(() => {
    timer = setTimeout(() => {
      navigate("/play");
    }, 5000);
  }, []);
  return (
    <div className="Landing">
      <img src={landing} alt="landing" id="landing" />
    </div>
  );
};

export default Landing;
