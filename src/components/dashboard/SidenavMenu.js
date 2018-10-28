import React, {Component} from 'react';

class SidenavMenu extends Component {
    render() {
        return (
            <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
                <a className="mdl-navigation__link">
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home
                </a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons"
                       role="presentation">local_offer</i>Promos</a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons"
                       role="presentation">shopping_cart</i>Purchases</a>

                <a className="mdl-navigation__link" onClick={()=>this.props.actions.logout()}>
                    <i className="mdl-color-text--blue-grey-400 material-icons"
                       role="presentation">people</i>Se déconnecter</a>

                <div className="mdl-layout-spacer"/>
                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons"
                       role="presentation">help_outline</i><span className="visuallyhidden">Help</span></a>

            </nav>
        )
    }
}

export default SidenavMenu