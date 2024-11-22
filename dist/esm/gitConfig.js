import { execSync } from "child_process";
export function getGitEmail() {
    try {
        return execSync("git config user.email").toString().trim();
    }
    catch (error) {
        console.error("Unable to read git config");
        return null;
    }
}
