import React, {Component} from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";


class Connection extends Component {

    render() {
        return (
            <section className="demo-layout-transparent mdl-layout mdl-js-layout">
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <section className="mdl-layout__header-row">
                        <span className="mdl-layout-title">FOOD</span>
                        <section className="mdl-layout-spacer"/>
                        <nav className="mdl-navigation">
                        </nav>
                    </section>
                </header>

                <main className="container-fluid">
                    <section className="mdl-grid ">
                        <h2 className="mdl-cell mdl-cell--12-col">Mettez vous à la cuisine</h2>
                    </section>
                    <section className="center">
                        <section className="main_buttons">
                            <button
                                className="mdl-button mdl-button--raised mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored signup"
                                id="show-sign-up-dialog">
                                Créer un compte
                            </button>
                            <button
                                className="mdl-button mdl-button--raised mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored signin"
                                id="show-sign-in-dialog">
                                Se connecter
                            </button>

                            <div id="connection">
                                <SignUp {...this.props}/>
                                <SignIn {...this.props}/>
                            </div>
                        </section>
                    </section>
                </main>

                <section className="bottom_content">
                    <br/>
                    <br/>
                    <h2>Qu'est-ce que Food?</h2>

                    <div className="mdl-grid main_container_info" style={{paddingBottom:"100px"}}>
                        <div className="mdl-layout-spacer"/>
                        <div className="mdl-cell mdl-cell--6-col container_info text_center">
                            <p>Food est une application vous proposant des recettes pour chaque jour de la semaine.
                                En fonction des recettes proposées une liste de courses sera crée. Vous pouvez également
                                modifier cette liste ou les recettes proposées en fonction de vos préférences
                            </p>
                        </div>
                        <div className="mdl-layout-spacer"/>
                    </div>

                </section>
            </section>
        )
    }

    componentDidMount() {
        let signup_dialog = document.querySelector('#signup');
        let signin_dialog = document.querySelector('#signin');
        let showSignUpDialogButton = document.querySelector('#show-sign-up-dialog');
        let showSignInDialogButton = document.querySelector('#show-sign-in-dialog');

        showSignUpDialogButton.addEventListener('click', () => {
            signup_dialog.showModal();
        });

        showSignInDialogButton.addEventListener('click', () => {
            signin_dialog.showModal();
        });

        signup_dialog.querySelector('.signup_close').addEventListener('click', () => {
            signup_dialog.close();
        });

        signin_dialog.querySelector('.signin_close').addEventListener('click', () => {
            signin_dialog.close();
        });
    }
}

export default Connection;




