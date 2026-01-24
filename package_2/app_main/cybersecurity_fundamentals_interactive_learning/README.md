# Cybersecurity Fundamentals – Interactive Learning Platform

## Overview

This project aims to build a **web-based educational platform** that teaches **Cybersecurity fundamentals** in an interactive and engaging way.
Students will learn about network safety, password hygiene, ethical hacking basics, digital privacy, and secure coding practices — all through practical lessons and simulated environments.

---

## Main Features

* **Courses & Lessons** – each with text, videos, and interactive quizzes
* **Simulated Cyber Attacks** – safe virtual environments to test defense skills
* **User Dashboard** – tracks progress, completed lessons, and achievements
* **Admin Panel** – manage lessons, quizzes, and user roles
* **Gamified Learning** – badges, levels, and certificates to motivate learners

---

## Project Structure

```
cyberedu/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

## Core UI Sections

* **Home Page** – overview of cybersecurity and quick access to login/signup
* **Courses Page** – list of modules (e.g., Network Security, Phishing, Malware)
* **Lesson Viewer** – displays course text, media, and quizzes
* **Dashboard** – shows progress and earned badges
* **Admin Page** – used to create or edit courses and manage users

---

## Tech Stack (Planned)

| Layer           | Technology                              |
| --------------- | --------------------------------------- |
| Frontend        | React + TypeScript                      |
| Backend         | Node.js (Express)                       |
| Database        | PostgreSQL                              |
| Authentication  | JWT or OAuth                            |
| Hosting         | Vercel (frontend), Render/AWS (backend) |
| Version Control | GitHub                                  |

---

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/cyberedu.git
   ```
2. Navigate into the folder

   ```bash
   cd cyberedu
   ```
3. Install dependencies

   ```bash
   npm install
   ```
4. Run the development server

   ```bash
   npm run dev
   ```

---

## Future Goals

* Add AI-based quiz feedback
* Build a “Cyber Lab” with safe attack/defense simulations
* Integrate certificate generation and leaderboard features

---

## License

This project is open-source under the **MIT License**.
