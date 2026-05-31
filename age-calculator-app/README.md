<div align="center">

  <img src="./public/favicon.svg" alt="Age Calculator logo" width="180" height="auto" />
  <h1>Age Calculator App</h1>

  <p>
    A polished solution to the Frontend Mentor Age Calculator challenge, built with React, Vite, Tailwind CSS, and modern form validation.
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
    <img src="https://img.shields.io/badge/Status-Live-success" alt="Live" />
  </p>

<!-- VARIABLE_SECTION_1_START -->

<!-- VARIABLE_SECTION_1_END -->

</div>

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<a id="about-the-project"></a>

## ✨ About the Project

This app calculates a user's exact age in years, months, and days based on a provided birth date.

The project focuses on:

- ✅ Clean, field-level validation
- 📱 Responsive UI behavior across devices
- 🎬 Smooth transitions and number animation
- ♿ Accessible form interactions with clear error messaging

<a id="screenshots"></a>

## 📸 Screenshots

<div align="center">
  <img src="./public/screenshot.jpg" alt="Age Calculator App Screenshot" />
</div>

<a id="tech-stack"></a>

## 🛠️ Tech Stack

- ⚛️ React 19
- ⚡ Vite 8
- 🎨 Tailwind CSS 4
- 🧾 React Hook Form
- ✅ Zod
- 🎞️ Motion
- 🧹 ESLint + Prettier

<a id="features"></a>

## 🌟 Features

Users can:

- Enter day, month, and year values to calculate age instantly.
- See animated age output in years, months, and days.
- Get validation feedback when:
  - any field is empty
  - values are not numeric
  - day is outside 1 to 31
  - month is outside 1 to 12
  - year is in the future
- Experience a responsive layout optimized for mobile and desktop.
- See hover and focus states for interactive elements.

<a id="getting-started"></a>

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 18 or newer
- npm

### 💻 Run Locally

Clone the project:

<!-- VARIABLE_SECTION_2_START -->

<!-- VARIABLE_SECTION_2_END -->

Move into the project folder:

```bash
cd age-calculator-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

<a id="available-scripts"></a>

## 📜 Available Scripts

- npm run dev: start the local development server
- npm run build: build the app for production
- npm run preview: preview the production build locally
- npm run lint: run ESLint checks

<a id="project-structure"></a>

## 🧩 Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  assets/
    svg/
  components/
    AgeForm.jsx
    AgeItem.jsx
    AgeResult.jsx
    AnimateNumber.jsx
    InputField.jsx
    MotionWrapper.jsx
```

<a id="deployment"></a>

## 🌐 Deployment

This project is deployed on Netlify:

- https://agecalculator-kv.netlify.app/

To create a production build locally:

```bash
npm run build
```

<a id="contributing"></a>

## 🤝 Contributing

Contributions, issues, and feature suggestions are welcome.

If you would like to contribute:

- fork the repository
- create a feature branch
- commit your changes
- open a pull request

<a id="license"></a>

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

<!-- VARIABLE_SECTION_3_START -->

<!-- VARIABLE_SECTION_3_END -->
