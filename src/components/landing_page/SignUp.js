import React, { Component } from 'react';


class SignUp extends Component {
    render() {
        return (
            <dialog className="mdl-dialog" id="signup">
                <h4 className="mdl-dialog__title">Créer un compte</h4>
                <div className="mdl-dialog__content">
                    <form action="#">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="username" id="username"/>
                            <label className="mdl-textfield__label" htmlFor="username">Nom d'utilisateur</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="first_name"/>
                            <label className="mdl-textfield__label" htmlFor="firstname">Prénom</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="last_name"/>
                            <label className="mdl-textfield__label" htmlFor="last_name">Nom</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="email" id="email"/>
                            <label className="mdl-textfield__label" htmlFor="email">Email</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="password" id="password"/>
                            <label className="mdl-textfield__label" htmlFor="password">Mot de passe</label>
                        </div>
                    </form>
                </div>
                <div className="mdl-dialog__actions">
                    <button type="button"
                            className="mdl-button"
                            onClick={()=>{
                                let username = document.getElementById('username').value;
                                let first_name = document.getElementById('first_name').value;
                                let last_name = document.getElementById('last_name').value;
                                let email = document.getElementById('email').value;
                                let password = document.getElementById('password').value;
                                this.props.actions.sign_up(email, username, password, first_name, last_name)
                    }}>Envoyer</button>
                    <button type="button" className="mdl-button signup_close">Fermer</button>
                </div>
            </dialog>
        )
    }
}

export default SignUp;




