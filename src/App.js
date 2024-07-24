import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";


import AlbumPage from "./pages/AlbumPage";
import AlbumsPage from "./pages/AlbumsPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <AlbumsPage message="No albums found, adjust the search." />} /> 
          <Route exact path="/albums" render={() => <h1>Albums</h1>} />
          <Route exact path="/reviews" render={() => <h1>Reviews</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route exact path="/albums/:id" render={() => <AlbumPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;