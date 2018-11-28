import React, {Component} from "react";

class WeekMenu extends Component {

    componentWillMount() {
        this.props.actions.recipe.getWeekMenu(this.props.client)
    }

    componentDidMount() {
        // this.displayWeekMenu(this.props.week_menu)
    }

    renderWeekMenu(week_menu) {
        // if (week_menu[0]) {
            return Object.entries(week_menu).map(([key, value]) => {
                return (
                    Object.entries(value).map(([key2, value2]) => {
                        let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
                        let day = days[new Date(value2.day).getDay()];
                        return (

                            <div className="demo-card-event mdl-card mdl-shadow--2dp mdl-cell--12" key={key2}>
                                <div className="mdl-card__title mdl-card--expand">
                                    <h4>
                                        {day} <br/><br/>
                                        {value2.recipe.name}
                                    </h4>
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <a className={"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"}
                                       onClick={() => {
                                           this.props.actions.account.change_tab('WeekMenuChoice');
                                           this.props.actions.recipe.setChosenDay(value2.day); }
                                       }>
                                        Modifier
                                    </a>
                                    <div className="mdl-layout-spacer"/>
                                    {/*<i className="material-icons">loop</i>*/}
                                </div>
                            </div>
                        )
                    })
                )
            })
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
                            <div className="mdl-grid fixed-width space_between" style={{color:"black"}}>
                                {this.renderWeekMenu(this.props.week_menu)}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default WeekMenu