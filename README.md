# CRUD App with Node.js and Express

This is a simple CRUD (Create, Read, Update, Delete) application built with **Node.js** and **Express**.  
It demonstrates basic REST API operations for two entities:

- **Students**  
- **Courses**

The data is stored in-memory (arrays) for simplicity, but you can later connect it to a real database like MongoDB or MySQL.

---

## 🚀 Features
- Create new students and courses
- Read (list) all students and courses
- Update existing students and courses
- Delete students and courses
- RESTful API with JSON responses

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/crud-app.git
cd crud-app
# to install dependancies
npm install

#to launch the project
npm start

#expected outcomes
Server running on http://localhost:3000

###API endpoints documentation
Open Postman

Click Import

Select the crud-app.postman_collection.json file

You’ll see a CRUD App API collection with all endpoints pre-loaded.
