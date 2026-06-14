# 🏦 BankLedger

> A production-grade banking backend system engineered to simulate real-world financial transaction processing with secure authentication, ledger-based accounting, and transaction integrity.

BankLedger is a robust backend application built with Node.js, Express.js, and MongoDB that models the core architecture of modern banking systems. It enables secure account management, transaction processing, balance tracking through ledgers, and reliable financial operations while maintaining consistency, auditability, and security.

Designed using industry-standard backend practices, the system demonstrates how banks process debit and credit transactions, prevent duplicate requests, maintain transaction history, and derive balances from immutable ledger entries.

---

## ✨ Core Features

### 🔐 Authentication & Security

* JWT-based Authentication & Authorization
* Password Hashing with bcrypt
* Secure Cookie Management
* Protected Routes using Middleware
* Token Blacklisting for Secure Logout

### 👤 User & Account Management

* User Registration & Login
* Account Creation & Management
* Account Status Validation
* Secure Access Control

### 💸 Transaction Engine

* Credit & Debit Operations
* Transaction Lifecycle Management
* Pending Transaction Handling
* Idempotency Validation to Prevent Duplicate Transactions
* Complete Transaction History

### 📒 Ledger-Based Accounting

* Immutable Ledger Entries
* Accurate Balance Computation
* Financial Audit Trail
* MongoDB Aggregation Pipelines for Balance Derivation
* Consistent and Reliable Financial Records

### 📧 Notification System

* Automated Welcome Emails
* Transaction Confirmation Emails
* Nodemailer Integration

---

## 🏗️ System Architecture

BankLedger follows a modular backend architecture:

```text
Client
   │
   ▼
REST APIs
   │
   ▼
Authentication Layer
   │
   ▼
Transaction Engine
   │
   ├── Account Service
   ├── Ledger Service
   ├── Validation Service
   └── Notification Service
   │
   ▼
MongoDB Database
```

---

## 🛠️ Tech Stack

| Category               | Technologies              |
| ---------------------- | ------------------------- |
| Backend                | Node.js, Express.js       |
| Database               | MongoDB, MongoDB Atlas    |
| Authentication         | JWT, bcrypt               |
| Email Service          | Nodemailer                |
| Security               | Cookie Parser, Middleware |
| Environment Management | dotenv                    |
| API Testing            | Postman                   |

---

## 🔄 Transaction Processing Flow

1. User initiates a transaction request.
2. Authentication and authorization are verified.
3. Account status is validated.
4. Idempotency checks prevent duplicate processing.
5. Transaction enters a pending state.
6. Ledger entries are generated.
7. Account balances are updated through ledger calculations.
8. Transaction confirmation is sent via email.
9. Transaction status is finalized.

This workflow mirrors the principles used in modern financial systems to maintain transaction consistency and reliability.

---

## 🎯 Key Highlights

* Implemented secure JWT authentication and authorization.
* Designed a ledger-based accounting mechanism for balance tracking.
* Built idempotent transaction APIs to prevent duplicate financial operations.
* Utilized MongoDB aggregation pipelines for efficient balance computation.
* Developed a scalable RESTful backend architecture following industry best practices.
* Integrated automated email notifications for enhanced user experience.

---

## 📚 What I Learned

Through BankLedger, I gained hands-on experience with:

* Backend System Design
* Financial Transaction Processing
* REST API Development
* MongoDB Data Modeling
* Aggregation Pipelines
* Authentication & Security
* Ledger-Based Accounting Systems
* Idempotency Handling
* Production-Ready Backend Architecture

---

## 🚀 Future Enhancements

* Role-Based Access Control (RBAC)
* Scheduled Transfers
* Transaction Reversal System
* Fraud Detection Module
* Real-Time Notifications
* Redis Caching
* Admin Dashboard
* Microservices Architecture

---

## 👨‍💻 Author

**Aditya Patel**

Computer Science Student | MERN Stack Developer

🔗 GitHub: https://github.com/Aadi-patel04

🔗 LinkedIn:https://www.linkedin.com/in/adityapatel004

---

⭐ If you found this project interesting, consider starring the repository.
