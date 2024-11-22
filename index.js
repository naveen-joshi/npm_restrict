const {
  isEmailBlocked,
  addBlockedEmail,
  addBlockedEmails,
  clearBlockedEmails,
  getBlockedEmails,
} = require("./src/emailChecker");

const { getGitEmail } = require("./src/gitConfig");

module.exports = {
  version: "1.0.0",
  isEmailBlocked,
  addBlockedEmail,
  addBlockedEmails,
  clearBlockedEmails,
  getBlockedEmails,
  getGitEmail,
};
