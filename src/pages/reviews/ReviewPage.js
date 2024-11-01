import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Review from "./Review";
import Comment from "../comments/Comment";
import { useHistory } from "react-router";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import MostRatedAlbums from "../MostRatedAlbums";

function ReviewPage() {
  
  const { id } = useParams();
  console.log('ID '+id)
  const [review, setReview] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  //const [reviews, setReviews] = useState({ results: [] });
  const history = useHistory();
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: review }, { data: comments }] = await Promise.all([
          axiosReq.get(`/reviews/${id}`),
          axiosReq.get(`/comments/?review=${id}`),
        ]);
        setReview({ results: [review] });
        setComments(comments);
        //setReviews({ results: [reviews] });
        //setReviews(reviews);
        console.log(review);
        //console.log(reviews);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <MostRatedAlbums mobile />
        <Review {...review.results[0]} setReviews={setReview} reviewPage />
        <Container className={appStyles.Content}>
            {currentUser ? (
                <CommentCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                review={id}
                setReview={setReview}
                setComments={setComments}
                />
              ) : comments.results.length ? (
                "Comments"
              ) : null}
              {comments.results.length ? (
                comments.results.map((comment) => (
                  <Comment key={comment.id} {...comment} />
                ))
              ) : currentUser ? (
                <span><b>Be the first to comment on this review.</b></span>
              ) : (
                <span><b>No comments... yet</b></span>
              )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <MostRatedAlbums />
      </Col>
    </Row>
  );
}

export default ReviewPage;