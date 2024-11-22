"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gitConfig_1 = require("./gitConfig");
const emailChecker_1 = require("./emailChecker");
function checkEmail() {
    const email = (0, gitConfig_1.getGitEmail)();
    if (!email) {
        console.warn("No git email configured");
        return;
    }
    if ((0, emailChecker_1.isEmailBlocked)(email)) {
        console.error("\x1b[31m%s\x1b[0m", "🚫 Installation blocked!");
        console.error("\x1b[31m%s\x1b[0m", "If you don't hire me, don't use my work");
        process.exit(1);
    }
}
checkEmail();
