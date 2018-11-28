import React, {Component} from "react";

class WeekMenuChoice extends Component {

    componentWillMount() {
        this.props.actions.recipe.getRecipeSuggestion(this.props.client)
    }

    componentDidMount() {
        // this.props.actions.account.change_tab('WeekMenu')
    }

    render() {
        return (
            <main className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-grid demo-content">
                    <div className="demo-card-wide mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                        <div className="mdl-card__title mdl-cell mdl-cell--12-col mdl-grid text_center">
                            <h2 className="mdl-card__title-text">Menu de la semaine</h2>
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <div className="mdl-grid fixed-width space_between">


                                <div className="demo-card-event mdl-card mdl-shadow--2dp mdl-cell--12">
                                    <div className="mdl-card__title mdl-card--expand">
                                        <h4>{this.props.recipe_suggestion.name}</h4>
                                    </div>
                                    <div className="mdl-card__actions mdl-card--border">
                                        <button className="mdl-button mdl-js-button mdl-button--fab dislike"
                                                onClick={() => this.props.actions.recipe.getRecipeSuggestion(this.props.client)}>
                                            <i className="material-icons">thumb_down</i>
                                        </button>
                                        <button className="mdl-button mdl-js-button mdl-button--fab cancel"
                                                onClick={() => this.props.actions.account.change_tab('WeekMenu')}>
                                            <i className="material-icons">close</i>
                                        </button>
                                        <button className="mdl-button mdl-js-button mdl-button--fab like"
                                                onClick={() => {
                                                    this.props.actions.recipe.setDailyRecipe(this.props.client, this.props.email, this.props.recipe_suggestion.id, this.props.chosen_day);
                                                    setTimeout(() => {
                                                        this.props.actions.account.change_tab('WeekMenu')
                                                    }, 100)
                                                }}>
                                            <i className="material-icons">thumb_up</i>
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default WeekMenuChoice