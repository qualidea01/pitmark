import firebase from "./firebase";

class AuthService {
	constructor() {
		this.auth = firebase.auth();
	}

	onStateChange(fn) {
		this.auth.onAuthStateChanged(fn);
	}

	signUp(email,password) {
		return this.auth.createUserWithEmailAndPassword(email,password)
	}

	signIn(email,password) {
		return this.auth.signInWithEmailAndPassword(email,password);
	}

	signOut() {
		return this.auth.signOut();
	}
}

const AuthService = new AuthService();
export { AuthService };