import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import Album from "./Album";

function AlbumPage() {
  // Fetch album data from API and pass it to the Album component
  const { id } = useParams();
  const [album, setAlbum] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: album }] = await Promise.all([
          axiosReq.get(`/albums/${id}`),
        ]);
        setAlbum({ results: [album] });
        console.log(album);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular albums for mobile</p>
        <Album {...album.results[0]} setAlbums={setAlbum} albumPage />
        <Container className={appStyles.Content}>
          Reviews
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular albums for desktop
      </Col>
    </Row>
  );
}

export default AlbumPage;