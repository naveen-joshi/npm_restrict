let blockedEmails = ["ibindsystems.com", "competitor1.com", "competitor2.com"];

function isEmailBlocked(email) {
  if (!email) return false;

  return blockedEmails.some((blockedEmail) =>
    email.toLowerCase().includes(blockedEmail.toLowerCase())
  );
}

function addBlockedEmail(email) {
  if (!blockedEmails.includes(email)) {
    blockedEmails.push(email);
  }
}

function addBlockedEmails(emails) {
  emails.forEach((email) => addBlockedEmail(email));
}

function clearBlockedEmails() {
  blockedEmails = [];
}

function getBlockedEmails() {
  return [...blockedEmails];
}

module.exports = {
  isEmailBlocked,
  addBlockedEmail,
  addBlockedEmails,
  clearBlockedEmails,
  getBlockedEmails,
};
