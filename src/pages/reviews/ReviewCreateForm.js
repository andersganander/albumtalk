import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes, axiosReq } from "../../api/axiosDefaults";
import { Rating } from 'react-simple-star-rating'

function ReviewCreateForm(props) {
  const { album, setAlbum, setReviews, profileImage, profile_id } = props;
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')
  const [hasReviewed, setHasReviewed] = useState(false);

  useEffect(() => {
    const fetchUserReviews = async () => {
      setHasReviewed(false);
      try {
        const { data } = await axiosReq.get(`/reviews/?album=${album}&owner__profile=${profile_id}`);
        if (data.results.length > 0) {
          setHasReviewed(true);
        }
      } catch (err) {
      }
    };
    fetchUserReviews();
  }, [profile_id, album]);

  const handleRating = (rate) => {
    setRating(rate)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("rating", rating);
    formData.append("content", content);
    formData.append("album", album);

    try {
      const { data } = await axiosRes.post("/reviews/", formData);
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: [data, ...prevReviews.results],
      }));
      setAlbum((prevAlbum) => ({
        results: [
          {
            ...prevAlbum.results[0],
            reviews_count: prevAlbum.results[0].reviews_count + 1,
          },
        ],
      }));
      setContent("");
      setRating(0);
    } catch (err) {
    }
  };

  if (hasReviewed) {
    return <p className={styles.Message}>You have already reviewed this album.</p>;
  }

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="Write your review here..."
            as="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />


          <div>
            <Rating
              onClick={handleRating}
              /* Available Props */
              initialValue={rating}
              iconsCount={5}
              size={30}
            />
          </div>

        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        REVIEW
      </button>
    </Form>
  );
}

export default ReviewCreateForm;