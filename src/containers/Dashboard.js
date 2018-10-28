import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/accountActions';
import Dashboard from "../components/dashboard/Dashboard";

const mapStateToProps = state => {
    return {
        username: state.account.username,
        first_name: state.account.first_name,
        last_name: state.account.last_name,
        email: state.account.email,
    }
};
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
