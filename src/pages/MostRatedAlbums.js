import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import Asset from "../components/Asset";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const MostRatedAlbums = ({ mobile }) => {
  const [albumData, setAlbumData] = useState({
    // pageProfile: { results: [] },
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
      {mostRated.results.length ? (
        <>
          <p>Most rated aalbums.</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {mostRated.results.slice(0, 4).map((album) => (
                <p key={album.id}>{album.title}</p>
              ))}
            </div>
          ) : (
            mostRated.results.map((album) => (
              <p key={album.id}>{album.title}</p>
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