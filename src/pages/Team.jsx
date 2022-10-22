import React from "react";
import { TEAM_MEMEBERS } from "../data/teams";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div>
      <div className="flex justify-center">
        <span className="twhite text-4xl font-semibold m-8 md:m-12">
          Our Team
        </span>
      </div>
      <div className="flex justify-around flex-wrap ">
        {TEAM_MEMEBERS.map((_member) => (
          <TeamCard member={_member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
