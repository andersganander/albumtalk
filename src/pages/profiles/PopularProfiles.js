import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import listStyles from "../../styles/List.module.css";
import Asset from "../../components/Asset";
//import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {

  const { popularProfiles } = useProfileData();

  return (
    <Container
    className={`${appStyles.Content} ${
      mobile && "d-lg-none text-center mb-3"
    }`}
  >
    {popularProfiles.results.length ? (
       <>
       <p className={listStyles.listHeader}> Most followed profiles</p>
       {mobile ? (
         <div className="d-flex justify-content-around">
           {popularProfiles.results.slice(0, 4).map((profile) => (
             <Profile key={profile.id} profile={profile} mobile />
           ))}
         </div>
       ) : (
         popularProfiles.results.map((profile) => (
           <Profile key={profile.id} profile={profile} />
         ))
       )}
     </>
    ) : (
      <Asset spinner />
    )}
  </Container>
  );
};

export default PopularProfiles;