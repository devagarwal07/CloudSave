# CloudSave - Personal Finance Tracker

CloudSave is a comprehensive personal finance management application that helps users track their income, expenses, and financial insights. Built with a modern tech stack, it provides an intuitive interface for managing transactions, viewing financial reports, and gaining insights into spending patterns.

## 🌟 Features

### User Features
- **User Authentication**: Secure registration and login system with JWT-based authentication
- **Dashboard Overview**: Comprehensive view of your financial status at a glance
- **Transaction Management**: 
  - Add, edit, and delete transactions
  - Categorize transactions as credit or debit
  - View transaction history with filtering options
- **Financial Insights**: 
  - Visual charts and graphs for spending analysis
  - Income vs. expense tracking
  - Category-wise expenditure breakdown
- **Reports**: Generate detailed financial reports
- **Settings**: Personalize your account and preferences
- **Email Notifications**: Get notified about important financial activities

### Admin Features
- **Admin Dashboard**: Manage and monitor all users
- **User Management**: View and manage user accounts
- **System Analytics**: Track overall platform usage

## 🛠️ Technology Stack

### Frontend
- **React.js**: Modern UI library for building interactive interfaces
- **React Router**: Client-side routing
- **Lucide React**: Beautiful, consistent icon library
- **Framer Motion**: Smooth animations and transitions
- **Context API**: State management
- **CSS3**: Custom styling with responsive design

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, minimalist web framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling
- **JWT (JSON Web Tokens)**: Secure authentication
- **Bcrypt**: Password hashing for security
- **Nodemailer**: Email sending functionality
- **CORS**: Cross-Origin Resource Sharing support

### Development Tools
- **Nodemon**: Auto-restart server during development
- **Webpack**: Module bundler
- **Babel**: JavaScript compiler
- **dotenv**: Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** for version control

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/devagarwal07/CloudSave.git
cd CloudSave
```

### 2. Setup Backend (Server)

```bash
# Navigate to the server directory
cd CloudSave/Server

# Install dependencies
npm install

# Create a .env file in the Server directory
touch .env
```

Add the following environment variables to your `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password
```

### 3. Setup Frontend

```bash
# Navigate to the frontend directory
cd ../Frontend

# Install dependencies
npm install
```

## ⚙️ Configuration

### MongoDB Setup
1. **Local MongoDB**: Install MongoDB locally and start the service
   ```bash
   mongod
   ```

2. **MongoDB Atlas** (Cloud): 
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster
   - Get your connection string and add it to the `.env` file

### Email Configuration
Configure your email service credentials in the `.env` file to enable email notifications:
- Use Gmail, Outlook, or any SMTP service
- For Gmail, you may need to enable "Less secure app access" or use an App Password

## 🏃‍♂️ Running the Application

### Development Mode

#### Start the Backend Server
```bash
cd CloudSave/Server
npm run server
# or for development with auto-restart
npm run dev
```
The server will start on `http://localhost:5000`

#### Start the Frontend
```bash
cd CloudSave/Frontend
npm run dev
# or
npm start
```
The frontend will typically start on `http://localhost:3000` or `http://localhost:5173` (Vite)

### Production Mode

#### Backend
```bash
cd CloudSave/Server
npm start
```

#### Frontend
```bash
cd CloudSave/Frontend
npm run build
```
This will create a production-optimized build in the `dist` folder.

## 📁 Project Structure

```
CloudSave/
├── CloudSave/
│   ├── Server/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   │   └── db.js              # Database configuration
│   │   │   ├── controllers/
│   │   │   │   ├── adminController.js # Admin operations
│   │   │   │   └── user.js            # User operations
│   │   │   ├── middlewares/
│   │   │   │   └── auth.js            # Authentication middleware
│   │   │   ├── models/
│   │   │   │   ├── admin.js           # Admin schema
│   │   │   │   └── transaction.js     # Transaction schema
│   │   │   └── utils/
│   │   │       └── myMailer.js        # Email utility
│   │   ├── server.js                  # Main server file
│   │   ├── package.json
│   │   └── .env                       # Environment variables
│   │
│   └── Frontend/
│       ├── public/
│       │   ├── logo.png
│       │   └── logo.svg
│       ├── src/
│       │   ├── pages/
│       │   │   └── Dashboard/
│       │   │       └── Dashboard.jsx  # Main dashboard
│       │   ├── components/
│       │   │   └── AfterLogin/
│       │   │       ├── Overview/      # Financial overview
│       │   │       ├── Transaction/   # Transaction management
│       │   │       ├── Insights/      # Financial insights
│       │   │       ├── Reports/       # Reports generation
│       │   │       └── Settings/      # User settings
│       │   ├── context/
│       │   │   └── StoreContext.js    # Global state management
│       │   └── index.css
│       └── package.json
│
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### User Routes (`/api/user`)
- **POST** `/register` - Register a new user
- **POST** `/login` - User login
- **GET** `/profile` - Get user profile (protected)
- **PUT** `/profile` - Update user profile (protected)

### Transaction Routes (`/api/transaction`)
- **GET** `/` - Get all transactions for logged-in user (protected)
- **POST** `/` - Create a new transaction (protected)
- **PUT** `/:id` - Update a transaction (protected)
- **DELETE** `/:id` - Delete a transaction (protected)

### Admin Routes (`/api/admin`)
- **POST** `/login` - Admin login
- **GET** `/users` - Get all users (admin only)
- **GET** `/analytics` - Get platform analytics (admin only)

### Info Routes (`/api/user`)
- **GET** `/info` - Get additional user information (protected)

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt before storage
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Middleware to protect sensitive endpoints
- **CORS Configuration**: Controlled cross-origin requests
- **Input Validation**: Server-side validation using validator library
- **Environment Variables**: Sensitive data stored in .env files

## 🎨 Key Components

### Dashboard
The main dashboard provides:
- Financial overview with key metrics
- Quick access to all features
- Responsive sidebar navigation
- User profile display
- Notification system

### Transaction Management
- Add income and expenses
- Categorize transactions
- Filter by date, type, or category
- Real-time balance updates

### Insights & Reports
- Visual charts for spending patterns
- Category-wise analysis
- Monthly/yearly comparisons
- Exportable reports

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **Dev Agarwal** - [@devagarwal07](https://github.com/devagarwal07)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape CloudSave
- Built with love using open-source technologies
- Special thanks to the Node.js, React, and MongoDB communities

## 📞 Support

For support, email support@cloudsave.com or open an issue in the GitHub repository.

## 🚧 Future Enhancements

- [ ] Mobile application (React Native)
- [ ] Budget planning and alerts
- [ ] Multi-currency support
- [ ] Bank account integration
- [ ] Recurring transactions
- [ ] Advanced analytics with AI insights
- [ ] Export data to CSV/PDF
- [ ] Multi-language support
- [ ] Dark mode theme

## 📊 Screenshots

*Coming soon - Add screenshots of your application dashboard, transaction management, and reports*

---

**Made with ❤️ by the CloudSave Team**