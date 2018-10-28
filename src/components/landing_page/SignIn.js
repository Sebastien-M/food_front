import React, {Component} from 'react';
import LogOut from "./LogOut";


class SignIn extends Component {

    render_form() {
        let loading_form =
            <div>
                <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"/>
            </div>;

        let not_connected_form =
            <form action="#">
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="email" id="sign_in_email"/>
                    <label className="mdl-textfield__label" htmlFor="sign_in_email">Email</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="password" id="sign_in_password"/>
                    <label className="mdl-textfield__label" htmlFor="sign_in_password">Mot de passe</label>
                </div>
            </form>;

        if (this.props.is_connected) {
            return <LogOut {...this.props}/>
        }
        else if (this.props.loading) {
            return loading_form
        }
        else {
            return not_connected_form
        }

    }

    render_connection_form() {
        return (
            <dialog className="mdl-dialog" id="signin">
                <h4 className="mdl-dialog__title">Se connecter</h4>
                <div className="mdl-dialog__content">
                    {this.render_form()}
                </div>
                <div className="mdl-dialog__actions">
                    <button type="button" className="mdl-button close"
                            onClick={() => {
                                this.props.actions.login(
                                    document.querySelector('#sign_in_email').value,
                                    document.querySelector('#sign_in_password').value)
                            }}>Envoyer
                    </button>
                    <button type="button" className="mdl-button signin_close">Fermer</button>
                </div>
            </dialog>
        )
    }

    render() {
        return (
            this.render_connection_form()
        )
    }

}

export default SignIn;




