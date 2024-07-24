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

  //const currentUser = useCurrentUser();
  //const is_owner = currentUser?.username === owner;

// KAnske byta ut mot accordion för att dölja description

return (
  <Card className={styles.Album}>
    <Card.Body>
      <Card.Title>{title}, {release_year}</Card.Title>
    </Card.Body>

    <Card.Body>
      <Media className="d-flex">
        <img src={image_url} height={250} />
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

  </Card>
); 

};

export default Album;