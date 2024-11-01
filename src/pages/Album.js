import React from "react";
import styles from "../styles/Album.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Accordion, Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../api/axiosDefaults";
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
    favorite_count,
    favorite_id,
    setAlbums,
  } = props;

  const currentUser = useCurrentUser();
  //const is_owner = currentUser?.username === owner;
  //const history = useHistory();

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
      console.log(err);
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
      console.log(err);
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

           {/* <span class="material-symbols-outlined" title="Mark as favorite">star</span> */}

           {/* NEW CODE START */}
           
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
                placement="top"
                overlay={<Tooltip>Log in to add albums to your favorite list!</Tooltip>}
              >
                <i className="far fa-star" />
              </OverlayTrigger>
            )}

          {/* NEW CODE END */}

            <span class="material-symbols-outlined" title="Album description">top_panel_open</span>
            
          </div>
        </div>
      </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body> 
            <div className={styles.Description}>
            {description} 
            </div>
            <div className={styles.ExtLinks}>
              <a href={`https://en.wikipedia.org/wiki/${wikipedia_id}`} target='_blank'>Wikipedia</a>
              <a href={`https://www.discogs.com/master/${discogs_id}`} target='_blank'>Discogs</a>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>

  </Card>
); 

};

export default Album;