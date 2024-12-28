# AlbumTalk (David Bowie edition)

![AalbumTalk ](src/assets/doc_images/AmiResponsive_AT.png)

AlbumTalk (David Bowie edition) is a dedicated platform for fans of David Bowie and those curious about his music. This special edition of AlbumTalk focuses exclusively on David Bowie's extensive discography, providing a rich and immersive experience for both longtime fans and newcomers. Users can review, rate, and discuss albums in David Bowie's extensive catalog, as well as follow other users.

[albumTalk](https://album-talk-68a3b5c7423a.herokuapp.com/)

## Table of Contents

## Django Rest Backend

The repository for the backend of the application is documented [here](https://github.com/andersganander/AlbumTalk_API)

## UX

### User Goals

###### Engage with and discover Albums
- View and explore albums through lists, including most-rated ones.
- Interact with albums by liking favorites and leaving reviews.
- Use visual ratings to provide feedback.

**Discover reviews**
- Access and read specific reviews for albums.
- Browse lists of reviews.
- Easily found a specifi user's reviews.

**Participate in discussions**
- Write, edit, and delete comments on reviews.

**Build and manage a profile**
- Create and update a user profile.
- Access user statistics.
- Follow and unfollow users, with plans to view followed users' reviews.

**Navigate and search easily**
- Navigate seamlessly between pages with ease.
- Use infinite scroll functionality for continuous browsing.
- Search for reviews and albums efficiently.

**Control personal contributions**
- Edit and delete personal reviews or comments.

**Secure access**
- Create accounts and manage login securely.
- Update credentials as needed.




### Agile and planning

<hr>
The API and Frontend of this project was planned using Agile methodology and MoSCoW prioritization on github projects.

**The user stories project can be found [here](https://github.com/users/**

### Wireframes:

<details>
<summary>Mobile</summary>

<img src="src/assets/doc_images/wireframes/Mobile - Album List.png" width="200">
<img src="src/assets/doc_images/wireframes/Mobile - Add Review.png" width="200">
<img src="src/assets/doc_images/wireframes/Mobile - Add Comment.png" width="200">
<img src="src/assets/doc_images/wireframes/Mobile - Review List.png" width="200">
<img src="src/assets/doc_images/wireframes/Mobile - View Profile.png" width="200">
<img src="src/assets/doc_images/wireframes/Mobile - Edit Profile.png" width="200">

</details>

<details>
<summary>Desktop</summary>

<img src="src/assets/doc_images/wireframes/DT - Album List.png" width="400">
<img src="src/assets/doc_images/wireframes/DT - Add Review.png" width="400">
<img src="src/assets/doc_images/wireframes/DT - Add Comment.png" width="400">
<img src="src/assets/doc_images/wireframes/DT - Review List.png" width="400">
<img src="src/assets/doc_images/wireframes/DT - View Profile.png" width="400">
<img src="src/assets/doc_images/wireframes/DT - Edit Profile.png " width="400">

</details>

### Epics and User Stories:

Project user stories can be found [here](https://github.com/andersganander/albumtalk/issues?q=is%3Aissue+label%3A%22User+Story%22)


| Epic                   | User Story                    | Comment            |
| :----------------------- | :------------------------------ | :------------------- |
| Authentication         | Create Account                | [#5][i5]           |
| Authentication         | Update User credentials       | [#27][i27]         |
| Authentication         | Log in                        | [#6][i6]           |
| Navigation             | Navigate easily between pages | [#21][i21]         |
| Navigation             | Infinite scroll functionality | [#20][i20]         |
| Albums                 | Album List                    | [#30][i30]         |
| Albums                 | List of most rated albums     | [#25][i25]         |
| Albums                 | Like favorite albums          | [#32][i32]         |
| Write review           | Write a review                | [#7][i7]           |
| Write review           | Visual rating                 | [#50][i50]         |
| View reviews           | View album specific reviews   | [#31][i31]         |
| View reviews           | List reviews                  | [#17][i17]         |
| View reviews           | View a review                 | [#9][i9]           |
| Edit and delete review | Edit a review                 | [#10][i10]         |
| Edit and delete review | Delete a review               | [#11][i11]         |
| Comments               | Edit a comment                | [#15][i15]         |
| Comments               | Write a comment               | [#13][i13]         |
| Comments               | Delete a comment              | [#14][i14]         |
| Follow/unfollow        | Follow and unfollow users     | [#24][i24]         |
| Follow/unfollow        | View followed users reviews   | [#19][i19]         |
| Profile page           | Edit profile                  | [#26][i26]         |
| Profile page           | User statistics               | [#23][i23]         |
| Profile page           | View profile page             | [#22][i22]         |
| Search                 | Search for reviews and albums | [#12][i12]         |

### Design Choices
The design takes heavy inspiration from the minimalist, avant-garde aesthetic of Station to Station's album cover. This is reflected in the typography, color palette, layout, and overall mood of the website. The result is a modern, immersive site that pays homage to David Bowie's bold and innovative artistic identity.

#### Colors
- Primary Colors:
  - White for backgrounds to evoke the album's clean and modern feel.
  - Light red for backgrounds for reviews
  - Light blue for backgrounds for comments
  - Black for bold contrasts in typography.
  - Deep Red accents inspired by the subtle use of red tones in the album's design.

  The choice of the different backgropund colors for different sections is aimed at creating clear visual separation and enhancing the user’s ability to navigate and understand the content.


#### Typography
**Font:** The primary typeface mimics the stark, geometric sans-serif typography used on Station to Station. The font used is Bricolage Grotesque. For longer texts like description etc, Courier New is used.
**Text Styling:** All text elements, except for longer texts like descriptitions etc, feature uppercase letters with a condensed spacing, creating a compact and impactful visual.
**Word Merging:** Inspired by the album cover on Station to Station, words are presented without spaces, creating a unified, continuous text flow (e.g., StationtoStation, DavidBowieAlbums). UTVECKLA navbar album titlar etc

[Station to Station - Front cover](https://www.discogs.com/master/22420-David-Bowie-Station-To-Station/image/SW1hZ2U6OTU4Nzk0OA==) <br/>
[Station to Station - Back cover](https://www.discogs.com/master/22420-David-Bowie-Station-To-Station/image/SW1hZ2U6OTU4Nzk1Mg==)


#### Imagery and icons
Since the albums are central, album covers are used on all pages. In addition to album covers and a login page image, no other images are used.

Icons are frequently used on the website. They are used partly on the album page to symbolize functions such as "View reviews," "Add to favorites albums," and "Show description." Some icons have a number next to them indicating the number of reviews or comments. To make it clearer for the user what the icons mean, a tooltip is displayed when the user hovers over the icon with the mouse. Some icons and buttons are only shown when the user is logged in.

## Features

### Navigation

- On medium and larger screens, there is a navbar at the top
- The menu contains options for viewing albums (THEALBUMS) and reviews (THEREVIEWS)

<img src="src/assets/doc_images/features/NavBar.png" width="800" alt="Menu" >

- Depending on if the user has logged in or not there are also options for Sign In, Sign Out and Sign Up
- When the user is logged in, the users Avatar is displayed in the upper right corner 

<img src="src/assets/doc_images/features/NavBar_Logged_in.png" width="800" alt="Menu" >

- On smaller screens there's a hamburger menu and a slide out menu to the left with the same options and the same logic for login and logout

### Home page / Albums page

- The home page is the same as the album page
- The page contain a scrollable list of all David Bowie albums in chronological order
- To the right there's a list of most follwed users
- Without being logged in the user can view reviews and album descriptions 

<img src="src/assets/doc_images/features/AlbumsPage_NotLoggedIn.png" width="400" alt="Home page" > <br>

- When the user is logged they can:
  - Review and rate albums
  - Mark an an album as a favorite
  - Remove an album from their favorites

<img src="src/assets/doc_images/features/AlbumsPage_LoggedIn.png" width="400" alt="Home page logged in" >

- When the Add review icon is clicked, a text field is shown.

<img src="src/assets/doc_images/features/AddReview.png" width="400" alt="Home page logged in" >


### Sign in page

<img src="src/assets/doc_images/features/Signin.png" width="400" alt="Sign in page" >

### Sign up page

<img src="src/assets/doc_images/features/Signup.png" width="400" alt="Sign up page" >

### Profile page

- At the top, under the profile's name, it shows how many reviews the user has written, how many followers the profile has, and how many other profiles it follows. Then the profiles' introduction.
- Below the introduction, the user's reviews are displayed.
- On the left side of the page, there is a list of the profile's favorite albums.

<img src="src/assets/doc_images/features/ProfilePage_other_user.png" width="400" alt="" >

- When a user is logged in he/she has the ability to access a dropdown menu with the options:
  - edit profile
  - change username
  - change password

<img src="src/assets/doc_images/features/ProfilePage_dropdown.png" width="400" alt="" >

<img src="src/assets/doc_images/features/ProfilePage_edit.png" width="400" alt="" >

<img src="src/assets/doc_images/features/ProfilePage_username.png" width="400" alt="" >

<img src="src/assets/doc_images/features/ProfilePage_password.png" width="400" alt="" >

### Reviews page (THEREVIEWS)

- All reviews are displayed in a scrollable list
- A search field at the top makes it easy to search for an albums reviews
- For logged in users there will be a dropdown menu with options for deleting and edit their own reviews

<img src="src/assets/doc_images/features/ReviewsPage.png" width="400" alt="" >


### Add comment

- When the Add comment icon is clicked, a textfield is shown.

<img src="src/assets/doc_images/features/AddComment.png" width="400" alt="" >

### Comment page

- When the user is logged in, a dropdown menu is shown for the users' comments where the user can choose to edit or delete the comment.
<img src="src/assets/doc_images/features/Comment_dropdown.png" width="400" alt="" >

## Future Features

## Reusability

### Components

### Packages and Tools

- **React**

  - A JavaScript library for building dynamic and interactive user interfaces. Ideal for single-page applications.
- **Axios**

  - A promise-based HTTP client for making HTTP requests, used for fetching or saving data from/to a server.
- **Bootstrap & React-Bootstrap**

  - Bootstrap provides responsive design elements and layouts. React-Bootstrap adapts these into React components for consistent styling.
- **JWT-Decode**

  - A library for decoding JSON Web Tokens. Useful for interpreting the token's data on the client side.
- **React Router DOM**

  - Manages navigation in React applications, enabling dynamic routing without page reloads.
- **React Infinite Scroll Component**

  - Implements infinite scrolling, loading content as the user scrolls down, enhancing user experience.
- **Testing Libraries (Jest, React Testing Library)**

  - Jest is a simple testing framework, and React Testing Library provides utility functions for testing React components.
- **Mock Service Worker (MSW)**

  - Mocks HTTP requests in development and testing environments. Ideal for testing network request scenarios.
- **Scripts for Building, Testing, and Starting**

  - Specific scripts are defined for building, testing, and starting the application, particularly with Heroku deployment in mind.
- **Node.js and npm Versions**

  - The project specifies Node.js and npm versions to ensure a consistent environment setup.

Additionally, specific scripts were defined for building, testing, and starting the application, particularly with Heroku deployment in mind. The project also specifies Node.js and npm versions for consistent environment setup.

## Testing

### Manual testing

found here:
[Manual testing](./TESTING.md)

### Performance and Validation

[Perfomance and Validation](testing.md#performance-and-validation)

## Known Bugs

## Deployment

### Heroku

This project is deployed on Heroku, a cloud platform service that enables easy deployment and scaling for web applications. The deployment process includes the following steps:

#### Initial Setup

1. **Create a Heroku Account**: Sign up for a Heroku account at [Heroku's website](https://www.heroku.com/).
2. **Install Heroku CLI**: Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.

#### Preparing the Application

1. **Procfile**: Create a `Procfile` in your project root directory. This file tells Heroku how to run your application.
2. **Requirements.txt**: Ensure you have a `requirements.txt` file listing all project dependencies.
3. **Config Vars**: Set up necessary configuration variables in Heroku (like `SECRET_KEY`, database URL, etc.).

#### Deployment

1. **Create a Heroku App**: Use the Heroku CLI to create a new app.
2. **Add Buildpacks**: If necessary, add the correct buildpacks via the Heroku dashboard or CLI.
3. **Deploy**: Push your code to Heroku either by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
4. **Database Migration (if applicable)**: Run database migrations using the Heroku CLI.

#### Final Steps

1. **Enable the Web Dyno**: Make sure the web dyno is up and running after deployment.
2. **Open the App**: You can open your application from the Heroku dashboard or using the CLI command `heroku open`.

For more detailed instructions and troubleshooting, visit the official [Heroku Dev Center](https://devcenter.heroku.com/).

### Forking the GitHub Repository

<hr>
Forking the GitHub repository allows you to make a copy of the original project on your own GitHub account, enabling you to make changes without affecting the original. Here's how to do it:

1. **Go to the Repository**: Navigate to the original repository on GitHub.
2. **Fork the Repository**: Click the 'Fork' button, located at the top right of the repository page. This creates a copy of the repository in your GitHub account.
3. **Clone Your Fork**: Once forked, you can clone your fork to your local machine for further development.

### Making a Local Clone

Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

1. **Clone the Repository**: On the GitHub repository page, click the 'Code' button and copy the URL under 'Clone with HTTPS'.
2. **Open Terminal**: Open your terminal and navigate to the directory where you want the clone to be created.
3. **Clone Command**: Type `git clone`, and then paste the URL you copied in Step 1. Press Enter to create your local clone.

## Credits

The following sources and references were resorted for the creation of this website:<br>

- The lessons and tutorials provided by Code Institute, on the final module entitled "Django REST Framework" for the 'Advanced Front-End' specialization<br>

### Content

This project has greatly benefited from the educational resources and example projects provided by the Code Institute during my bootcamp. The following projects were particularly influential in shaping the development of this application:

- **Django REST Framework Example Project**: This practical example from the Code Institute served as a key reference for building Web APIs using the Django REST framework. It provided a solid foundation and template for implementing best practices in API development with Django and Python.

- **Moments Project**: Another invaluable resource from the Code Institute, the Moments project demonstrated the creation of a full-stack application with a strong emphasis on user experience aand how to use the API that was developed in the example project. Several aspects of its design and functionality were adapted and integrated into this project.

### Media

- Stock images for profile pictures from:<br>
  https://www.pexels.com/
- Font style from:<br>
  https://fonts.google.com/specimen/Barlow?query=Barlow


## Acknowledgements:

- My mentor
- The Swedish community on Slack

[i5]: https://github.com/andersganander/albumtalk/issues/5
[i27]: https://github.com/andersganander/albumtalk/issues/27
[i6]: https://github.com/andersganander/albumtalk/issues/6
[i21]: https://github.com/andersganander/albumtalk/issues/21
[i20]: https://github.com/andersganander/albumtalk/issues/20
[i30]: https://github.com/andersganander/albumtalk/issues/30
[i25]: https://github.com/andersganander/albumtalk/issues/25
[i32]: https://github.com/andersganander/albumtalk/issues/32
[i7]: https://github.com/andersganander/albumtalk/issues/7
[i50]: https://github.com/andersganander/albumtalk/issues/50
[i17]: https://github.com/andersganander/albumtalk/issues/17
[i9]: https://github.com/andersganander/albumtalk/issues/9
[i10]: https://github.com/andersganander/albumtalk/issues/10
[i11]: https://github.com/andersganander/albumtalk/issues/11
[i15]: https://github.com/andersganander/albumtalk/issues/15
[i13]: https://github.com/andersganander/albumtalk/issues/13
[i14]: https://github.com/andersganander/albumtalk/issues/14
[i24]: https://github.com/andersganander/albumtalk/issues/24
[i19]: https://github.com/andersganander/albumtalk/issues/19
[i26]: https://github.com/andersganander/albumtalk/issues/26
[i23]: https://github.com/andersganander/albumtalk/issues/23
[i22]: https://github.com/andersganander/albumtalk/issues/22
[i12]: https://github.com/andersganander/albumtalk/issues/12
[i31]: https://github.com/andersganander/albumtalk/issues/31
