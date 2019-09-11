import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Formulario extends Component {

  state = {
    categoria : 'general'
  }

  // ponemos un callback en setState para que se ejecute al momento
  handleChange = (e) => {
      this.setState({
        categoria : e.target.value
      }, () => {
        // Pasarlo a la pagina principal
        this.props.consultarNoticias(this.state.categoria)
      });
  }

  render() {
    return (
      <div className="buscador row">
          
          <div className="tituloContenedor col s12 m8 offset-m2">
            
            <form>
              <h2>Encuentra Noticias Por Categoria</h2>

              <div className="input-field col s12 m8 offset-m2">
                <select 
                  onChange={this.handleChange}
                >
                  <option value="general">General</option>
                  <option value="business">Negocios</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="health">Salud</option>
                  <option value="science">Ciencia</option>
                  <option value="sports">Deportes</option>
                  <option value="technology">Tecnología</option>
                </select>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

Formulario.propTypes = {
  consultarNoticias : PropTypes.func.isRequired
}

export default Formulario;