import React, {Component} from "react";


class Header extends Component {

    render() {
        return (
            <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">FOOD</span>
                    <div className="mdl-layout-spacer"/>
                    {/*<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">*/}
                    {/*<label className="mdl-button mdl-js-button mdl-button--icon" for="search">*/}
                    {/*<i className="material-icons">search</i>*/}
                    {/*</label>*/}
                    {/*<div className="mdl-textfield__expandable-holder">*/}
                    {/*<input className="mdl-textfield__input" type="text" id="search"/>*/}
                    {/*<label className="mdl-textfield__label" for="search">Enter your query...</label>*/}

                    {/*</div>*/}
                    {/*</div>*/}
                    {/*<button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">*/}
                        {/*<i className="material-icons">more_vert</i>*/}
                    {/*</button>*/}
                    {/*<ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">*/}
                        {/*<li className="mdl-menu__item">About</li>*/}
                        {/*<li className="mdl-menu__item">Contact</li>*/}
                        {/*<li className="mdl-menu__item">Legal information</li>*/}
                    {/*</ul>*/}
                </div>
            </header>
        )
    }
}

export default Header
