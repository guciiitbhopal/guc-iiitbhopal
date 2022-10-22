import React from "react";

const TeamCard = (props) => {
  const { member } = props;
  return (
    <div className="team-card">
      <div className="tc-inner-wrapper">
        <div className="tc-content flex">
          <img
            alt={member.name}
            src={member.image}
            className="tc-banner w-40 flex"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
