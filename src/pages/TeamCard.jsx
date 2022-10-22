import React from "react";

const TeamCard = (props) => {
  const { member } = props;
  return (
    <div className="team-card flex-col">
      <div className="tc-inner-wrapper m-5 bg-gradient-to-r from-cyan-400 to-fuchsia-600 p-[3px] rounded-lg">
        <div className="tc-content bg-bgblue rounded-lg p-2 ">
          <img
            alt={member.name}
            src={member.image}
            className="tc-banner w-40 rounded-lg  "
          />
          <div className="tc-user-info flex flex-col justify-center items-center w-full mt-2 ">
            <div className="text-twhite font-audiowide">{member.name}</div>
            <div className="text-slate-400 text-xs italic ">{member.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
