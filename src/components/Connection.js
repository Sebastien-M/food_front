import React, {Component} from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";


class Connection extends Component {
    render() {
        return (
            <section>
                <SignUp/>
                <SignIn/>
            </section>
        )
    }

    componentDidMount() {
        let signup_dialog = document.querySelector('#signup');
        let signin_dialog = document.querySelector('#signin');
        let showSignUpDialogButton = document.querySelector('#show-sign-up-dialog');
        let showSignInDialogButton = document.querySelector('#show-sign-in-dialog');

        showSignUpDialogButton.addEventListener('click',  () => {
            signup_dialog.showModal();
        });

        showSignInDialogButton.addEventListener('click', () => {
            signin_dialog.showModal();
        });

        signup_dialog.querySelector('.signup_close').addEventListener('click', () => {
            signup_dialog.close();
        });

        signin_dialog.querySelector('.close').addEventListener('click', () => {
            signin_dialog.close();
        });
    }
}

export default Connection;




