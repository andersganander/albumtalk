# AlbumTalk (David Bowie edition)

![AalbumTalk ](src/assets/doc_images/AmiResponsive_AT.png)

AlbumTalk is a dedicated platform for fans of David Bowie and those curious about his music. This special edition of AlbumTalk focuses exclusively on David Bowie's extensive discography, providing a rich and immersive experience for both longtime fans and newcomers. Users can review, rate, and discuss albums in David Bowie's extensive catalog, as well as follow other users.

# Live Page

[albumTalk](https://)

![Website](docs/images/)

# Django Rest Backend

The repository for the backend of the application is documented here

## Table of Contents

## UX

### User Goals

### Agile and planning

<hr>
The API and Frontend of this project was planned using Agile methodology and MoSCoW prioritization on github projects.

**The user stories project can be found [here](https://github.com/users/**

### Wireframes:

<details>
<summary>Mobile</summary>
Images goes here

![Home](docs/images/wireframes/)<br>

</details>

<details>
<summary>Desktop</summary>
Images goes here
</details>

### Epics and User Stories:

[Project user stories table can be found here]

| Epic	| User Story  | Comment |
|:----------|:----------|:----------|
| Authentication   | Create Account    |  # |  	
| Authentication  | Update User credentials    |  #27 |
| Authentication    | Log in    |   |
| Navigation | Navigate easily between pages |   |
| Navigation | Infinite scroll functionality |   |
| Albums    | Album List    | #30  |
| Albums    | List of most rated albums    | #25  |
| Albums    | Like favorite albums    | #58 |
| Write review | Write a review |   |
| Write review | Visual rating |  #50 |
| View reviews | View album specific reviews |  ([#31][i31]) |
| View reviews | List reviews |   |
| View reviews | View a review |   |
| Edit and delete review | Edit a review |   |
| Edit and delete review | Delete a review |   |
| Comments | Edit a comment |   |
| Comments | Write a comment |   |
| Comments | Delete a comment |   |
| Follow/unfollow| Follow and unfollow users |   |
| Follow/unfollow| View followed users reviews | Future improvement |
| Profile page| Edit profile | #26 |
| Profile page| User statistics | |
| Profile page| View profile page | |
| Search | Search for reviews and albums |   |

[i31]: https://github.com/andersganander/albumtalk/issues/31

### Design Choices

#### Colors

#### Typography

#### Imagery and icons

# Features

## Future Features

# Website layout

## Navbar

## Home page

## Feed page

## Contact Page

## Sign in page

![Login page](docs/images/signin_landingpage.png)<br>

## Sign up page

![Sign up page](docs/images/signup_landingpage.png)<br>

## Profile page

## Create post

## Post page

# Reusability

## Components (Reusability)

## Packages and Tools

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

# Testing

## Manual testing

found here:
[Manual testing](testing.md)

## Performance and Validation

[Perfomance and Validation](testing.md#performance-and-validation)

# Known Bugs

# Deployment

## Heroku

This project is deployed on Heroku, a cloud platform service that enables easy deployment and scaling for web applications. The deployment process includes the following steps:

### Initial Setup

1. **Create a Heroku Account**: Sign up for a Heroku account at [Heroku's website](https://www.heroku.com/).
2. **Install Heroku CLI**: Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.

### Preparing the Application

1. **Procfile**: Create a `Procfile` in your project root directory. This file tells Heroku how to run your application.
2. **Requirements.txt**: Ensure you have a `requirements.txt` file listing all project dependencies.
3. **Config Vars**: Set up necessary configuration variables in Heroku (like `SECRET_KEY`, database URL, etc.).

### Deployment

1. **Create a Heroku App**: Use the Heroku CLI to create a new app.
2. **Add Buildpacks**: If necessary, add the correct buildpacks via the Heroku dashboard or CLI.
3. **Deploy**: Push your code to Heroku either by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
4. **Database Migration (if applicable)**: Run database migrations using the Heroku CLI.

### Final Steps

1. **Enable the Web Dyno**: Make sure the web dyno is up and running after deployment.
2. **Open the App**: You can open your application from the Heroku dashboard or using the CLI command `heroku open`.

For more detailed instructions and troubleshooting, visit the official [Heroku Dev Center](https://devcenter.heroku.com/).

## Forking the GitHub Repository

<hr>
Forking the GitHub repository allows you to make a copy of the original project on your own GitHub account, enabling you to make changes without affecting the original. Here's how to do it:

1. **Go to the Repository**: Navigate to the original repository on GitHub.
2. **Fork the Repository**: Click the 'Fork' button, located at the top right of the repository page. This creates a copy of the repository in your GitHub account.
3. **Clone Your Fork**: Once forked, you can clone your fork to your local machine for further development.

## Making a Local Clone

Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

1. **Clone the Repository**: On the GitHub repository page, click the 'Code' button and copy the URL under 'Clone with HTTPS'.
2. **Open Terminal**: Open your terminal and navigate to the directory where you want the clone to be created.
3. **Clone Command**: Type `git clone`, and then paste the URL you copied in Step 1. Press Enter to create your local clone.

# Credits

The following sources and references were resorted for the creation of this website:<br>

- The lessons and tutorials provided by Code Institute, on the final module entitled "Django REST Framework" for the 'Advanced Front-End' specialization<br>

## Content

This project has benefited from several educational resources and example projects provided by the Code Institute throughout the course of my bootcamp. The following projects deserve special mention for their direct impact on the development of this application:

- **Django REST Framework Example Project**: A practical example provided by the Code Institute that guided the development of Web APIs using Django REST framework. This project served as a template for best practices in API development with Django and Python.
- **Moments Project**: Another resource from the Code Institute, the Moments project was instrumental in illustrating the development of a full-stack application with a focus on user experience. Various aspects of its design and functionality have been adapted and incorporated into this project.

## Media

- Stock images for profile pictures from:<br>
  https://www.pexels.com/
- Font style from:<br>
  https://fonts.google.com/specimen/Barlow?query=Barlow
- Image of Barlow font:<br>
  https://www.fontpair.co/fonts/barlow
- SourdoughCircle icons:<br>
  https://www.flaticon.com/authors/mangsaabguru
- Other Icons:<br>
  https://www.flaticon.com

# Acknowledgements:

- My mentor
- The Code Institute community at Slack that always have people ready to help and more specific the #community-sweden channel with all the amazing people that I have both talked to in the channels but also met in real life for some irl study sessions, you guys are amazing and made this entire course easier and more fun to push through!
