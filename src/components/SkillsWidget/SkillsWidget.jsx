import React from "react";
import PropTypes from "prop-types";

const SkillsWidget = ({ title, content, skills = [] }) => {
  return (
    <div
      data-testid="skillsWidget"
      className="p-6 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col gap-4"
    >
      <div>
        <h2
          data-testid="skillsWidgetTitle"
          className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2"
        >
          {title}
        </h2>
        <p data-testid="skillsWidgetContent" className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {content}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {skills.map((skill, index) => (
          <div key={index} data-testid="skillsWidgetSkill" className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img
                data-testid="skillsWidgetSkillLogo"
                src={skill.icon}
                alt={`${skill.name} Logo`}
                className="w-6 height-6 object-contain"
              />
              <span
                data-testid="skillsWidgetSkillName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {skill.name}
              </span>
            </div>

            {/* Contenedor de la barra (Gris oscuro en dark mode) */}
            <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              {/* Relleno de la barra (Azul brillante usando el % dinámico) */}
              <div
                data-testid="skillsWidgetSkillLevel"
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    }),
  ),
};

export default SkillsWidget;
