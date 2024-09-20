# MeDoc

## Overview

**MeDoc** is a doctor-patient relationship management application aimed at simplifying healthcare services. This mobile application allows patients to manage their health information, connect with doctors, and access medical services such as appointment booking, online consultations, and emergency assistance. 

---

## Features

1. **Account Management**:  
   - User registration and login.
   - Doctor registration with admin verification.

2. **Medical Services**:  
   - Search for hospitals and doctors based on specialty and location.
   - Online appointment booking with doctors.
   - Virtual consultations via chat.
   - Payment of consultation fees through the app.
   - Emergency button for ambulance services.

3. **Additional Functionalities**:  
   - Disease dictionary with symptoms and causes.
   - BMI calculation for patients.
   - Profile management for both users and doctors.
   - Notifications for upcoming appointments.

---

## Technologies Used

- **Frontend**: React Native (for Android & iOS).
- **Backend**: PHP (Server-side scripting), MySQL (Database).
- **Server**: WAMP Server (Windows, Apache, MySQL, PHP).
- **Other Tools**: 
   - Expo Go (for mobile testing)
   - Sublime Text, Visual Studio Code (for development)

---

## System Requirements

### Hardware Requirements:
- Processor: Intel Core i3 or higher
- RAM: 4 GB or more
- Hard Disk: 256 GB or more

### Software Requirements:
- Operating System: Windows XP or higher, Android, or macOS
- Browser: Google Chrome, Mozilla Firefox, or any other modern browser
- Application Server: WAMP Server

---

## Project Modules

1. **Admin Module**:
   - Manage users and doctors.
   - Verify doctor registrations.
   - Upload disease and hospital details.

2. **User Module**:
   - Register and login.
   - Book doctor appointments.
   - Access BMI calculator and disease dictionary.
   - Chat with doctors and access emergency services.

3. **Doctor Module**:
   - Register and login.
   - Manage appointments and online consultations.
   - Prescribe medication and manage profile.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shivan-kulal-git/Medoc.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Medoc
   ```

3. Install the necessary dependencies for React Native:
   ```bash
   npm install
   ```

4. Set up the backend with PHP and MySQL:
   - Install [WAMP Server](https://www.wampserver.com/).
   - Set up the MySQL database and import the provided database schema.

5. Start the development server for React Native:
   ```bash
   npx react-native run-android
   ```

---

## Usage

- **User**: Sign up, book appointments, chat with doctors, or call for an ambulance during emergencies.
- **Doctor**: Manage your profile, view appointments, and provide online consultations.
- **Admin**: Oversee the system by managing user and doctor records, verifying registrations, and updating hospital details.

---

## Future Enhancements

- Add a pharmacy and laboratory module.
- Improve security features, especially for payments.
- Extend hospital-related information (e.g., bed availability, ICU status).

---

## Contributing

Feel free to open issues or submit pull requests for improvements. We welcome contributions that enhance the project!

---
