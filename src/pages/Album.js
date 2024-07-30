import React from "react";
import styles from "../styles/Album.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Avatar from "../../components/Avatar";

const Album = (props) => {
  const {
    id,
    album_format,
    artist,
    description,
    discogs_id,
    genre,
    image_url,
    label,
    release_year,
    style,
    title,
    wikipedia_id
  } = props;

// Lägg till reviews_count här och i serializern

// KAnske byta ut mot accordion för att dölja description

return (
  <Card className={styles.Album}>
    <Card.Body>
      <Card.Title>{title}, {release_year}</Card.Title>
    </Card.Body>

    <Card.Body>
      <Media className="d-flex">
        <Link to={`/albums/${id}`}>
          <img src={image_url} height={250} />
        </Link>
        <div className="d-flex">
          <span>Genre: {genre} </span>
          <span>Style: {style}</span>
          <span>Format: {album_format}</span>
        </div>
      </Media>
    </Card.Body>

    <Card.Body>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>

    <Card.Footer>
      <div className={styles.PostBar}>
        <Link to={`/albums/${id}`}>
          <span class="material-symbols-outlined">rate_review</span>
        </Link>
       
      </div>
    </Card.Footer>

  </Card>
); 

};

export default Album;