import React from "react";

class Detail extends React.Component {
  render() {
    const {
      location: {
        state: { title, year, genres, poster, summary }
      },
      history
    } = this.props;
    return (
      <div>
        <img src={poster} alt={title} title={title} />
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{summary}</p>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Detail;
