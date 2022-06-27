import { Link } from "react-router-dom";
import "./MeetTheTeam.css";
import Maurice from "../assets/team/Maurice.png";
import Duy from "../assets/team/Duy.jpg";
import Marissa from "../assets/team/Marissa.jpg";
import Laurie from "../assets/team/Laurie.jpg";
import Blastoise from "../assets/team/blastoise.gif";
import Charizard from "../assets/team/charizard.gif";
import Pikachu from "../assets/team/pikachu.gif";
import Venusaur from "../assets/team/venusaur.gif";
import { useState } from "react";

const MeetTheTeam = () => {
  const [showCardMM, setShowCardMM] = useState(true);
  const [showCardDP, setShowCardDP] = useState(true);
  const [showCardMJ, setShowCardMJ] = useState(true);
  const [showCardLM, setShowCardLM] = useState(true);

  return (
    <div className="MeetTheTeam">
      <h2>Meet the Team</h2>
      <p>Click to Flip</p>
      <div className="dev moe">
        <h3>Moe</h3>
        {showCardMM ? (
          <img
            src={Blastoise}
            onClick={() => {
              setShowCardMM(false);
            }}
          />
        ) : (
          <div>
            <img
              src={Maurice}
              alt="Moe"
              onClick={() => {
                setShowCardMM(true);
              }}
            />{" "}
            <p>
              Highly motivated Javascript programmer known for an ability to
              adapt to any situation and very communicative. Gained experience
              and knowledge in various setting like manufacture, shipping,
              customer service and community service work. Passionate about
              building others for success. Detail-oriented, reliable, and
              committed to providing the highest degree of service excellence.
            </p>
            <a
              href="https://www.linkedin.com/in/maurice-mason/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Momason97"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        )}
      </div>
      <div className="dev duy">
        <h3>Duy</h3>
        {showCardDP ? (
          <img
            src={Charizard}
            onClick={() => {
              setShowCardDP(false);
            }}
          />
        ) : (
          <div>
            <img
              src={Duy}
              alt="Duy"
              onClick={() => {
                setShowCardDP(true);
              }}
            />
            <p>
              Before becoming a software engineer, I managed small businesses in
              the cosmetics industry for over 7 years. During that time, I had a
              considerable amount of experience with various applications for
              appointment management, customer retention and point of sales. I
              found that many of these applications were unintuitive, hard to
              navigate and had limited functionality, which is what initially
              sparked my interest in software development. Since graduating from
              the JavaScript program at Grand Circus, I have been working
              towards my newfound passion and goal by expanding my knowledge and
              skill set so that I may successfully transition into a role as a
              web developer with a focus on simple, intuitive and effective
              software design.
            </p>
            <a
              href="https://www.linkedin.com/in/dvpham89/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/dvpham89"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        )}
      </div>
      <div className="dev marissa">
        <h3>Marissa</h3>
        {showCardMJ ? (
          <img
            src={Pikachu}
            alt=""
            onClick={() => {
              setShowCardMJ(false);
            }}
          />
        ) : (
          <div>
            <img
              src={Marissa}
              alt="Marissa"
              onClick={() => {
                setShowCardMJ(true);
              }}
            />
            <p>
              Currently studying the Full Stack JavaScript bootcamp at Grand
              Circus. I am transitioning from the cosmetology and food
              industries to tech, and have never been more excited! I absolutely
              love to work with HTML, CSS, JavaScript, and REACT the most. My
              past jobs require me to constantly be creative, problem-solving,
              and thinking fast so I believe that will push me even further into
              this journey. Outside of work I enjoy traveling and being out in
              nature whether it be walking, bonfires, and dirt bikes!
            </p>
            <a href="https://www.linkedin.com/in/marissa-jacklyn/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/missamarie1">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        )}
      </div>
      <div className="dev laurie">
        <h3>Laurie</h3>
        {showCardLM ? (
          <img
            src={Venusaur}
            alt=""
            onClick={() => {
              setShowCardLM(false);
            }}
          />
        ) : (
          <div>
            <img
              src={Laurie}
              alt="Laurie"
              onClick={() => {
                setShowCardLM(true);
              }}
            />
            <p>
              Adaptable, goal-oriented developer known for a patient and caring
              communication approach. Gained valuable experiences in non-profit
              and private business transferrable to a variety of industries.
              Passionate about creating meaningful resources that help others
              thrive. Detail-oriented, reliable, and committed to providing the
              highest degree of service excellence.
            </p>
            <a
              href="https://www.linkedin.com/in/lnmclaughlin/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/lnmclaughlin"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        )}
      </div>
      <button>
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
};

export default MeetTheTeam;
