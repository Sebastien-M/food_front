import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/connectionActions';
import App from "../components/App";

const mapStateToProps = state => {
    return {
        username: state.connection.username,
        password: state.connection.password,
        token: state.connection.token,
        is_connected: state.connection.is_connected,
        loading: state.connection.loading,
    }
};
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
