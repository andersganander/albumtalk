// Album component displays detailed information about a music album, including its title, release year, cover image, and description.
// It allows users to mark the album as a favorite, view reviews, and access external links for more information on Wikipedia and Discogs.
// The component includes interactive tooltips, an accordion for toggling descriptions, and dynamic favorite functionality for logged-in users.

import React from "react";
import styles from "../styles/Album.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Accordion, Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../api/axiosDefaults";

const Album = (props) => {
  const {
    id,
    description,
    discogs_id,
    image_url,
    release_year,
    title,
    wikipedia_id,
    reviews_count,
    favorite_id,
    setAlbums,
  } = props;

  const currentUser = useCurrentUser();

  const handleFavorite = async () => {
    try {
      const { data } = await axiosRes.post("/favorites/", { album: id });
      setAlbums((prevAlbums) => ({
        ...prevAlbums,
        results: prevAlbums.results.map((album) => {
          return album.id === id
            ? { ...album, favorite_count: album.favorite_count + 1, favorite_id: data.id }
            : album;
        }),
      }));
    } catch (err) {
    }
  };

  const handleUnfavorite = async () => {
    try {
      await axiosRes.delete(`/favorites/${favorite_id}/`);
      setAlbums((prevAlbums) => ({
        ...prevAlbums,
        results: prevAlbums.results.map((album) => {
          return album.id === id
            ? { ...album, favorite_count: album.favorite_count - 1, favorite_id: null }
            : album;
        }),
      }));
    } catch (err) {
    }
  };


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
          <img src={image_url} height={350} alt="Album cover"/>
        </Link>
       
      </Media>
    </Card.Body>

    <Accordion>
      <Card>

       <Accordion.Toggle as={Card.Header} eventKey="0">
        <div className={styles.DescriptionHeader} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>

          <OverlayTrigger
                transition = {false}
                placement="top"
                overlay={<Tooltip>Click for album reviews!</Tooltip>}
              >
                <Link to={`/albums/${id}`} title="Reviews">
              <span className="material-symbols-outlined">rate_review</span>   
              {reviews_count}
          </Link>
          </OverlayTrigger>
           
           { favorite_id ? (
              <span onClick={handleUnfavorite}>
                <i className={`fas fa-star ${styles.Star}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleFavorite}>
                <i className={`far fa-star ${styles.StarOutline}`} />
              </span>
            ) : (
              <OverlayTrigger
                transition={false}
                placement="top"
                overlay={<Tooltip>Log in to add albums to your favorite list!</Tooltip>}
              >
                <i className="far fa-star" />
              </OverlayTrigger>
            )}

          <OverlayTrigger
                transition={false}
                placement="top"
                overlay={<Tooltip>Click for album description!</Tooltip>}
              >
                <span className="material-symbols-outlined" title="Album description">top_panel_open</span>
          </OverlayTrigger>
            
            
            
          </div>
        </div>
      </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body> 
            <div className={styles.Description}>
            {description} 
            </div>
            <div className={styles.ExtLinks}>
            <OverlayTrigger
                transition = {false}
                placement="top"
                overlay={<Tooltip>Read more about this album on Wikipedia</Tooltip>}
              >
                 <a href={`https://en.wikipedia.org/wiki/${wikipedia_id}`} target='_blank' rel="noreferrer">Wikipedia</a>
              </OverlayTrigger>
              <OverlayTrigger
                transition = {false}
                placement="top"
                overlay={<Tooltip>View album details, tracklist, and credits on Discogs</Tooltip>}
              >
               <a href={`https://www.discogs.com/master/${discogs_id}`} target='_blank' rel="noreferrer">Discogs</a>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>

  </Card>
); 

};

export default Album;