import { Link } from "react-router-dom";
import "./MeetTheTeam.css";
import Maurice from "../assets/team/Maurice.png";
import Duy from "../assets/team/Duy.jpg";
import Marissa from "../assets/team/Marissa.jpg";
import Laurie from "../assets/team/Laurie.jpg";
import Andrea from "../assets/team/Andrea.jpg";
import Jeff from "../assets/team/Jeff.jpg";
import Blastoise from "../assets/team/blastoise.gif";
import Charizard from "../assets/team/charizard.gif";
import Pikachu from "../assets/team/pikachu.gif";
import Venusaur from "../assets/team/venusaur.gif";
import Eevee from "../assets/team/eevee.gif";
import Mew from "../assets/team/mew.gif";
import { useState } from "react";

const MeetTheTeam = () => {
  const [showCardMM, setShowCardMM] = useState(true);
  const [showCardDP, setShowCardDP] = useState(true);
  const [showCardMJ, setShowCardMJ] = useState(true);
  const [showCardLM, setShowCardLM] = useState(true);
  const [showCardAH, setShowCardAH] = useState(true);
  const [showCardJR, setShowCardJR] = useState(true);

  return (
    <div className="MeetTheTeam">
      <h2>Meet the Team</h2>
      <p className="click">(Click on card to view team member)</p>
      <div className="team">
        <div className={showCardMM ? "card" : "dev"}>
          <h3>Moe</h3>
          {showCardMM ? (
            <img
              alt={Blastoise}
              src={Blastoise}
              onClick={() => {
                setShowCardMM(false);
              }}
            />
          ) : (
            <div className="moe">
              <img
                src={Maurice}
                alt="Moe"
                onClick={() => {
                  setShowCardMM(true);
                }}
              />
              <p>
                Highly motivated Javascript programmer known for an ability to
                adapt to any situation and very communicative. Gained experience
                and knowledge in various setting like manufacture, shipping,
                customer service and community service work. Passionate about
                building others for success. Detail-oriented, reliable, and
                committed to providing the highest degree of service excellence.
              </p>
              <div>
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
            </div>
          )}
        </div>
        <div className={showCardDP ? "card" : "dev"}>
          <h3>Duy</h3>
          {showCardDP ? (
            <img
              alt={Charizard}
              src={Charizard}
              onClick={() => {
                setShowCardDP(false);
              }}
            />
          ) : (
            <div className="duy">
              <img
                src={Duy}
                alt="Duy"
                onClick={() => {
                  setShowCardDP(true);
                }}
              />
              <p>
                Before becoming a software engineer, I managed small businesses
                in the cosmetics industry for over 7 years. During that time, I
                had a considerable amount of experience with various
                applications for appointment management, customer retention and
                point of sales. I found that many of these applications were
                unintuitive, hard to navigate and had limited functionality,
                which is what initially sparked my interest in software
                development. Since graduating from the JavaScript program at
                Grand Circus, I have been working towards my newfound passion
                and goal by expanding my knowledge and skill set so that I may
                successfully transition into a role as a web developer with a
                focus on simple, intuitive and effective software design.
              </p>
              <div>
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
            </div>
          )}
        </div>
        <div className={showCardMJ ? "card" : "dev"}>
          <h3>Marissa</h3>
          {showCardMJ ? (
            <img
              src={Pikachu}
              alt={Pikachu}
              onClick={() => {
                setShowCardMJ(false);
              }}
            />
          ) : (
            <div className="marissa">
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
                industries to tech, and have never been more excited! I
                absolutely love to work with HTML, CSS, JavaScript, and REACT
                the most. My past jobs require me to constantly be creative,
                problem-solving, and thinking fast so I believe that will push
                me even further into this journey. Outside of work I enjoy
                traveling and being out in nature whether it be walking,
                bonfires, and dirt bikes!
              </p>
              <div>
                <a
                  href="https://www.linkedin.com/in/marissa-jacklyn/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/missamarie1"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          )}
        </div>
        <div className={showCardLM ? "card" : "dev"}>
          <h3>Laurie</h3>
          {showCardLM ? (
            <img
              src={Venusaur}
              alt={Venusaur}
              onClick={() => {
                setShowCardLM(false);
              }}
            />
          ) : (
            <div className="laurie">
              <img
                src={Laurie}
                alt="Laurie"
                onClick={() => {
                  setShowCardLM(true);
                }}
              />
              <p>
                Adaptable, goal-oriented developer known for a patient and
                caring communication approach. Gained valuable experiences in
                non-profit and private business transferrable to a variety of
                industries. Passionate about creating meaningful resources that
                help others thrive. Detail-oriented, reliable, and committed to
                providing the highest degree of service excellence.
              </p>
              <div>
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
            </div>
          )}
        </div>
      </div>
      <h2>Special Thanks</h2>
      {
        <div className="thanks">
          <div className={showCardAH ? "card" : "dev"}>
            <h3>Andrea</h3>
            {showCardAH ? (
              <img
                src={Eevee}
                alt="Eevee"
                onClick={() => {
                  setShowCardAH(false);
                }}
              />
            ) : (
              <div className="andrea">
                <img
                  src={Andrea}
                  alt="Andrea"
                  onClick={() => {
                    setShowCardAH(true);
                  }}
                />
                <p>
                  Full Stack (MERN) Dev & Designer | Instructor at Grand Circus
                </p>
              </div>
            )}
          </div>
          <div className={showCardJR ? "card" : "dev"}>
            <h3>Jeff</h3>
            {showCardJR ? (
              <img
                src={Mew}
                alt="Mew"
                onClick={() => {
                  setShowCardJR(false);
                }}
              />
            ) : (
              <div className="jeff">
                <img
                  src={Jeff}
                  alt="Jeff"
                  onClick={() => {
                    setShowCardJR(true);
                  }}
                />
                <p>
                  Full Stack Developer | MERN Stack | MongoDB | Express | React
                  | Node | TA at Grand Circus
                </p>
              </div>
            )}
          </div>
        </div>
      }
      <button>
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
};

export default MeetTheTeam;
