import React from "react";
import { TEAM_MEMEBERS } from "../data/teams";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div>
      <div>
        <span>Our Team</span>
      </div>
      <div className="flex justify-around">
        {TEAM_MEMEBERS.map((_member) => (
          <TeamCard member={_member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
