import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tipoHardware from '../actions/tipoHardwareActions';
import * as loginActions from '../actions/loginActions';
import * as hardwareActions from '../actions/HardwareActions';
import * as ubicacionActions from '../actions/ubicacionActions';
import App from './App';

function mapStateToProps(state) {
    return {
        user: state.user,
        tipoHardware: state.tipoHardware,
        hardware: state.hardware,
        ubicacion: state.ubicacion
    }
    
}

const acciones = Object.assign({}, tipoHardware, {
        ...loginActions,
        ...hardwareActions,
        ...ubicacionActions
      })

function mapDispatchToProps(dispatch) {
    return bindActionCreators(acciones, dispatch);
}

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnect;
