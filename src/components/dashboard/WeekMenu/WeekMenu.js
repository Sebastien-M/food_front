import React, {Component} from "react";

class WeekMenu extends Component {
    render() {
        return (
            <main className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-grid demo-content">
                    <div className="demo-card-wide mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                        <div className="mdl-card__title mdl-cell mdl-cell--12-col mdl-grid text_center">
                            <h2 className="mdl-card__title-text">Menu de la semaine</h2>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default WeekMenu