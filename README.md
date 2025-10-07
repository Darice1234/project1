# AngularJS User Registration with Flask Backend

This project is a simple user registration system using **AngularJS** for the frontend and **Flask** for the backend API.

---

## Features

- User registration form with fields:
  - Name
  - Email
  - Password
  - Confirm Password
- Form validation including:
  - Required fields
  - Email pattern validation
  - Password confirmation match
- Submit button disabled until form is valid
- Backend API built with Flask to handle registration data
- CORS enabled for frontend-backend communication
- List of registered users accessible via API endpoint

---

## Project Structure

project-folder/
├── backend/
│ └── app.py # Flask backend server
├── frontend/
│ ├── index.html # AngularJS frontend
│ └── app/
│ └── app.js # AngularJS controller
├── README.md # Project documentation
└── .gitignore # Git ignore file (optional)

---

## Validation Details

- **Required fields:** AngularJS `required` directive ensures no empty inputs.
- **Email validation:** Uses AngularJS built-in email validation pattern.
- **Password confirmation:** Custom check in AngularJS controller to verify if `password === confirmPassword`.
- **Submit button disabled:** Button remains disabled (`ng-disabled`) until the form is valid and passwords match.

---

## Setup Instructions

### Backend (Flask)

1. Navigate to backend folder:

   ```bash
   cd backend
Install dependencies:

pip install flask flask-cors


Run the Flask server:

python app.py


Backend runs at: http://127.0.0.1:5000

Frontend (AngularJS)

Open frontend/index.html in your browser.

Fill the registration form ensuring all validations pass.

Click Register to send data to backend.

API Endpoints

POST /register — Accepts user registration data (name, email, password).

GET /users — Returns list of registered users (in-memory).

Notes

Data is stored temporarily in-memory; restarting the Flask server clears registered users.

For production, implement persistent database storage.

You can enhance validation and UI using AngularJS or other frameworks.

License

This project is open source and free to use.

Feel free to ask questions or contribute!


---

Would you like me to help you add a `.gitignore` too?

