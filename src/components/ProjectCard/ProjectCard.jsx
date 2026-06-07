import "./ProjectCard.css";
import PropTypes from "prop-types";

const ProjectCard = ({ logo, name, content, link = "#" }) => {
  return (
    <div data-testid="projectCard" className="project-card">
      <div>
        <img data-testid="projectCardLogo" src={logo} alt={`${name} Logo`} className="project-card-logo" />
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
        <p data-testid="projectCardContent">{content}</p>
        <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3580/3580168.png"
            alt=""
            style={{ width: "16px", height: "16px", display: "inline", marginRight: "4px", verticalAlign: "middle" }}
          />{" "}
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectCard;
