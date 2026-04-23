# XO-online

A full-stack Tic-Tac-Toe application featuring an unbeatable AI and local multiplayer.

## Overview
XO-online is designed to showcase core web development concepts, algorithmic logic, and backend integration. It allows users to play against a friend locally or challenge an AI at different difficulty levels.

## Features
- **Single Player vs CPU**: 
  - **Easy Mode**: A random-move generator for casual play.
  - **Hard Mode**: Powered by the Minimax Algorithm—it is mathematically unbeatable.
- **Multiplayer (PvP)**: Classic 1v1 local play.
- **Dynamic UI**: Responsive design with state-managed screens (Main Menu, Difficulty, Game Board, and Results).
- **WSL Optimized**: Developed and tested in a Linux environment via Windows Subsystem for Linux.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **Environment**: WSL (Ubuntu), Git

## Key Algorithms
### Minimax Algorithm (Hard AI)
The Hard AI uses a recursive backtracking algorithm to explore the entire game tree. It assigns scores to terminal states (+10 for AI win, -10 for Human win, 0 for Draw) and chooses the path that maximizes its score while assuming the human plays optimally.

