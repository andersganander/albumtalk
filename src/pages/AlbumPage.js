import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import Album from "./Album";
import Review from "./reviews/Review";


import ReviewCreateForm from "./reviews/ReviewCreateForm";
import { useCurrentUser } from "../contexts/CurrentUserContext";

function AlbumPage() {
  // Fetch album data from API and pass it to the Album component
  const { id } = useParams();
  console.log('ID '+id)
  const [album, setAlbum] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [reviews, setReviews] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: album }, { data: reviews}] = await Promise.all([
          axiosReq.get(`/albums/${id}`),
          axiosReq.get(`/reviews/?album=${id}`),
        ]);
        setAlbum({ results: [album] });
        //setReviews({ results: [reviews] });
        setReviews(reviews);
        console.log(album);
        console.log(reviews);
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
        {currentUser ? (
          <ReviewCreateForm
          profile_id={currentUser.profile_id}
          profileImage={profile_image}
          album={id}
          setAlbum={setAlbum}
          setReviews={setReviews}
        />
        ) : reviews.results.length ? (
          "Reviews"
        ) : null}
        {reviews ? (
          reviews.results.map((review) => (
            <Review key={review.id} 
              {...review } 
              setAlbum={setAlbum} 
              setReviews={setReviews}
            />
          ))
        ) : currentUser ? (
          <span>No reviews yet, be the first to comment!</span>
        ) : (
          <span>No reviews... yet</span>
        )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular albums for desktop
      </Col>
    </Row>
  );
}

export default AlbumPage;