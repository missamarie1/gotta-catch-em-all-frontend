import { Link } from "react-router-dom";
import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  return (
    <div className="MeetTheTeam">
      <h2>Meet The Team</h2>
      <div className="dev moe">
        <p>
          Highly motivated Javascript programmer known for an ability to adapt
          to any situation and very communicative. Gained experience and
          knowledge in various setting like manufacture, shipping, customer
          service and community service work. Passionate about building others
          for success. Detail-oriented, reliable, and committed to providing the
          highest degree of service excellence.
        </p>
        <div>
          <a href="https://www.linkedin.com/in/maurice-mason/">LinkedIn</a>
          <a href="https://github.com/Momason97">Github</a>
        </div>
      </div>
      <div className="dev duy">
        <p>
          Before becoming a software engineer, I managed small businesses in the
          cosmetics industry for over 7 years. During that time, I had a
          considerable amount of experience with various applications for
          appointment management, customer retention and point of sales. I found
          that many of these applications were unintuitive, hard to navigate and
          had limited functionality, which is what initially sparked my interest
          in software development. Since graduating from the JavaScript program
          at Grand Circus, I have been working towards my newfound passion and
          goal by expanding my knowledge and skill set so that I may
          successfully transition into a role as a web developer with a focus on
          simple, intuitive and effective software design.
        </p>
        <a href="https://www.linkedin.com/in/dvpham89/">LinkedIn</a>
        <a href="https://github.com/dvpham89">Github</a>
      </div>
      <div className="dev marissa">
        <p>
          Currently studying the Full Stack JavaScript bootcamp at Grand Circus.
          I am transitioning from the cosmetology and food industries to tech,
          and have never been more excited! I absolutely love to work with HTML,
          CSS, JavaScript, and REACT the most. My past jobs require me to
          constantly be creative, problem-solving, and thinking fast so I
          believe that will push me even further into this journey. Outside of
          work I enjoy traveling and being out in nature whether it be walking,
          bonfires, and dirt bikes!
        </p>
        <a href="https://www.linkedin.com/in/marissa-jacklyn/">LinkedIn</a>
        <a href="https://github.com/missamarie1">Github</a>
      </div>
      <div className="dev laurie">
        <p>
          Adaptable, goal-oriented developer known for a patient and caring
          communication approach. Gained valuable experiences in non-profit and
          private business transferrable to a variety of industries. Passionate
          about creating meaningful resources that help others thrive.
          Detail-oriented, reliable, and committed to providing the highest
          degree of service excellence.
        </p>
        <a href="https://www.linkedin.com/in/lnmclaughlin/">LinkedIn</a>
        <a href="https://github.com/lnmclaughlin">Github</a>
      </div>
      <button>
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
};

export default MeetTheTeam;
