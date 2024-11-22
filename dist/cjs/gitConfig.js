"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitEmail = getGitEmail;
const child_process_1 = require("child_process");
function getGitEmail() {
    try {
        return (0, child_process_1.execSync)("git config user.email").toString().trim();
    }
    catch (error) {
        console.error("Unable to read git config");
        return null;
    }
}
