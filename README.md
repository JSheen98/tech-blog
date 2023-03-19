# Tech Blog

## ✏️ Description:

With this project, I wanted to create a website that a user could create and view tech blogs on. This website features sign up, and login to ensure a secure session while browsing and creating blogs. The user can also add comments to other peoples blog posts to voice their opinion on it. The user also has the option to view blog posts while signed out, however, they won't be able to comment, or create/edit/delete their own posts. They will need to be signed up and logged in to have that functionality.


## 📜 License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License. See LICENSE in the repo for more information.


## User Story

* AS A developer who writes about tech
* I WANT a CMS-style blog site
* SO THAT I can publish articles, blog posts, and my thoughts and opinion


## Acceptance Criteria

* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
* THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* WHEN I click on the homepage option
* THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
* THEN I am prompted to either sign up or sign in
* WHEN I choose to sign up
* THEN I am prompted to create a username and password
* WHEN I click on the sign-up button
* THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
* THEN I am prompted to enter my username and password
* WHEN I am signed in to the site
* THEN I see navigation links for the homepage, the dashboard, and the option to log out
* WHEN I click on the homepage option in the navigation
* THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* WHEN I click on an existing blog post
* THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* WHEN I enter a comment and click on the submit button while signed in
* THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* WHEN I click on the dashboard option in the navigation
* THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* WHEN I click on the button to add a new blog post
* THEN I am prompted to enter both a title and contents for my blog post
* WHEN I click on the button to create a new blog post
* THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
* WHEN I click on one of my existing posts in the dashboard
* THEN I am able to delete or update my post and taken back to an updated dashboard
* WHEN I click on the logout option in the navigation
* THEN I am signed out of the site
* WHEN I am idle on the site for more than a set time
* THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## 🖥️ Technologies Used

* JavaScript
* Express.js
* Handlebars
* MySQL
* MVC structure
* Heroku
* npm 


## ⚙️ Installation

* NOTE: this is only if you cloned this code, the actual live website can be found below ⬇️
1. Open integrated terminal on the db folder, run the mysql CLI
2. Run 'mysql -u root -p', enter your password, then run 'SOURCE schema.sql;'
3. Leave the mysql terminal, cd back into the root directory
4. Run 'npm i' in the terminal
5. Run 'npm run seed', then run 'npm run start' to seed, and start the server


## 📸 Assets: 

The following images represent the website's appearance:

![Home Screen](./public/images/home-screen.png)
![Dashboard](./public/images/user-dashboard.png)
![Signup](./public/images/signup-screen.png)
![Blog Post Edit](./public/images/blog-edit.png)


## 🌐 Deployed Application:

https://safe-ridge-72471.herokuapp.com/