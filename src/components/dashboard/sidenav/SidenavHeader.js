import React, {Component} from "react";

class SidenavHeader extends Component {
    render() {
        return (
            <header className="demo-drawer-header">
                <i className="material-icons">account_circle</i>
                <div className="demo-avatar-dropdown">
                    <span>{this.props.first_name} {this.props.last_name}</span>
                    <div className="mdl-layout-spacer"/>
                    <button id="accbtn"
                            className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                        <i className="material-icons" role="presentation">arrow_drop_down</i>
                        <span className="visuallyhidden">Accounts</span>
                    </button>
                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
                        <li className="mdl-menu__item">hello@example.com</li>
                        <li className="mdl-menu__item">info@example.com</li>
                        <li className="mdl-menu__item"><i className="material-icons">add</i>Add another
                            account...
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default SidenavHeader