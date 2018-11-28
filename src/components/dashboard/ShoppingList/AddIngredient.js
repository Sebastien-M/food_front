import React, {Component} from "react";

class AddIngredient extends Component {
    render() {
        return (
            <main className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-grid demo-content">
                    <div className="demo-card-wide mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                        <div className="mdl-card__title mdl-cell mdl-cell--12-col">
                            <h2 className="mdl-card__title-text">Ajouter un ingrédient</h2>
                            <div className="mdl-layout-spacer"/>
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <div className="mdl-grid">

                                <form>
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" type="text" id="sample3"/>
                                            <label className="mdl-textfield__label" htmlFor="sample3">Text...</label>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default AddIngredient;