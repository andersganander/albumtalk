import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import listStyles from "../styles/List.module.css";
import Asset from "../components/Asset";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

const MostRatedAlbums = ({ mobile }) => {
  const [albumData, setAlbumData] = useState({
    mostRated: { results: [] },
  });
  const { mostRated } = albumData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/albums/?ordering=-reviews_count"
        );
        setAlbumData((prevState) => ({
          ...prevState,
          mostRated: data,
        }));
      } catch (err) {
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"
        }`}
    >
      {mostRated.results.length ? (
        <>
          <p className={listStyles.listHeader}> Most reviewed albums</p>
          {mobile ? (
            <div>
              {mostRated.results.slice(0, 4).map((album) => (
                <span key={album.id}>
                  <Link to={`/albums/${album.id}`}>
                    <img src={album.image_url} height={75} alt="Album Cover" />
                  </Link>
                </span>
              ))}
            </div>
          ) : (
            mostRated.results.map((album) => (
              <div key={album.id} className={listStyles.listAlbum}>
                <Link to={`/albums/${album.id}`}>
                  <img src={album.image_url} height={100} alt="Album Cover" />
                </Link>
                <p className={listStyles.listHeaderSmall}>{album.title}</p>
                <br />
              </div>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default MostRatedAlbums;