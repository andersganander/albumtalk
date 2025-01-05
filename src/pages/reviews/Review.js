
import React, { useState } from "react";
import { Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

import ReviewEditForm from "./ReviewEditForm";
import { Rating } from 'react-simple-star-rating'


const Review = (props, albumtitle) => {

  const { profile_id, profile_image, owner, updated_at, content, rating, album, album_title, id, setAlbum, setReviews, comments_count } = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const [setStarRating] = useState(0)
  const handleRating = (rate) => {
    setStarRating(rate)
  }

  const handleDelete = async () => {

    try {
      await axiosRes.delete(`/reviews/${id}/`);
      setAlbum((prevAlbum) => ({
        results: [
          {
            ...prevAlbum.results[0],
            reviews_count: prevAlbum.results[0].reviews_count - 1,
          },
        ],
      }));

      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.filter((review) => review.id !== id),
      }));

      window.location.reload();

    } catch (err) { }
  };



  return (
    <>
      <hr />
      <Media className={styles.Background}>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Title}>
            <a href={`/albums/${album}`}>{album_title}</a>
          </span><br />
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <ReviewEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              rating={rating}
              profileImage={profile_image}
              setReviews={setReviews}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <p className={styles.Content}>{content}</p>

              <div className={styles.Footer}>
                <span>
                  <Rating
                    onClick={handleRating}
                    /* Available Props */
                    initialValue={rating}
                    iconsCount={5}
                    readonly={true}
                    size={30}
                  />
                </span>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Discuss this review!</Tooltip>}
                >
                  <span>
                    <Link to={`/reviews/${id}`} title="Comments">
                      <span className="material-symbols-outlined">chat</span>
                    </Link>
                    {comments_count}
                  </span>
                </OverlayTrigger>

              </div>
            </>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Review;
