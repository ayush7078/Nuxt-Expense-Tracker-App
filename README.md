Expense Tracker App
This is a full-stack Expense Tracker application built with Nuxt.js (frontend) and Node.js/Express (backend). It uses MongoDB as the database and Ant Design for the UI components.

Features
Add, edit, and delete expenses
Track expenses with categories, amounts, and dates
Display a list of expenses
Responsive design using Ant Design Vue
Axios for API communication
Express.js for backend server
MongoDB as the database
Backend and frontend integration
Project Structure



expense-tracker/
│
├── frontend/                      # Nuxt.js frontend code
│   ├── assets/                    # Static assets (CSS, images)
│   ├── components/                # Vue components
│   ├── layouts/                   # Nuxt.js layouts
│   ├── pages/                     # Nuxt.js pages
│   ├── plugins/                   # Plugins (Ant Design)
│   ├── server/                    # Express.js server
│       └── index.js               # Backend code (API and MongoDB connection)
│       └── db.js                  # Backend code (MongoDB connection)
│   ├── static/                    # Static files
│   ├── store/                     # Vuex store (if needed)
│   ├── nuxt.config.js             # Nuxt.js configuration
│   └── package.json               # NPM dependencies and scripts
|   ├── .env                           # Environment variables
|   └── README.md                      # Project documentation


Technologies
Frontend: Nuxt.js, Ant Design Vue, Axios
Backend: Node.js, Express.js, MongoDB
Database: MongoDB (with Mongoose)
Styling: Ant Design Vue, CSS
Prerequisites
Ensure you have the following installed on your system:

Node.js: >= 12.x
npm: >= 6.x
MongoDB: Running locally or a cloud instance 


Installation
Clone the Repository
git clone https://github.com/ayush7078/expense-tracker.git
cd expense-tracker/frontend
Install Dependencies


npm install
Set Up Environment Variables
Create a .env file in the root directory (frontend/) and configure it as follows:



MONGO_URL=mongodb://localhost:27017/expense-tracker  # or your MongoDB URI
PORT=5000  # Backend server port
Start MongoDB
Make sure your MongoDB server is running locally or use a cloud instance like MongoDB Atlas.

Run the Application
To start both frontend and backend servers, run:


npm run dev
This will:

Start the Nuxt.js development server on http://localhost:3000
Start the Express.js backend server on http://localhost:5000
API Endpoints
GET /api/expenses - Fetch all expenses
POST /api/expenses - Add a new expense
Linting
You can use ESLint and Prettier for code linting and formatting. Run:


npm run lint
Make sure that eslint, prettier, and their respective configurations are properly set up.

Testing
You can use Jest as the testing framework for unit and integration testing. Run:


npm run test
License
This project is licensed under the MIT License - see the LICENSE file for details.

