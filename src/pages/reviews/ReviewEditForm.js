import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/ReviewCreateEditForm.module.css";

function ReviewEditForm(props) {
  const { id, content, rating, setShowEditForm, setReviews } = props;

  const [formContent, setFormContent] = useState(content);
  const [formRating, setFormRating] = useState(rating);


  // const handleChange = (event) => {
  //   setFormContent(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/reviews/${id}/`, {
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
      console.log(err);
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
        <Form.Control
          type="number"
          className={styles.NumberInput}
          value={formRating}
          onChange={(e) => setFormRating(e.target.value)}
          min={1}
          max={5}
          />
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