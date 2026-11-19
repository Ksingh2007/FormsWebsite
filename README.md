# HTML Contact Form with FormSubmit

A lightweight, responsive HTML contact form featuring client-side JavaScript validation and serverless email submissions powered by [FormSubmit](https://formsubmit.co/).

## 📋 Overview

This project is a single-page web form built using semantic HTML5, internal CSS, and vanilla JavaScript. It collects user contact details, validates the inputs on the client side before submission, and forwards the form data directly to a specified email address without requiring a custom backend server.

## ✨ Features

* **Structured & Accessible Input Fields:** Collects user Title (`Mr`, `Mrs`, `Other`), First Name, Last Name, Email Address, Phone Number, and a custom Message with properly associated `<label>` elements.
* **Client-Side Validation:**
  * **HTML5 Validation:** Enforces required fields, valid email formatting, and regex pattern matching (`[0-9]{10,15}`) for phone numbers.
  * **JavaScript Validation:** Prevents form submission and displays dynamic red error messages if the Terms & Conditions checkbox is left unchecked or if the phone number fails regex verification.
* **Serverless Email Forwarding:** Uses `FormSubmit.co` via standard URL-encoded `POST` requests to route submissions directly to an email inbox.
* **Form Controls:** Includes both `Submit` and `Reset` buttons for easy user interaction.

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser (Chrome, Firefox, Safari, Edge) and an internet connection for form submission.

### Installation & Usage

1. **Clone or Download:** Save the HTML code into a file named `index.html`.
2. **Configure Your Email:** Open `index.html` and locate the `<form>` tag:
   ```html
   <form id="myForm" action="https://formsubmit.co/your-email@example.com" method="post">
   ```
   Replace the email address in the `action` URL with your own email address.
3. **Update Terms & Conditions Link:** Replace the placeholder URL (`https://youtu.be/xvFZjo5PgG0`) in the Terms & Conditions `<a>` tag with your actual terms page before deploying to production.
4. **Run Locally:** Double-click `index.html` to open it in your default web browser.
5. **Activate FormSubmit:** Submit the form once with test data. FormSubmit will send an activation email to your inbox—click the confirmation link to start receiving live submissions.
