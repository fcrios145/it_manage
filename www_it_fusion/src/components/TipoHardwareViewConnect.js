import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tipoHardwareActions from '../actions/tipoHardwareActions';
import TipoHardwareView from './TipoHardwareView';

function mapStateToProps(state) {
    return {
        tipoHardware: state.tipoHardware
    }
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tipoHardwareActions, dispatch);
}

const TipoHardwareViewConnect = connect(mapStateToProps, mapDispatchToProps)(TipoHardwareView);
export default TipoHardwareViewConnect;
