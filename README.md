# Ritmo - An app designed to accompany students learning Latin dance (WORK IN PROGRESS)

Discover the ultimate Latin dance companion app that doubles as your personal library of moves and progress tracker. Perfect for students, it seamlessly guides your learning journey alongside your regular dance classes, while cataloging your dance repertoire.

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)


## About the Project

### Purpose
The purpose of this app is to enhance the Latin dance learning experience by providing a comprehensive library of moves and tracking tools, empowering students to progress and master their dance skills with ease.

### Goals
- Facilitate seamless learning by providing a comprehensive library of Latin dance moves.
- Track individual progress and milestones in mastering dance techniques.
- Enhance student engagement and motivation through interactive learning tools and personalised feedback.

### Background
Born out of a passion for Latin dance and a desire to support students in their learning journey, this app combines an informative selection of dance moves, whilst also allowing students to track their progress. It aims to support the way students learn and progress in Latin dance, whilst trying to solve the challenges that students tend to face: Remembering the vast amount of moves with the correct technique!

### Key Features (MVP):

- Move Library: Basic collection of Latin dance moves with text descriptions and static images.

- Progress Tracker: Simple checklist or progress bar to track completed moves.

- User Profiles: Basic profiles for users to store their progress and favorite moves.

- Video Playback: Integration with YouTube or Vimeo for instructional videos (assuming content is publicly available).

- Responsive Design: Ensuring the app is usable across different screen sizes (desktop and mobile).

- Feedback Form: Basic form for users to submit feedback or report issues.

- Search Functionality: Simple search bar to find specific dance moves by name.




### Some of my Stretch goals/ideas (not all of them, but just so you get the idea):

- Gamification Elements: Introduce points, badges, or levels based on user achievements and progress in learning dance moves.

- Progressive Learning Paths: Develop structured learning paths or that guide users from beginner to advanced levels, with suggested sequences of moves and skills to master.

- Notes & Class material storage: Students often take videos of themselves practicing, and of classes for reference material. A personal storage space for them to reference and place those files, and connect them to the move library (for privacy reasons, should only be visible to the user).
  
- Email Notifications: Basic email notifications for account-related actions (e.g., registration confirmation, password reset).

- Basic Authentication: User registration and login functionality.




---

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run knex migrate:latest
npm run knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```
