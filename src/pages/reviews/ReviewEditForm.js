// ReviewEditForm allows users to edit an existing review by updating its content and rating.
// The form includes a textarea for editing the review content and a star rating component for updating the rating.
// Changes are saved via an API call, and the updated review is reflected in the local state.

import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import { Rating } from 'react-simple-star-rating'

function ReviewEditForm(props) {
  const { id, content, rating, setShowEditForm, setReviews } = props;

  const [formContent, setFormContent] = useState(content);
  const [formRating, setRating] = useState(rating);

  const handleRating = (rate) => {
    setRating(rate)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.patch(`/reviews/${id}/`, {
        content: formContent.trim(),
        rating: formRating,
      });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? {
              ...review,
              content: formContent.trim(),
              rating: formRating,
              updated_at: "now",
            }
            : review;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={(e) => setFormContent(e.target.value)}
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

      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          CANCEL
        </button>
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          SAVE
        </button>
      </div>
    </Form>
  );
}

export default ReviewEditForm;