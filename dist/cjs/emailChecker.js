"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailBlocked = isEmailBlocked;
exports.addBlockedEmail = addBlockedEmail;
exports.addBlockedEmails = addBlockedEmails;
exports.clearBlockedEmails = clearBlockedEmails;
exports.getBlockedEmails = getBlockedEmails;
let blockedEmails = ["example1.com", "example2.com"];
function isEmailBlocked(email) {
    if (!email)
        return false;
    return blockedEmails.some((blockedEmail) => email.toLowerCase().includes(blockedEmail.toLowerCase()));
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
