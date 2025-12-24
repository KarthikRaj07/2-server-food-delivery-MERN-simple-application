# 📦 Required Libraries Installation Guide

This document lists all the necessary libraries that need to be installed for each service.

## 🖥️ Server 1 (Order Service) - Port 5001

### Required Dependencies:
```bash
cd AnNewFood/server1
npm install express
```

### Optional (for development):
```bash
npm install --save-dev nodemon
```

### Complete Installation:
```bash
cd AnNewFood/server1
npm install
```

**Libraries:**
- ✅ **express** (^4.18.2) - Web framework for Node.js
- ✅ **nodemon** (^3.0.1) - Auto-restart server during development (dev dependency)

---

## 🌐 Server 2 (API Gateway) - Port 5000

### Required Dependencies:
```bash
cd AnNewFood/server2
npm install express axios
```

### Optional (for development):
```bash
npm install --save-dev nodemon
```

### Complete Installation:
```bash
cd AnNewFood/server2
npm install
```

**Libraries:**
- ✅ **express** (^4.18.2) - Web framework for Node.js
- ✅ **axios** (^1.6.0) - HTTP client for making requests to Server 1
- ✅ **nodemon** (^3.0.1) - Auto-restart server during development (dev dependency)

---

## ⚛️ Frontend (React App) - Port 3000

### Required Dependencies:
```bash
cd AnNewFood/frontend
npm install axios
```

**Note:** React, React-DOM, and React-Scripts are already included in the Create React App setup.

### Complete Installation:
```bash
cd AnNewFood/frontend
npm install
```

**Libraries:**
- ✅ **react** (^19.2.3) - React library (already included)
- ✅ **react-dom** (^19.2.3) - React DOM renderer (already included)
- ✅ **react-scripts** (^5.0.1) - Create React App scripts (already included)
- ✅ **axios** (^1.6.0) - HTTP client for API calls to Server 2
- ✅ **@testing-library/react** - Testing utilities (already included)
- ✅ **@testing-library/jest-dom** - Testing utilities (already included)
- ✅ **@testing-library/user-event** - Testing utilities (already included)
- ✅ **web-vitals** - Web performance metrics (already included)

---

## 🚀 Quick Installation (All Services)

Run these commands in order:

```bash
# Install Server 1 dependencies
cd AnNewFood/server1
npm install

# Install Server 2 dependencies
cd ../server2
npm install

# Install Frontend dependencies
cd ../frontend
npm install
```

Or install all at once from the root directory:

```bash
cd AnNewFood
cd server1 && npm install && cd ..
cd server2 && npm install && cd ..
cd frontend && npm install && cd ..
```

---

## 📋 Summary Table

| Service | Required Libraries | Purpose |
|---------|-------------------|---------|
| **Server 1** | `express` | Web server framework |
| **Server 2** | `express`, `axios` | Web server + HTTP client |
| **Frontend** | `axios` | HTTP client for API calls |

---

## ✅ Verification

After installation, verify by checking `node_modules` folder exists in each directory:

```bash
# Check Server 1
ls AnNewFood/server1/node_modules

# Check Server 2
ls AnNewFood/server2/node_modules

# Check Frontend
ls AnNewFood/frontend/node_modules
```

---

## 🔍 What Each Library Does

### Express
- **Purpose**: Fast, unopinionated web framework for Node.js
- **Used for**: Creating REST API endpoints, handling HTTP requests/responses
- **Where**: Server 1 and Server 2

### Axios
- **Purpose**: Promise-based HTTP client for making API requests
- **Used for**: 
  - Server 2 → Server 1 communication
  - Frontend → Server 2 communication
- **Where**: Server 2 and Frontend

### Nodemon (Optional)
- **Purpose**: Development tool that automatically restarts Node.js applications
- **Used for**: Auto-reload during development
- **Where**: Server 1 and Server 2 (dev dependency only)

---

## 💡 Tips

1. **Always install dependencies** before starting the servers
2. **Use `npm install`** (not `npm i`) for clarity
3. **Check for errors** during installation - missing dependencies will cause runtime errors
4. **Node.js version**: Make sure you have Node.js v14 or higher installed

---

## 🐛 Troubleshooting

If you encounter issues:

1. **Delete node_modules and package-lock.json**, then reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Clear npm cache**:
   ```bash
   npm cache clean --force
   ```

3. **Check Node.js version**:
   ```bash
   node --version
   ```
   Should be v14 or higher.

