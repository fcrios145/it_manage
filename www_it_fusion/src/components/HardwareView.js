import React from 'react';

class HardwareView extends React.Component {
	
	listar(e) {
		e.preventDefault();
		this.props.fetchardware();
	}

	guardar(e) {
		e.preventDefault();
		const nombre = this.refs.nombre.value;
		const descripcion = this.refs.descripcion.value;
		const tipo_hardware = this.refs.tipo_hardware.value;
		this.props.addHardware(nombre, descripcion, tipo_hardware);
	}

	render() {
		return(
			<div>
				<h2>Hardware</h2>
				<button onClick={ (e) => this.listar(e) }>Listar hardware</button>
				<form onSubmit={ (e) => this.guardar(e) }>
					<input ref="nombre" type="text" placeholder="Nombre" />
					<input ref="descripcion" type="text" placeholder="Descripcion" />
					<select ref="tipo_hardware">
						{
	                        this.props.tipoHardware.items.map(function(tipoHardware, index) {
	                            return <option key={ index } value={ tipoHardware.id }>{ tipoHardware.nombre }</option>
	                        })
	                    }
						
					</select>
					<input type="submit" value="Guardar"/>
				</form>
                <ul>
                    {
                            this.props.hardware.items.map(function(hardware, index) {
                                return <li key={ index } >{ hardware.tipo_hardware_nombre } - { hardware.nombre }</li>
                            })
                    }
                </ul>
			</div>
		)
	}
}

export default HardwareView;