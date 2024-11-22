let blockedEmails: string[] = ["example1.com", "example2.com"];

export function isEmailBlocked(email: string | null | undefined): boolean {
  if (!email) return false;

  return blockedEmails.some((blockedEmail) =>
    email.toLowerCase().includes(blockedEmail.toLowerCase())
  );
}

export function addBlockedEmail(email: string): void {
  if (!blockedEmails.includes(email)) {
    blockedEmails.push(email);
  }
}

export function addBlockedEmails(emails: string[]): void {
  emails.forEach((email) => addBlockedEmail(email));
}

export function clearBlockedEmails(): void {
  blockedEmails = [];
}

export function getBlockedEmails(): string[] {
  return [...blockedEmails];
}
