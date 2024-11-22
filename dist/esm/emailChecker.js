let blockedEmails = ["example1.com", "example2.com"];
export function isEmailBlocked(email) {
    if (!email)
        return false;
    return blockedEmails.some((blockedEmail) => email.toLowerCase().includes(blockedEmail.toLowerCase()));
}
export function addBlockedEmail(email) {
    if (!blockedEmails.includes(email)) {
        blockedEmails.push(email);
    }
}
export function addBlockedEmails(emails) {
    emails.forEach((email) => addBlockedEmail(email));
}
export function clearBlockedEmails() {
    blockedEmails = [];
}
export function getBlockedEmails() {
    return [...blockedEmails];
}
