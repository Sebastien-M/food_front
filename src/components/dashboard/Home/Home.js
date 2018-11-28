import React, {Component} from "react";

class Home extends Component {
    componentWillMount() {
        this.props.actions.recipe.getTodaysRecipe(this.props.client)
    }

    render_todays_recipe() {
        if (this.props.todays_recipe[0].recipe.name) {
            return (
                <div className="mdl-card__actions mdl-card--border">
                    <div className="center">
                        {/*<h4>{this.props.todays_recipe['name']}</h4>*/}

                        <div className="demo-card-event mdl-card mdl-shadow--2dp">
                            <div className="mdl-card__title mdl-card--expand">
                                <h4>{this.props.todays_recipe[0].recipe.name}</h4>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                   onClick={() => this.props.actions.account.change_tab('Cook')}>
                                    Cuisiner!
                                </a>
                                <div className="mdl-layout-spacer"/>
                                <i className="material-icons">kitchen</i>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="mdl-card__actions mdl-card--border">
                    <div className="center">
                        {/*<h4>{this.props.todays_recipe['name']}</h4>*/}

                        <div className="demo-card-event mdl-card mdl-shadow--2dp">
                            <div className="mdl-card__title mdl-card--expand">
                                <h5>Définissez vôtre menu dans l'onglet " Menu de la semaine"</h5>
                            </div>
                            {/*<div className="mdl-card__actions mdl-card--border">*/}
                                {/*<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"*/}
                                   {/*onClick={() => this.props.actions.account.change_tab('Cook')}>*/}
                                    {/*Cuisiner!*/}
                                {/*</a>*/}
                                {/*<div className="mdl-layout-spacer"/>*/}
                                {/*<i className="material-icons">kitchen</i>*/}
                            {/*</div>*/}
                        </div>

                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            <main className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-grid demo-content">
                    <div className="demo-card-wide mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                        <div className="mdl-card__title mdl-cell mdl-cell--12-col mdl-grid text_center">
                            <h2 className="mdl-card__title-text">Recette du jour</h2>
                        </div>
                        {this.render_todays_recipe()}
                    </div>
                </div>


            </main>
        )
    }
}

export default Home
