import React, { useEffect, useState } from "react";
import Base from "./Base";
import Member from "../members/Members";
import { getOneMember } from "../user/helper/userapicalls";

const IndiMembers = ({ match }) => {
  const [member, setMember] = useState({
    name: "",
    state: "",
    roll: "",
    id: "",
    error: "",
  });

  const { name, state, roll, id, error } = member;

  const preload = (memberId) => {
    getOneMember(memberId).then((data) => {
      console.log(data);
      if (data.error) {
        setMember({
          ...member,
          error: data.error,
        });
      } else {
        setMember({
          ...member,
          name: data.name,
          roll: data.roll,
          state: data.state,
          id: data._id,
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.memberId);
  }, []);

  return (
    <Base>
      <Member member={member} />
    </Base>
  );
};

export default IndiMembers;
