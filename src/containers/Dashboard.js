import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as account_actions from '../actions/accountActions';
import * as recipe_actions from '../actions/recipeActions'
import Dashboard from "../components/dashboard/Dashboard";

const mapStateToProps = state => {
    return {
        username: localStorage.getItem('username'),
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        email: localStorage.getItem('email'),
        client: state.account.client,
        current_tab: state.account.current_tab,
        todays_recipe: state.recipe.todays_recipe,
        week_menu: state.recipe.week_menu,
        recipe_suggestion: state.recipe.recipe_suggestion,
        chosen_day: state.recipe.chosen_day,
        shopping_list:state.recipe.shopping_list,
    }
};

function mapDispatchToProps(dispatch){
    return{
        actions:{
            account: bindActionCreators(account_actions, dispatch),
            recipe: bindActionCreators(recipe_actions, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
