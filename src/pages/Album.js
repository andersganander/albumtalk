import React from "react";
import styles from "../styles/Album.module.css";
import { Accordion, Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
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
    wikipedia_id,
    reviews_count,
  } = props;

// Lägg till reviews_count här och i serializern

// KAnske byta ut mot accordion för att dölja description

return (
  <Card className={styles.Album}>
    <Card.Body className={styles.AlbumTitleDetails}>
      <Card.Title>
        <div className={styles.Title}>
          {title}
        </div>
        <div>{release_year}</div>
       
      </Card.Title>
    </Card.Body>

    <Card.Body>
      <Media className={styles.CoverDetails}>
        <Link to={`/albums/${id}`}>
          <img src={image_url} height={350} />
        </Link>
       
      </Media>
    </Card.Body>

    <Accordion>
      <Card>

       <Accordion.Toggle as={Card.Header} eventKey="0">
        <div className={styles.DescriptionHeader} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <Link to={`/albums/${id}`} title="Reviews">
              <span class="material-symbols-outlined">rate_review</span>   
              {reviews_count}
          </Link>

          <span class="material-symbols-outlined" title="Mark as favorite">star</span>

            {/* Existing Icon */}
            <span class="material-symbols-outlined" title="Album description">top_panel_open</span>
          </div>
        </div>
      </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body> 
            <div className={styles.Description}>
            {description} 
            </div>
           
            <a href={`https://en.wikipedia.org/wiki/${wikipedia_id}`} target='_blank'>Wikipedia</a>
            <a href={`https://www.discogs.com/master/${discogs_id}`} target='_blank'>Discogs</a>
            
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>

  </Card>
); 

};

export default Album;