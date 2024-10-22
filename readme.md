Luxury Estate

This is a Property Buy & Sell Platform built using the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to list properties for sale, browse listed properties, add properties to their wishlist, and manage user authentication (login and register).

Features
User Authentication: Register and login using a secure authentication system.
Browse All Properties: View a list of all properties available for sale.
Add New Property: Registered users can add new properties to the platform.
Wishlist: Users can save properties to their wishlist for easy access later.
Responsive Design: The UI is optimized for mobile and desktop devices.
Technologies Used
Frontend:

React.js
CSS/SCSS or TailwindCSS (choose depending on what you used)
Material UI (if applicable)
Backend:

Node.js
Express.js
MongoDB with Mongoose
Database:

MongoDB Atlas (Cloud MongoDB service)
Authentication:

JWT (JSON Web Token) for secure user authentication.
Installation and Setup
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (You can use MongoDB Atlas for cloud database)


Clone the Repository

git clone https://github.com/Prateek202/XenonStackTask1



Backend Setup
1 Navigate to the backend directory:
cd backend

2 Install the dependencies:
npm install

3 Create a .env file in the backend directory and add the following:
MONGO_URI=<Your MongoDB Atlas URI>
JWT_SECRET=<Your JWT Secret Key>
PORT=5000


Start the server:
npm run start
The backend server will run on http://localhost:5000.


Frontend Setup

1 Navigate to the frontend directory:
cd ../frontend

2 Install the dependencies:
npm install

3 Create a .env file in the frontend directory and add the following:
REACT_APP_API_URL=http://localhost:5000

4 Start the React app:
npm install -g concurrently

Then, in the root of your project, add a script in package.json:

"scripts": {
  "dev": "concurrently \"npm run start --prefix backend\" \"npm start --prefix frontend\""
}

Now you can run both servers simultaneously with:
npm run dev

**Screenshots
1.  Login/Register Pages

![image](https://github.com/user-attachments/assets/5317085b-600c-47cc-9cc4-9f7a488b48c5)

2. Home Page

![image](https://github.com/user-attachments/assets/ed19fb4a-7d45-4318-9e05-a059a0e6ecdf)

3. Recommendations

![image](https://github.com/user-attachments/assets/b9aa6318-cf2a-41f4-8ac2-8c70cef84797)

4. Add Property Page

![image](https://github.com/user-attachments/assets/e93f9346-8146-45b2-9e68-e9433c40b909)

![image](https://github.com/user-attachments/assets/768c3e13-3871-4412-8add-fc69c95169a9)

5. Wishlist Page

![image](https://github.com/user-attachments/assets/a87df8c5-f092-49cb-ba60-8b78af4b0186)

6. Categories

![image](https://github.com/user-attachments/assets/b8837104-f963-4709-86c2-7016f017e67d)


