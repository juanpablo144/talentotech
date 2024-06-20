function DataEpisodeComponent(props) {
  let Dataepisode = props.data.episode;
  console.log(props.data)

  return (
  <div className="Content-episodes">
    <div className="Episodes-list">
      {Dataepisode.map((i, index) => (
        <p key={index}>{i}</p>
        ))}
    </div>
  </div>
);
}

export { DataEpisodeComponent };
