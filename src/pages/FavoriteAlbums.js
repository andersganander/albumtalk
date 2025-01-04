import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import listStyles from "../styles/List.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const FavoriteAlbums = ({ mobile }) => {
  const [albumData, setAlbumData] = useState({
    favorites: { results: [] },
  });
  const { favorites } = albumData;
  const currentUser = useCurrentUser();

  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/albums/?starred__owner__profile=${id}`);

        setAlbumData((prevState) => ({
          ...prevState,
          favorites: data,
        }));
      } catch (err) {
      }
    };

    handleMount();
  }, [currentUser, id]);

  return (
    <Container
      className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"
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
                    <img src={album.image_url} height={75} alt="Album cover" />
                  </Link>
                </span>
              ))}
            </div>
          ) : (
            favorites.results.map((album) => (
              <div key={album.id} className={listStyles.listAlbum}>
                <Link to={`/albums/${album.id}`}>
                  <img src={album.image_url} height={100} alt="Album cover" />
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