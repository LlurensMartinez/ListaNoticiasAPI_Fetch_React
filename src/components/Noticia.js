import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({noticia}) =>  {

  // extraer los datos

  const { urlToImage, url, title, description, source } = noticia;

  const urlPorDefecto = 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjLwPfL_8jkAhWQz4UKHViQCbAQjRx6BAgBEAQ&url=https%3A%2F%2Fnoticiasaldiayalahora.co%2F&psig=AOvVaw0j1reeiZbAoGzGaOwuROHT&ust=1568299091026484 }';

  return(
    <div className="col s12 m6 l4">
        <div className="card">
            <div className="card-image">

              {urlToImage 
                ? 
                <img src={urlToImage} alt={title}/>
                :
                <img src={urlPorDefecto} alt={title}/>
              }
              
              <span className="card-title">{source.name}</span>
            </div>

            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>

            <div className="card-action">
              <a href={url} target="_blank"  rel="noopener noreferrer" className="waves-effect waves-light btn">
                  Ver Noticia Completa
              </a>
              
            </div>
        </div>
    </div>
  )}
  
  Noticia.propTypes = {
    noticia : PropTypes.object.isRequired
  }

  export default Noticia;