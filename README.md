#  TicketBari

TicketBari is a modern online ticket booking platform where users can search, book, and pay for transportation tickets including **Bus, Train, Flight, and Launch**. The platform supports multiple user roles (User, Vendor, and Admin) with secure authentication, role-based dashboards, ticket management, booking management, and online payments.

---

##  Live Website

**Client:** https://online-ticket-booking-platform-clie-phi.vercel.app
---

##  Project Purpose

The goal of TicketBari is to provide a centralized platform where:

- Users can easily search and book transportation tickets.
- Vendors can publish, monitor revenue and manage their own tickets.
- Admins can verify vendors, approve tickets, and manage the entire system.

---
# Installation Guide

## 1. Clone the Repository

### Client

```bash
git clone https://github.com/ajwadhussain-shadman/Online-Ticket-Booking-Platform-client.git
```

### Server

```bash
git clone https://github.com/ajwadhussain-shadman/Online-Ticket-Booking-Platform-server.git
```

---

## 2. Install Dependencies

### Client

```bash
cd Online-Ticket-Booking-Platform-client
npm install
```

### Server

```bash
cd Online-Ticket-Booking-Platform-server
npm install
```

---

## 3. Configure Environment Variables

### Client (.env.local)

```env
NEXT_PUBLIC_BASE_SERVER=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_IMGBB_API_KEY=
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
```

### Server (.env)

```env
MONGO_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
STRIPE_SECRET_KEY=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

---

## 4. Start the Development Server

### Client

```bash
npm run dev
```

### Server

```bash
npm start
```

---

##  Key Features

### Authentication
- Email & Password Authentication
- Google Sign-In
- JWT Authentication
- Role-based Authorization
- Protected Routes

###  Ticket Management
- Browse all approved tickets
- Search by From & To locations
- Filter by Transport Type
- Sort by Ticket Price
- Pagination
- Ticket Details Page

###  Booking System
- Book tickets securely
- Stripe Payment Integration
- Automatic ticket quantity update
- Booking History
- Transaction History

###  Vendor Dashboard
- Add New Tickets
- Edit Tickets
- Delete Tickets
- View Revenue Overview
- Ticket Statistics
- Revenue Analytics (Charts)
- My Added Tickets

###  Admin Dashboard
- Manage Users
- Manage Vendors
- Verify Vendors
- Approve/Reject Tickets
- Fraud Detection


### User Interface
- Responsive Design
- Mobile Friendly
- Dark Theme
- Custom 404 Page
- Custom Loading Screen
- Beautiful Dashboard UI

---

##  Technologies Used

### Frontend

- Next.js 
- Tailwind CSS
- HeroUI
- React Icons
- Recharts
- React Hot Toast
- Better Auth
- Next Themes
- Gravity Ui Icons

### Backend

- Node.js
- Express.js
- MongoDB
- JWT
- JOSE

---

## NPM Packages Used

### Client

```bash
next.js
tailwindcss
@heroui/react
better-auth
next-themes
react-hot-toast
react-icons
recharts
stripe
```

### Server

```bash
express
mongodb
jose
cors
dotenv

```
---

## Resources

- **Live Website:** https://online-ticket-booking-platform-clie-phi.vercel.app
- **Client Repository:** https://github.com/ajwadhussain-shadman/Online-Ticket-Booking-Platform-client
- **Server Repository:** https://github.com/ajwadhussain-shadman/Online-Ticket-Booking-Platform-server-

---





