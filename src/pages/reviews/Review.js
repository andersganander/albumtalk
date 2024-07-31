
import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Review.module.css";

const Review = (props, albumtitle) => {
  const { profile_id, profile_image, owner, updated_at, content, rating, album, album_title } = props;

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
      </Media>
    </div>
  );
};

export default Review;
