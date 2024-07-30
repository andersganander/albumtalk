import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function ReviewCreateForm(props) {
  const { album, setAlbum, setReviews, profileImage, profile_id } = props;

  // const [reviewData, setReviewData] = useState({
  //   content: "",
  //   rating: 1 ,
  // });
  
  //const { content, rating } = reviewData;

  //const [content, setContent] = useState("");

    const [rating, setRating] = useState(0)
    const [content, setContent] = useState('')

//   const handleChange = (event) => {
//     setReviewData({
//         ...reviewData,
//         [event.target.name]: event.target.value,
//     });
//   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("rating", rating);
    formData.append("content", content);
    formData.append("album", album);

    try {
      const { data } = await axiosRes.post("/reviews/", formData);
      console.log('DATA '+data);
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
      console.log('ERR' + err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my review..."
            as="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
            <Form.Control
                type="number"
                className={styles.NumberInput}
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min={1}
                max={5}
            />
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