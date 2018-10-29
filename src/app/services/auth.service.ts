import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';
import {AlertBox} from '../interfaces/alertbox';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    alertBox$: BehaviorSubject<AlertBox> = new BehaviorSubject(null);
    userData$: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(private afAuth: AngularFireAuth, private router:Router) {
        this.afAuth.authState.subscribe((user) => {
                this.setUserData(user);
            }
        );
    }

    // Email/password sing up
    emailSignUp(email: string, password: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                this.afAuth.auth.currentUser.sendEmailVerification()
                    .then(success => {
                        this.logout();
                        this.setMessage(`A confirmation email has send.<br>
                            Please check your mailbox`, 'alert-success');
                    })
                    .catch(error => this.setMessage(error, 'alert-danger'));
            })
            .catch(error => {
                this.setMessage(error.message, 'alert-danger');
            });
    }

    // Reset password
    emailResetPassword(email: string) {
        this.afAuth.auth.sendPasswordResetEmail(email)
            .then(() => this.setMessage('Please check your email', 'alert-success'))
            .catch(error => this.setMessage(error, 'alert-danger'));
    }

    // Email/password login
    emailLogin(email: string, password: string) {
        this.logout();
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                if (!user.user.emailVerified) {
                    this.logout();
                    this.setMessage(`Please confirm your registration!<br>
                        Check your mailbox: ${user.user.email}`, 'alert-danger');
                } else {
                    this.setUserData(user.user);
                }
            })
            .catch(error => this.setMessage(error.message, 'alert-danger'));
    }

    // Social logins
    googleLogin() {
        this.logout();
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
            .catch(error => this.setMessage(error.message, 'alert-danger'));
    }

    

    // Logout
    logout() {
        this.clearMessage();
        this.afAuth.auth.signOut();
        this.userData$.next(null);
    }


    // Message BS4 alert-box
    setMessage(msg: string, color: string) {
        this.alertBox$.next({
            message: msg,
            color: color
        });
    }

    clearMessage() {
        this.alertBox$.next(null);
    }

    // Copy fields from authState to userData$
    private setUserData(user) {
        if (user !== null) {
            this.userData$.next({
                uid: user.uid,
                displayName: user.displayName || user.email,
                photoURL: user.photoURL || '/assets/icons/icon-72x72.png',
                email: user.email,
            });
            if(this.router.url === '/login'){
                this.router.navigate(['/spelersbeheer']);  
            }
            
        } else {
            this.userData$.next(null);
        }
    }

    // Debug-info op loginpagina
    getAuthState$() {
        return this.afAuth.authState;
    }
}