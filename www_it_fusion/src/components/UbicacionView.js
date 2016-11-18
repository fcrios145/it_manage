import React from 'react';

class UbicacionView extends React.Component {
    
    guardar(e) {
        e.preventDefault();
        const nombre = this.refs.nombre.value;
        this.props.addUbicacion(nombre);
        this.refs.nombre.value = "";
    }

    render() {
        return(
            <div>
                <h2>Ubicación</h2>
                <form onSubmit={ (e) => this.guardar(e) }>
                    <input ref="nombre" type="text" placeholder="Nombre" />
                    <input type="submit" value="Guardar" />
                </form>
                {/*ubicaciones comentario*/}
                <ul>
                {
                    this.props.ubicacion.items.map(function(ubicacion, index){
                        return <li key={index}>{ubicacion.nombre}</li>
                    })
                }
                </ul>

            </div>
        )
    }
}

export default UbicacionView;