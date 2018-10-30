import React, {Component} from "react";

class Home extends Component {
    componentWillMount() {
        this.props.actions.recipe.getTodaysRecipe(this.props.client)
    }

    render() {
        return (
            <main className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-grid demo-content">
                    <div className="demo-card-wide mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                        <div className="mdl-card__title mdl-cell mdl-cell--12-col mdl-grid text_center">
                            <h2 className="mdl-card__title-text">Recette du jour</h2>
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <div className="mdl-card__supporting-text text_center">
                                <h4>{this.props.todays_recipe['name']}</h4>
                            </div>
                        </div>
                        {/*<div className="mdl-color--black">*/}
                        {/*<p>{this.props.todays_recipe['name']}</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </main>
        )
    }
}

export default Home
