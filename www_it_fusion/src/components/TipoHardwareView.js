import React from 'react';

class TipoHardwareView extends React.Component {

    listarTipos(e) {
        e.preventDefault();
        this.props.fetchTipoHardware();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTipoHardware(this.refs.nombre.value);
    }

    render() {
        return(
            <div>
                <h2>Tipo de hardware</h2>
                <button type="button" onClick={ (e) => this.listarTipos(e) }>Listar tipos</button>
                <form onSubmit={ (e) => this.onSubmit(e) }>
                    <input ref="nombre" type="text" placeholder="Nombre" />
                    <input type="submit" value="Guardar" />
                </form>
                <ul>
                    {
                        this.props.tipoHardware.items.map(function(tipoHardware, index) {
                            return <li key={ index }>{tipoHardware.nombre}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TipoHardwareView;
