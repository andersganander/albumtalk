// ProfilePage displays detailed information about a user's profile.
// It includes profile stats, reviews, and allows following/unfollowing.
// The page supports infinite scrolling for reviews and shows favorite albums.

import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/ATButton.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Review from "../reviews/Review";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import FavoriteAlbums from "../FavoriteAlbums";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileReviews, setProfileReviews] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileReviews }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/reviews/?owner__profile=${id}`),
          ]);

        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileReviews(profileReviews);
        setHasLoaded(true);
      } catch (err) {
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className={styles.ProfileName}>{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div className={styles.StatText} >{profile?.reviews_count}</div>
              <div className={styles.StatText}>reviews</div>
            </Col>
            <Col xs={3} className="my-2">
              <div className={styles.StatText}>{profile?.followers_count}</div>
              <div className={styles.StatText}>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div className={styles.StatText}>{profile?.following_count}</div>
              <div className={styles.StatText}>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button}`}
                onClick={() => handleUnfollow(profile)}
              >
                UNFOLLOW
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button}`}
                onClick={() => handleFollow(profile)}
              >
                FOLLOW
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">
          <div className={styles.Content}>
            {profile.content}
          </div>
        </Col>}

      </Row>
    </>
  );

  const mainProfileReviews = (
    <>
      <hr />
      <FavoriteAlbums mobile />
      <hr />
      <h5 className={styles.ProfileName}>{profile?.owner}'s reviews</h5>
      {profileReviews.results.length ? (
        <InfiniteScroll
          children={profileReviews.results.map((review) => (
            <Review key={review.id} {...review} setReviews={setProfileReviews} />
          ))}
          dataLength={profileReviews.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileReviews.next}
          next={() => fetchMoreData(profileReviews, setProfileReviews)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't made any reviews yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>

        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfileReviews}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <FavoriteAlbums />
      </Col>
    </Row>
  );
}

export default ProfilePage;