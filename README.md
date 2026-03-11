# 📋 MOM Management System — Frontend

A modern, responsive **Minutes of Meeting (MOM) Management System** built with React. This application streamlines the process of creating, tracking, and managing meeting minutes with role-based access control and a clean, intuitive UI.

---

## ✨ Features

- 🔐 **Authentication** — Secure login & signup with role-based access
- 📊 **Dashboard** — Overview of meetings, stats, and quick actions
- 📝 **Meeting Management** — Create, edit, and track meetings
- 📅 **Meeting Calendar** — Visual calendar view of scheduled meetings
- ✅ **Attendance Tracking** — Mark and manage meeting attendance
- 👤 **User Profiles** — View and update user information
- 📈 **Reports** — Generate and view meeting reports
- ⚙️ **Master Console** — Admin panel for operational & advanced management
- 🧭 **Role-Based Access** — Admin, Convener, and Staff roles with tailored views

---

## 🛠️ Tech Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| **React 19**      | UI Library               |
| **React Router 7**| Client-side Routing      |
| **CSS**           | Styling                  |
| **Create React App** | Project Bootstrapping |

---

## 📁 Project Structure

```
mom_frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # Images & static assets
│   ├── components/          # Reusable UI components
│   │   ├── Attendance/      # Attendance related components
│   │   ├── EditMeeting/     # Meeting editing components
│   │   ├── Footer/          # App footer
│   │   ├── Header/          # App header / navigation
│   │   ├── MeetingCalendar/ # Calendar view component
│   │   ├── MeetingForm/     # Meeting creation form
│   │   └── MeetingList/     # Meeting listing component
│   ├── data/                # Dummy / seed data
│   ├── layouts/             # Layout wrappers
│   ├── pages/               # Route-level pages
│   │   ├── Login.js         # Login page
│   │   ├── Signup.js        # Signup page
│   │   ├── Dashboard.js     # Dashboard page
│   │   ├── Meetings.js      # Meetings page
│   │   ├── Attendance.js    # Attendance page
│   │   ├── Profile.js       # User profile page
│   │   ├── Master.js        # Admin master console
│   │   ├── Reports.js       # Reports page
│   │   └── NotFound.js      # 404 page
│   ├── styles/              # Global & shared styles
│   ├── App.js               # Root component with routing
│   └── index.js             # Entry point
├── package.json
└── READ.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16.x
- **npm** ≥ 8.x

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jenilptl/backend_pj_MOM.git
   cd mom_frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script          | Description                            |
| --------------- | -------------------------------------- |
| `npm start`     | Run the app in development mode        |
| `npm run build` | Create an optimized production build   |
| `npm test`      | Launch the test runner                 |
| `npm run eject` | Eject from Create React App (one-way)  |

---

## 🔑 User Roles

| Role        | Permissions                                                    |
| ----------- | -------------------------------------------------------------- |
| **Admin**   | Full access — manage all meetings, users, and system settings  |
| **Convener**| Create & manage own meetings, access operational console       |
| **Staff**   | View meetings they participate in, mark attendance             |

---

## 🗺️ Application Routes

| Route          | Page        | Auth Required |
| -------------- | ----------- | :-----------: |
| `/`            | Login       | ❌            |
| `/signup`      | Signup      | ❌            |
| `/dashboard`   | Dashboard   | ✅            |
| `/meetings`    | Meetings    | ✅            |
| `/attendance`  | Attendance  | ✅            |
| `/profile`     | Profile     | ✅            |
| `/master`      | Master      | ✅            |
| `/reports`     | Reports     | ✅            |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ using React
