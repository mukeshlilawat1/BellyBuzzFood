# TESTING - BellyBuzzFood

This document provides guidelines for testing the **BellyBuzzFood** project.

## 1. Unit Testing
- Backend: Use **Jest** or **Mocha** for testing individual functions and controllers.
- Frontend: Use **Jest + React Testing Library** for component testing.

**Example Backend Test:**
```javascript
const request = require('supertest');
const app = require('../server');

describe('GET /restaurants', () => {
  it('should return all restaurants', async () => {
    const res = await request(app).get('/api/restaurants');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
```

## 2. Integration Testing
- Test the interaction between frontend and backend APIs.
- Use tools like **Postman**, **Insomnia**, or automated tests with **Supertest**.
- Verify database interactions, authentication, and API responses.

## 3. Manual Testing
- Test all user flows: registration, login, adding to cart, placing orders, admin CRUD operations.
- Test on different browsers and devices for responsiveness.

## 4. Continuous Integration (CI)
- Integrate GitHub Actions or Travis CI to run tests automatically on pull requests.
- Ensure all tests pass before merging into main branch.

## 5. Code Coverage
- Use **Jest coverage** or **Istanbul** to measure coverage.
- Aim for at least 80% coverage for critical modules.

## 6. Reporting Bugs
- Report any testing issues using the **ISSUE_TEMPLATE.md** provi