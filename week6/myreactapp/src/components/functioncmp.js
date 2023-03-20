import React from "react";
function Cmp() {
  return <p>this is inside the function component</p>;
}

export const Job = (props) => {
  return (
    <div>
      <h4>employee details</h4>
      <p>{props.name}</p>
      <p>{props.company}</p>
    </div>
  );
};

export { Cmp };
