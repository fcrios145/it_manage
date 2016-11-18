import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tipoHardware from '../actions/tipoHardwareActions';
import * as loginActions from '../actions/loginActions';
import * as hardwareActions from '../actions/HardwareActions';
import App from './App';

function mapStateToProps(state) {
    return {
        user: state.user,
        tipoHardware: state.tipoHardware,
        hardware: state.hardware
    }
    
}

const acciones = Object.assign({}, tipoHardware, {
        ...loginActions,
        ...hardwareActions
      })

function mapDispatchToProps(dispatch) {
    return bindActionCreators(acciones, dispatch);
}

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnect;
