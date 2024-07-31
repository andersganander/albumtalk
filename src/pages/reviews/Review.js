
import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";


const Review = (props, albumtitle) => {
  
  const { profile_id, profile_image, owner, updated_at, content, rating, album, album_title, id, setAlbum, setReviews } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
    } catch (err) {}
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{album_title}</span><br />
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
          <p>{rating}</p>
        </Media.Body>
        {is_owner && (
          <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
        )}
      </Media>
    </div>
  );
};

export default Review;
