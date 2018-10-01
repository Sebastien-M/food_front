import React, { Component } from 'react';


class SignUp extends Component {
    render() {
        return (
            <dialog className="mdl-dialog" id="signup">
                <h4 className="mdl-dialog__title">Créer un compte</h4>
                <div className="mdl-dialog__content">
                    <form action="#">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="firstname"/>
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
                    <button type="button" className="mdl-button">Envoyer</button>
                    <button type="button" className="mdl-button signup_close">Fermer</button>
                </div>
            </dialog>
        )
    }
}

export default SignUp;




