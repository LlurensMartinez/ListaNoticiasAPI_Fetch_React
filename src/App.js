import React, { Component } from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'


class App extends Component {
  state = { 
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=830ad97609074dd8abefac005c45e85f`;

    const respuesta = await fetch(url)
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
  }


  render() {
    return(
      <>
        <Header 
            titulo= 'Noticias React API'
        />

        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias 
            noticias={this.state.noticias}
          />

        </div>
      </>
    )
  }
}

export default App;
