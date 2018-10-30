import React, {Component} from 'react';

class SidenavMenu extends Component {
    render() {
        return (
            <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
                <a className={"mdl-navigation__link " + (this.props.current_tab === 'Home' ? 'nav_active' : '')} onClick={() => this.props.actions.account.change_tab('Home')}>
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Accueil
                </a>

                <a className={"mdl-navigation__link " + (this.props.current_tab === 'WeekMenu' ? 'nav_active' : '')} onClick={() => this.props.actions.account.change_tab('WeekMenu')}>
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">calendar_today</i>Menu de la semaine
                </a>

                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Liste de courses
                </a>

                <a className="mdl-navigation__link" onClick={()=>this.props.actions.account.logout()}>
                    <i className="mdl-color-text--blue-grey-400 material-icons"
                       role="presentation">people</i>Se déconnecter</a>

                <div className="mdl-layout-spacer"/>
                <a className="mdl-navigation__link" href="">
                    <i className="mdl-color-text--blue-grey-400 material-icons"
                       role="presentation">help_outline</i><span className="visuallyhidden">Help</span>Aide</a>

            </nav>
        )
    }
}

export default SidenavMenu