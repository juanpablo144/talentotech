function DataOriginComponent(props) {

  let DataOrigin = props.data.origin;

  return (
    <div className="Content-Origin">
      <div className="Origin-list">
          <div>
            <p>{DataOrigin.name}</p>
            <p>{DataOrigin.url}</p>
          </div>
      </div>
    </div>
  );
}

export { DataOriginComponent };
