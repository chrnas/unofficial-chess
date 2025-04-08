# Technical Specification Document

## Project Title
Chess Hub

## Version
1.0 - 2025-04-08

---

## Table of Contents
1. [Introduction](#introduction)
2. [Functional Specification](#functional-specification)
3. [Technical Specification](#technical-specification)

---

## Introduction
This system is being developed as part of the TDDD27: Advanced Web Programming course at Linköping University. The objective of the project is to create a web application where users can play chess online, engage in live chats with opponents, watch ongoing matches, and view statistics for previously played games.

## Functional Specification
The system will serve as an online hub for playing and watching chess, enabling users to compete against each other and stream games on the website.

Key features of the system include:
- Connecting to and playing against online opponents in real-time.
- Engaging in live chat with the opponent during a game.
- Watching live streams of other games played on the platform.
- Viewing statistics from previously played games.
- Logging in to the website via secure authentication.
- Updating user profile information.
- Watching games played on the website.
- Watching games streamed on Lichess TV.
- Playing special games with modified chess rules icluding the addition of new pieces.

## Technical Specification
The system will be built with the following technologies:
- **Frontend:** Developed in React, utilizing Vite for fast development and build times.
- **Backend:** Powered by Node.js, ensuring scalable and efficient handling of user requests.
- **Database:** A Microsoft SQL Server (MSSQL) database will be used to store essential data, including user profiles, authentication details, and game statistics.
  
Key communication protocols:
- **Websockets:** Used for real-time communication during live games and chat.
- **HTTP Long Polling:** Utilized for authentication, retrieving user information, and accessing statistics.
- **Server-Sent Events (SSE):** Employed for game streaming to ensure efficient one-way communication for live updates.

Security:
- **Authentication:** To secure authentication OAuth 2.0 and JWS will be used.
