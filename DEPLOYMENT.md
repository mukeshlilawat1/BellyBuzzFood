# DEPLOYMENT - BellyBuzzFood

This document explains how to deploy **BellyBuzzFood** in a production environment.

## Backend Deployment
1. Ensure Node.js and MongoDB are installed on the server.
2. Clone the repository:
```bash
git clone <repo-url>
cd BellyBuzzFood/backend
```
3. Install dependencies:
```bash
npm install
```
4. Set environment variables in `.env` file:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```
5. Start the server:
```bash
npm start
```
6. Ensure the server runs on a proper process manager like PM2 for production.

## Frontend Deployment
1. Navigate to the frontend folder:
```bash
cd ../frontend
```
2. Install dependencies:
```bash
npm install
```
3. Build for production:
```bash
npm run build
```
4. Deploy the `build/` folder to your hosting provider (Netlify, Vercel, or AWS S3 + CloudFront).

## Recommended Hosting
- **Backend:** AWS EC2, Heroku, DigitalOcean
- **Frontend:** Vercel, Netlify, AWS S3
- **Database:** MongoDB Atlas or h