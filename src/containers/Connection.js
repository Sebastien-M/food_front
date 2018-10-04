import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/connectionActions';
import Connection from '../components/Connection'

const mapStateToProps = state => {
    return {
        // quotes: state.quotes.quotes,
        email: state.email,
        first_name: state.first_name,
        last_name: state.last_name,
        password: state.password,
        token: state.token,
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Connection)
