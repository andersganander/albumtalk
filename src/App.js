import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";


import AlbumPage from "./pages/AlbumPage";
import AlbumsPage from "./pages/AlbumsPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ReviewPage from "./pages/reviews/ReviewPage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";


function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <AlbumsPage message="No albums found, adjust the search." />} />
          <Route exact path="/albums" render={() => <AlbumsPage message="No albums found." />} />
          <Route exact path="/reviews" render={() => <ReviewsPage message="No reviews found." />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/albums/:id" render={() => <AlbumPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/reviews/:id" render={() => <ReviewPage />} />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;