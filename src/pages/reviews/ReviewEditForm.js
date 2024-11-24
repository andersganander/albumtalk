import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import { Rating } from 'react-simple-star-rating'

function ReviewEditForm(props) {
  const { id, content, rating, setShowEditForm, setReviews } = props;

  const [formContent, setFormContent] = useState(content);
  const [formRating, setRating] = useState(rating);

    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    const handleRating = (rate) => {
      setRating(rate)

      // other logic
    }

  // const handleChange = (event) => {
  //   setFormContent(event.target.value);
  // };

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
       
        <div>
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
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