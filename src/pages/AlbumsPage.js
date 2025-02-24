// AlbumsPage displays a list of albums with a search bar for filtering and infinite scrolling for continuous loading.
// It dynamically fetches and displays albums based on user input and filters.
// The page also highlights popular profiles and includes a loading spinner for improved user experience.

import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Album from "./Album";
import Asset from "../components/Asset";

import appStyles from "../App.module.css";
import styles from "../styles/AlbumsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../api/axiosDefaults";

import NoResults from "../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../utils/utils";
import PopularProfiles from "./profiles/PopularProfiles";

function AlbumsPage({ message, filter = "" }) {
  const [albums, setAlbums] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const { data } = await axiosReq.get(`/albums/?${filter}search=${query}`);
        setAlbums(data);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchAlbums();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />

        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search albums"
          />
        </Form>

        {hasLoaded ? (
          <>
            {albums ? (
              <InfiniteScroll
                children={albums.results.map((album) => (
                  <Album key={album.id} {...album} setAlbums={setAlbums} />
                ))}
                dataLength={albums.results.length}
                loader={<Asset spinner />}
                hasMore={!!albums.next}
                next={() => fetchMoreData(albums, setAlbums)}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>I don't know where I'm going from here, but I promise it won't be boring.</b>
                  </p>
                }
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default AlbumsPage;