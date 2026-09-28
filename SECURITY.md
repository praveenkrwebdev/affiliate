# Security

This is a static GitHub Pages site and does not intentionally store passwords, payment details, API secrets, or private user data in the repository.

## Reporting a vulnerability
Please report security issues through the repository's GitHub Issues page. Do not publish sensitive exploit details in a public issue if they could expose visitors.

## Security measures in this build
- Content Security Policy metadata
- Referrer and Permissions policies
- No server-side database or authentication layer
- No private API keys in frontend code
- External links opened in new tabs use `noopener noreferrer` where applicable
- Static assets and scripts are loaded from controlled paths
