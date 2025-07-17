import React from 'react';

const CurriculumCard = ({ title, core, project, badge }) => {
  return (
    <div className="flex flex-col items-start p-6 gap-6 w-[250px] bg-[#008080] rounded-[24px] text-white shrink-0">
      {/* Title */}
      <h2 className="text-[28px] font-bold leading-[42px]">
        {title}
      </h2>

      

      {/* Core */}
      {core && (
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-bold leading-[36px]">Core</h3>
          <ul className="text-[14px] leading-[21px] list-disc pl-5 space-y-1">
            {core.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Project */}
      {project && (
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-bold leading-[36px]">Project</h3>
          <p className="text-[16px] leading-[24px]">{project}</p>
        </div>
      )}

      {/* Badge */}
      {badge && (
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-bold leading-[36px]">Badge</h3>
          <p className="text-[16px] leading-[24px]">{badge}</p>
        </div>
      )}
    </div>
  );
};

export default CurriculumCard;
