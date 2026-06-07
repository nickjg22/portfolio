import React from "react";
import PropTypes from "prop-types";
import "./WorkWidget.css";

const WorkWidget = ({ title, content, experiences = [] }) => {
  return (
    <div data-testid="workWidget" className="work-widget">
      <h2 data-testid="workWidgetTitle">{title}</h2>
      <p data-testid="workWidgetContent">{content}</p>
      <div className="work-experiences-list">
        {experiences.map((exp, index) => (
          <div key={index} data-testid="workWidgetExperience" className="work-experience-item">
            <img
              data-testid="workWidgetExperienceLogo"
              src={exp.logo}
              alt={`${exp.organization} Logo`}
              style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
            />
            <div>
              <h3 data-testid="workWidgetExperienceCompany">{exp.organization}</h3>
              <p data-testid="workWidgetExperienceRole">{exp.jobTitle}</p>
              <span data-testid="workWidgetExperienceDuration">
                {exp.startYear} — {exp.endYear ? exp.endYear : "current"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number,
    }),
  ),
};

export default WorkWidget;
