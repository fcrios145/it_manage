import React from 'react';

class PersonaView extends React.Component {
    
    guardar(e) {
        e.preventDefault();
        const nombre = this.refs.nombre.value;
        const departamento = this.refs.departamento.value;
        this.props.addPersona(nombre, departamento);
        this.refs.nombre.value = "";
        this.refs.departamento.value = "";
    }

    render() {
        return(
            <div>
                <h2>Persona</h2>
                <form onSubmit={ (e) => this.guardar(e) }>
                    <input ref="nombre" type="text" placeholder="Nombre" />
                    <input ref="departamento" type="text" placeholder="Departamento" />
                    <input type="submit" value="Guardar" />
                </form>
                {/*Listado de personas*/}
                <ul>
                {
                    this.props.persona.items.map(function(persona, index){
                        return <li key={index}>{persona.nombre}</li>
                    })
                }
                </ul>

            </div>
        )
    }
}

export default PersonaView;