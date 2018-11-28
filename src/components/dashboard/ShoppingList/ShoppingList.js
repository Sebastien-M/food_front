import React, {Component} from "react";
import Fab from '@material-ui/core/Fab'

class ShoppingList extends Component {

    componentWillMount() {
        this.props.actions.recipe.getShoppingList(this.props.client);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.props.actions.recipe.getShoppingList(this.props.client);
    }

    renderShoppingList() {
        let shopping_list = this.props.shopping_list;
        return Object.keys(shopping_list).map((key) => {
            return (
                <tr key={key}>
                    <td className="mdl-data-table__cell--non-numeric">
                        <div className="mdl-grid">

                            <div className="mdl-cell mdl-cell--11-col">
                                <p>{(shopping_list[key].quantity) ? shopping_list[key].quantity + shopping_list[key].ingredient : shopping_list[key].ingredient}</p>
                            </div>

                            <div className="mdl-cell mdl-cell--1-col">
                                {/*<button*/}
                                {/*className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"*/}
                                {/*id="edit"*/}
                                {/*onClick={() => this.props.actions.account.change_tab('EditIngredient')}>*/}
                                {/*<i className="material-icons">edit</i>*/}
                                {/*</button>*/}
                                <Fab color="primary"
                                     onClick={() => this.props.actions.recipe.removeShoppingListItem(this.props.client, shopping_list[key].id)}>
                                    <i className="material-icons">delete</i>
                                </Fab>
                            </div>

                        </div>
                    </td>
                </tr>
            )
        });
    }

    render() {
        return (
            <main className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-grid">
                    <div className="demo-card-wide mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                        <div className="mdl-card__title mdl-cell mdl-cell--12-col">
                            <h2 className="mdl-card__title-text">Liste de courses</h2>
                            <div className="mdl-layout-spacer"/>
                            <Fab color="primary"
                                 onClick={() => this.props.actions.recipe.initializeShoppingList(this.props.client)}
                                 size="small">
                                <i className="material-icons">refresh</i>
                            </Fab>
                            <Fab color="secondary"
                                 // onClick={() => this.props.actions.account.change_tab('AddIngredient')}
                                 size="small">
                                <i className="material-icons">add</i>
                            </Fab>

                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            {/*<div className="mdl-card__supporting-text text_center">*/}
                            <div className="mdl-cell--12">
                                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable">
                                    <thead>
                                    <tr>
                                        <th className="mdl-data-table__cell--non-numeric">Ingredients</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderShoppingList()}
                                    </tbody>
                                </table>
                            </div>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ShoppingList;
