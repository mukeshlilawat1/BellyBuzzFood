# Security Policy for BellyBuzzFood

## Supported Versions

| Component       | Version       |
|-----------------|---------------|
| Backend (Node.js) | 18.x         |
| Frontend (React) | 18.x          |
| Database         | MongoDB 6.x   |

---

## Reporting a Vulnerability

If you discover a security vulnerability in **BellyBuzzFood**, please report it responsibly to the project maintainers.

- **Email:** <your-email@example.com>
- **Subject:** Security Vulnerability Report - BellyBuzzFood
- Please provide: 
  - Steps to reproduce
  - Screenshots or videos (if applicable)
  - Any potential impact

Do **not** create public issues for security vulnerabilities.

---

## Supported Vulnerability Disclosure Policy

- Maintain confidentiality of the vulnerability until a fix is released.
- Collaborate with maintainers to validate the issue.
- Give maintainers reasonable time to fix before public disclosure.

---

## Security Best Practices for Contributors

1. Never commit secrets (API keys, passwords, JWT secrets) to the repository.
2. Use environment variables via `.env` file.
3. Regularly update dependencies to patch known vulnerabilities.
4. Follow secure coding practices for Node.js and React.
5. Validate all user inputs to prevent injection attacks.

---

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)
- [React Security Best Practices](https://reactjs.org/docs/security.html)