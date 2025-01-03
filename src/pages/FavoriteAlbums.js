import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import styles from "../styles/ProfilePage.module.css";
import listStyles from "../styles/List.module.css";
import Asset from "../components/Asset";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
// Osäker på nedan
import { useParams } from "react-router";

const FavoriteAlbums = ({ mobile }) => {
  const [albumData, setAlbumData] = useState({
    // pageProfile: { results: [] },
    favorites: { results: [] },
  });
  const { favorites } = albumData;
  const currentUser = useCurrentUser();

  // Osäker...
  const { id } = useParams();
  console.log("ID " + id);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/albums/?starred__owner__profile=${id}`);
        //axiosReq.get(`/profiles/${id}/`)
        
        setAlbumData((prevState) => ({
          ...prevState,
          favorites: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {favorites.results.length ? (
        <>
         <p className={listStyles.listHeader}> Favorite albums</p>
          {mobile ? (
            <div>
              {favorites.results.slice(0, 4).map((album) => (
                <span key={album.id}>
                  <Link to={`/albums/${album.id}`}>
                    <img src={album.image_url} height={75} />
                  </Link>
                </span>
              ))}
            </div>
          ) : (
            favorites.results.map((album) => (
              <div key={album.id} className={listStyles.listAlbum}>
                <Link to={`/albums/${album.id}`}>
                  <img src={album.image_url} height={100} />
                </Link>
                <p className={listStyles.listHeaderSmall}>{album.title}</p>
                <br />
            </div>
            ))
          )}
        </>
      ) : 
        <p>NO FAVORITE ALBUMS YET</p>
      }
    </Container>
  );
};

export default FavoriteAlbums;