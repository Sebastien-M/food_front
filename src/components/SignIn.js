import React, { Component } from 'react';


class SignIn extends Component {
    render() {
        console.log(this);
        return (
            <dialog className="mdl-dialog" id="signin">
                <h4 className="mdl-dialog__title">Se connecter</h4>
                <div className="mdl-dialog__content">
                    <form action="#">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="email" id="sign_in_email"/>
                            <label className="mdl-textfield__label" htmlFor="sign_in_email">Email</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="password" id="sign_in_password"/>
                            <label className="mdl-textfield__label" htmlFor="sign_in_password">Mot de passe</label>
                        </div>
                    </form>
                </div>
                <div className="mdl-dialog__actions">
                    <button type="button" className="mdl-button" onClick={() => this.props.actions.login()}>Envoyer</button>
                    <button type="button" className="mdl-button close">Fermer</button>
                </div>
            </dialog>
        )
    }

}

export default SignIn;




