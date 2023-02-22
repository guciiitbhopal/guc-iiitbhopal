import React from "react";
import { FOUNDING_MEMBERS, PRESIDENTS, TEAM_MEMEBERS } from "../data/teams";
import TeamCard from "../components/Cards/TeamCard";

const Team = () => {
  return (
    <div>
      <div className="flex justify-center">
        <span className="twhite text-4xl font-semibold m-8 md:m-12">
          Our Founders
        </span>
      </div>
      <div className="flex justify-around flex-wrap ">
        {FOUNDING_MEMBERS.map((_member) => (
          <TeamCard member={_member} />
        ))}
      </div>
      <div className="flex justify-center">
        <span className="twhite text-4xl font-semibold m-8 md:m-12">
          Current Presidents
        </span>
      </div>
      <div className="flex justify-around flex-wrap ">
        {PRESIDENTS.map((_member) => (
          <TeamCard member={_member} />
        ))}
      </div>
      <div className="flex justify-center">
        <span className="twhite text-4xl font-semibold m-8 md:m-12">
          Current Team
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
