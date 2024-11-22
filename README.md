## NPM Restrict

A package to block installation based on git user domain.

### Installation

```bash
npm install npm-restrict
```

### Usage

```javascript
const npmRestrict = require("npm-restrict");

// Add single email or domain
npmRestrict.addBlockedEmail("example.com");

// Add multiple emails or domains
npmRestrict.addBlockedEmails(["domain1.com", "domain2.com"]);

// Check if an email is blocked
const isBlocked = npmRestrict.isEmailBlocked("user@example.com");

// Get current git email
const currentEmail = npmRestrict.getGitEmail();

// Get list of blocked emails/domains
const blockedList = npmRestrict.getBlockedEmails();

// Clear blocked list
npmRestrict.clearBlockedEmails();
```
