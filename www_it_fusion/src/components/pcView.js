import React from 'react';

class pcView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [this.combos()]
        }
    }
    
    guardar(e) {
        e.preventDefault();
        const ubicacion = this.refs.ubicacion.value;
        const persona = this.refs.persona.value;
        this.props.addPc(ubicacion, persona);
    }

    agregarInline(e) {
        e.preventDefault();
        var rowsInmutable = this.state.rows;
        rowsInmutable.push(this.combos());

        this.setState({
          rows: rowsInmutable
        });

        
    }

    combos() {
        return (
            <select>
                {
                    this.props.hardware.items.map(function(hardware, index){
                        return <option key={index} value={hardware.id}>{hardware.tipo_hardware_nombre} {hardware.nombre}</option>
                    })
                }
            </select>
        )
    }

    render() {
        var rows = [];

        return(
            <div>
                <h2>PC</h2>
                <form onSubmit={ (e) => this.guardar(e) }>
                    <label>Ubicación: </label>
                    <select ref="ubicacion">
                    {
                        this.props.ubicacion.items.map(function(ubicacion, index){
                            return <option key={index} value={ubicacion.id}>{ubicacion.nombre}</option>
                        })
                    }
                    </select>
                    <label>Persona: </label>
                    <select ref="persona">
                    {
                        this.props.persona.items.map(function(persona, index){
                            return <option key={index} value={persona.id}>{persona.nombre}</option>
                        })
                    }
                    </select>
                    <h4>Hardware</h4>
                    <button type="button" onClick={ (e) => this.agregarInline(e) }>+</button>
                    {this.state.rows}
                    <input type="submit" value="Guardar" />
                </form>

            </div>
        )
    }
}

export default pcView;