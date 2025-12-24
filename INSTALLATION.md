# 📦 Installation Guide

Complete guide for installing all required dependencies for the Food Delivery Application.

---

## 📋 Prerequisites

- Node.js v14 or higher
- npm (comes with Node.js)

---

## 🚀 Quick Start

Install all dependencies at once:

```bash
# From AnNewFood directory
cd server1 && npm install && cd ..
cd server2 && npm install && cd ..
cd frontend && npm install && cd ..
```

---

## 📦 Dependencies by Service

### Server 1 - Order Service (Port 5001)

**Install:**
```bash
cd AnNewFood/server1
npm install
```

**Dependencies:**
| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^4.18.2 | Web framework |
| `nodemon` | ^3.0.1 | Dev tool (auto-restart) |

---

### Server 2 - API Gateway (Port 5000)

**Install:**
```bash
cd AnNewFood/server2
npm install
```

**Dependencies:**
| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^4.18.2 | Web framework |
| `axios` | ^1.6.0 | HTTP client for Server 1 |
| `nodemon` | ^3.0.1 | Dev tool (auto-restart) |

---

### Frontend - React App (Port 3000)

**Install:**
```bash
cd AnNewFood/frontend
npm install
```

**Dependencies:**
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.2.3 | React library |
| `react-dom` | ^19.2.3 | React DOM renderer |
| `react-scripts` | ^5.0.1 | Create React App |
| `axios` | ^1.6.0 | HTTP client for API Gateway |

*Note: Testing libraries and web-vitals are included by default with Create React App.*

---

## 📊 Dependency Overview

```
┌─────────────────────────────────────────────────┐
│              Dependency Flow                     │
├─────────────────────────────────────────────────┤
│                                                 │
│  Frontend (axios)                               │
│       ↓                                         │
│  Server 2 (express + axios)                     │
│       ↓                                         │
│  Server 1 (express)                             │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## ✅ Verification

After installation, verify each service:

```bash
# Check Server 1
cd AnNewFood/server1
ls node_modules  # Should show express folder

# Check Server 2
cd ../server2
ls node_modules  # Should show express and axios folders

# Check Frontend
cd ../frontend
ls node_modules  # Should show axios and react folders
```

---

## 🔧 Library Details

### Express
- **What**: Web application framework for Node.js
- **Used in**: Server 1, Server 2
- **Why**: Handles HTTP requests, routing, middleware

### Axios
- **What**: Promise-based HTTP client
- **Used in**: Server 2, Frontend
- **Why**: Makes API calls between services

### Nodemon
- **What**: Development utility
- **Used in**: Server 1, Server 2 (dev only)
- **Why**: Auto-restarts server on file changes

---

## 🐛 Troubleshooting

### Issue: Module not found
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port already in use
```bash
# Check what's using the port
# Windows: netstat -ano | findstr :5000
# Mac/Linux: lsof -i :5000
```

### Issue: npm install fails
```bash
# Clear npm cache
npm cache clean --force
npm install
```

### Issue: Node version too old
```bash
# Check version
node --version

# Update Node.js from nodejs.org
```

---

## 📝 Installation Checklist

- [ ] Node.js v14+ installed
- [ ] Server 1 dependencies installed
- [ ] Server 2 dependencies installed
- [ ] Frontend dependencies installed
- [ ] All `node_modules` folders exist
- [ ] Ready to start services

---

## 🎯 Next Steps

After installation, start the services:

1. **Start Server 1**: `cd server1 && npm start`
2. **Start Server 2**: `cd server2 && npm start`
3. **Start Frontend**: `cd frontend && npm start`

See `README.md` for detailed running instructions.
