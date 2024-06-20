import React, { useEffect, useState } from "react";

function DataOriginComponent(props) {
  const [info, setInfo] = useState([]);

  function getDatosOrigin() {
    setInfo(props.data.origin);
    
  }

  useEffect(() => {
    getDatosOrigin();
  }, []);

  return (
    <div className="Content-Origin">
      <div className="Origin-list">
          <div>
            <p>{info.name}</p>
            <p>{info.url}</p>
          </div>
      </div>
    </div>
  );
}

export { DataOriginComponent };
