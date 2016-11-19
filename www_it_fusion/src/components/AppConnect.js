import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tipoHardware from '../actions/tipoHardwareActions';
import * as loginActions from '../actions/loginActions';
import * as hardwareActions from '../actions/HardwareActions';
import * as ubicacionActions from '../actions/ubicacionActions';
import * as personaActions from '../actions/personaActions';
import * as pcActions from '../actions/pcActions';
import App from './App';

function mapStateToProps(state) {
    return {
        user: state.user,
        tipoHardware: state.tipoHardware,
        hardware: state.hardware,
        ubicacion: state.ubicacion,
        persona: state.persona,
        pc: state.pc
    }
    
}

const acciones = Object.assign({}, tipoHardware, {
        ...loginActions,
        ...hardwareActions,
        ...ubicacionActions,
        ...personaActions,
        ...personaActions,
        ...pcActions
      })

function mapDispatchToProps(dispatch) {
    return bindActionCreators(acciones, dispatch);
}

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnect;
