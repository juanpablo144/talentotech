import React ,{ useEffect, useState } from "react";

function DataEpisodeComponent(props) {
  const [info, setInfo] = useState([]);

  function getDatosEpisode(){
    setInfo(props.data.episode)
  }

  useEffect(() => {
    getDatosEpisode();
  }, []);

  return (
  <div className="Content-episodes">
    <div className="Episodes-list">
      {info.map((i, index) => (
        <p key={index}>{i}</p>
        ))}
    </div>
  </div>
);
}

export { DataEpisodeComponent };
