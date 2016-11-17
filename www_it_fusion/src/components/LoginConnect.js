import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import Login from './Login';

function mapStateToProps(state) {
    return {
        user: state.user
    }
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(loginActions, dispatch);
}

const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginConnect;
