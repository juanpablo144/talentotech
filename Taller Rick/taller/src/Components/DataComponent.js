import React from "react";

function DataComponent(props) {
  return <div className="DataEpisode">
    <div>
    {props.data.map((i, index) => (
      <p key={index}>{i.episode}</p>
    ))};
    </div>
  </div>;
}

export { DataComponent };
