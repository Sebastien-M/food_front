import React, {Component} from "react";

class Cook extends Component {
    componentWillMount() {
        this.props.actions.recipe.getTodaysRecipe(this.props.client)
    }

    renderIngredients(recipe_ingredients) {
        return Object.keys(recipe_ingredients).map(function (key) {
            return <li className="mdl-list__item" key={key}>
                {
                    (recipe_ingredients[key].quantity) ? recipe_ingredients[key].quantity + recipe_ingredients[key].ingredient.name : recipe_ingredients[key].ingredient.name
                }
            </li>
        });
    }

    renderSteps(steps) {
        let splitted_steps = steps.split(';');
        return splitted_steps.map(function (name, index) {
            return <p key={index}>{name}</p>
        });
    }

    render() {
        return (
            <div className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid"
                     style={{color: "#757575"}}>
                    <div className="mdl-layout-spacer"/>
                    <div>
                        <h3 className="mdl-typography--text-center">{this.props.todays_recipe[0].recipe.name}</h3>
                    </div>
                    <div className="mdl-layout-spacer"/>
                    <div className="mdl-card__actions mdl-card--border">
                        <br/><br/>
                        <div className="mdl-grid">

                            <div className="mdl-cell mdl-cell--6-col">
                                <div className="mdl-cell mdl-cell--12-col">
                                    <div className="img_container">
                                        <img src="/dish_picture.jpeg" alt="dish" className="dish_picture"/>
                                    </div>
                                </div>
                            </div>

                            <div className="mdl-cell mdl-cell--6-col">
                                <div className="mdl-cell mdl-cell--12-col">
                                    <h5>Ingrédients</h5>
                                    <ul className="mdl-list">
                                        {this.renderIngredients(this.props.todays_recipe)}
                                    </ul>
                                </div>
                            </div>

                            <div className="mdl-cell mdl-cell--12-col">
                                <div className="mdl-cell mdl-cell--12-col">
                                    <h5>Préparation</h5>
                                    <div className="">
                                        {this.renderSteps(this.props.todays_recipe[0].recipe.steps)}
                                    </div>
                                </div>
                            </div>

                            <div className="mdl-cell mdl-cell--10-col"/>
                            <div className="mdl-cell mdl-cell--2-col">
                                <div className="mdl-cell mdl-cell--12-col">
                                    <button
                                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                        onClick={() => this.props.actions.account.change_tab('Home')}>Retour
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Cook
