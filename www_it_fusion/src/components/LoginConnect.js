import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Login from './Login';

function mapStateToProps(state) {
    return {
        user: state.user
    }
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginConnect;
