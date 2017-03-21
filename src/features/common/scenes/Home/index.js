import React from 'react'
import {Link} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

import './Home.css'

import {SLIDER_IMAGES, FACEBOOK_IFRAME_URL} from './constants'

const Home = () => (
  <div className='Home animated fadeIn'>
    <div className="content is-medium">
      <div className="row">
        <div className="content">
          <h1>Bienvenido al Club Bernal</h1>
          <p>El <b>Club Atletico Bernal</b> es un club fundado en <b>1942</b>. Contamos con <Link to='/actividades'>pileta</Link>, <Link to='/actividades'>gimnasio</Link>, <Link to='/actividades'>cancha de basquet/futbol/volley</Link>, <Link to='/actividades'>6 canchas de tenis de polvo de ladrillo</Link>, <Link to='/actividades'>3 canchas de paddle</Link>, además de <Link to='/actividades'>varias actividades</Link> que se realizan en las instalaciones.</p>
          <hr/>
          <div className="row">
            <ImageGallery
              showPlayButton={false}
              items={SLIDER_IMAGES}
              slideInterval={2000}
            />
          </div>
          <hr/>
          <p>También contamos con varias actividades como:</p>
          <ul>
            <li>Rumba</li>
            <li>Gimnasia localizada</li>
            <li>Servicios de personal training</li>
            <li>Basquet categoria veteranos</li>
            <li>Clases de tenis</li>
            <li><Link to='/actividades'>Y muchas mas!</Link></li>
          </ul>
          <blockquote>¿Sos un/a profesional y querés dar tus actividades en el club?, <Link to='/contacto'>contactanos</Link>!</blockquote>
        </div>
      </div>
      <hr/>
      <div className="row has-text-centered">
        <div className="notification is-primary">
          <iframe
            src={FACEBOOK_IFRAME_URL}
            width="340"
            height="500"
            style={{border: 'none', overflow: 'hidden'}}
            scrolling="no"
            frameBorder="0"
            data-adapt-container-width="true"
            allowTransparency="true">
          </iframe>
        </div>
      </div>
    </div>
  </div>
)

export default Home
