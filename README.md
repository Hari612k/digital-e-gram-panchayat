# 📌 Digital E-Gram Panchayat

Developed By: Harikrishna Gangadi

Technologies: HTML, CSS, JavaScript, Firebase

📖 1. Overview

Digital E-Gram Panchayat is a web application designed to computerize gram panchayat citizen services.

It allows citizens to:

-> Search services

-> Apply for services online

-> Track application status

-> Manage their profile

Staff and Officers can:

-> Manage service requests

-> Approve/Reject applications

-> Create and update village services (Officer only)

This project digitizes the entire workflow of service delivery at the Panchayat level.

🧩 2. System Modules

👤 User (Citizen)

-> Register

-> Login

-> Search services

-> Apply for service

-> Upload required information

-> Track application status

-> View profile

-> Logout

👨‍💼 Staff

-> Login

-> View all applications

-> Approve/Reject applications

-> Logout

🏛️ Officer / Admin

-> Login

-> Create new services

-> Update/Delete services

-> View and manage all applications

-> Approve/Reject applications

-> Logout



🏗️ 3. Project Folder Structure


digital-e-gram-panchayat/

│

├── public/  

│       ├── index.html

│       ├── dashboard-citizen.html

│       ├── dashboard-staff.html

│       ├── dashboard-officer.html

│       ├── apply-service.html

│       ├── my-applications.html

│       ├── profile.html

│       ├── manage-services.html

│       ├── view-all-applications.html

│   │
│   ├── css/

│       │   └── style.css

│       │
│   ├── js/

│       ├── firebase-config.js

│       ├── navbar.js

│       ├── logger.js

│
├── firestore.rules

├── firestore.indexes.json

├── firebase.json

├── .firebaserc

│
├── README.md

└── Digital_E_Gram_Panchayat_Report.docx



🔐 4. Testing Login Credentials


👤 Citizen (User)


| Email           | Password   |
| --------------- | ---------- |
| ramesh@test.com | Ramesh@123 |


👨‍💼 Officer


| Email                    | Password    |
| ------------------------ | ----------- |
| officer@panchayat.gov.in | Officer@123 |


👨‍🔧 Staff


| Email                  | Password  |
| ---------------------- | --------- |
| Staff@panchayat.gov.in | Staff@123 |



🗄️ 5. Firebase Setup Required


✔️ Enable Authentication

Go to Firebase Console → Authentication → Sign-in method

Enable Email/Password

✔️ Add Officer & Staff manually

Because only Users self-register, you must create:

-> Officer account

-> Staff account

from Firebase Authentication → “Add User”.

✔️ Firestore Collections Auto-Generated

These collections are created automatically:

| Collection     | Created By                    |
| -------------- | ----------------------------- |
| `users`        | On registration               |
| `services`     | When Officer creates services |
| `applications` | When Citizen applies          |
| `logs`         | Automatically from logger.js  |

No other manual Firestore documents are required.

🔒 6. Firestore Security Rules

Rules included exactly as per requirement:

-> Citizens can create applications

-> Staff can update status

-> Officer can create/update/delete services

-> Logs writable by all authenticated users

📚 7. Logging

The application includes a complete logging system, capturing every important action performed by any user (Citizen, Staff, Officer).

Every action is logged:

-> Citizen login

-> Citizen registration

-> Apply for service

-> Officer creates service

-> Officer deletes service

-> Staff/Officer updates status

-> Logout

All logs save to:

logs/
<logId>
action:
details:
email:
role:
page:
userId:
timestamp:

🧪 8. Test Cases (Functional Testing)

Citizen Test Cases

| Test                 | Expected Result                                    |
| -------------------- | -------------------------------------------------- |
| Register new citizen | User created in Auth + Firestore → Dashboard opens |
| Login                | Redirect to Citizen Dashboard                      |
| Search services      | Services appear instantly                          |
| Apply for a service  | New application stored in Firestore                |
| Track Application    | Shows correct status                               |
| Logout               | Redirect to login                                  |

Staff Test Cases

| Test                  | Expected Result                       |
| --------------------- | ------------------------------------- |
| Login                 | Redirect to Staff Dashboard           |
| View all applications | Table loads applications of all users |
| Approve application   | Status becomes APPROVED               |
| Reject application    | Status becomes REJECTED               |
| Action logged         | Entry created in `logs` collection    |

Officer Test Cases

| Test               | Expected Result                                 |
| ------------------ | ----------------------------------------------- |
| Login              | Redirects to Officer Dashboard                  |
| Create new service | Service appears in Citizen “Apply Service” page |
| Edit service       | Updated details appear everywhere               |
| Delete service     | Service removed from all pages                  |
| View applications  | Can approve / reject                            |
| Logging            | All actions stored in `logs`                    |

🏗️ 9. How to Run the Project

Local Development

bash -> firebase serve

Open:
👉 http://localhost:5000

Live Hosting Deployment

bash -> firebase deploy

📌 10. Firestore Structure (Auto-Created)

| Collection     | Purpose                    | Created By  |
| -------------- | -------------------------- | ----------- |
| `users`        | Stores user profile & role | Auth signup |
| `services`     | List of all services       | Officer     |
| `applications` | All submitted applications | Citizen     |
| `logs`         | Mandatory logs             | logger.js   |

No manual creation needed except Officer and Staff accounts.

🔐 11. Role-Based Access Control

| Role        | Permissions                          |
| ----------- | ------------------------------------ |
| **Citizen** | Apply, Track, Profile                |
| **Staff**   | Manage applications (approve/reject) |
| **Officer** | Manage services + applications       |
| 🌐 All      | Login, Logout, Navbar, Logs          |



12. Links

    
GitHub Repository   : https://github.com/Hari612k/digital-e-gram-panchayat


Live Project URL    : https://digital-e-gram-web.web.app


Firebase Console    : https://console.firebase.google.com/project/digital-e-gram-web/overview
