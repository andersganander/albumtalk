import React, {  useState } from "react";
import { Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, id,
    setReview, setComments, } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;  
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setReview((prevReview) => ({
        results: [
          {
            ...prevReview.results[0],
            comments_count: prevReview.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
      console.log('FÖRE GO BACK');
      history.goBack();
    } catch (err) {
      console.log('ERROR ERROR '+err);
      // TODO TROUBLESHHOT WHAT HAPPENS HERE...
      history.goBack();
    }
  };

  return (
    <div>
      <hr />
      <Media className={styles.Background}>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>

          {showEditForm ? (
            <CommentEditForm 
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
            <p className={styles.Content}>{content}</p>
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
    </div>
  );
};

export default Comment;