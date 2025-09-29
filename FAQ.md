# FAQ - BellyBuzzFood

## Q1: How do I run the project locally?
**A:**
1. Clone the repository:
```bash
git clone <repo-url>
cd BellyBuzzFood
```
2. Backend setup:
```bash
cd backend
npm install
npm start
```
3. Frontend setup:
```bash
cd ../frontend
npm install
npm start
```
4. Access the app at `http://localhost:3000`.

---

## Q2: What environment variables are required?
**A:** Create a `.env` file in the backend folder with the following:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## Q3: How do I contribute?
**A:** Follow the [CONTRIBUTING.md](CONTRIBUTING.md) guide which covers:
- Forking and cloning the repo
- Creating a branch
- Committing and pushing changes
- Opening a Pull Request

---

## Q4: How can I report a bug?
**A:** Use the [ISSUE_TEMPLATE.md](.github/ISSUE_TEMPLATE.md) and submit a new issue on GitHub. Include steps to reproduce, screenshots, and environment details.

---

## Q5: Are there any coding standards?
**A:** Yes, follow the existing project structure and maintain consistent formatting. Use comments for complex logic and avoid committing secrets.

---

## Q6: How do I access the admin panel?
**A:** Only users with admin privileges can access the admin panel. Admin features include:
- Adding/removing restaurants
- Managing menus
- Viewing orders

---

## Q7: Where can I find the API documentation?
**A:** Detailed API routes and responses will be in `API_DOCS.md` for contributors and developers.

---

## Q8: How do I update my local repository?
**A:**
```bash
git pull origin main