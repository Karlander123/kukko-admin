export namespace authError {
    export function convertMessage(code: string): string {
        switch (code) {
            case 'auth/wrong-password': {
                return "You have entered the wrong password.";
            }
            case 'auth/user-not-found': {
                return 'Sorry user not found.';
            }
            default: {
                return 'Login error, please try again.';
            }
        }
    }
}