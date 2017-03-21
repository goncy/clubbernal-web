import React from 'react'
import {Link} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

import './Home.css'

const images = [
  {
    original: 'https://scontent-gru2-1.xx.fbcdn.net/v/t31.0-8/16402775_1352422904816950_6765133457965009813_o.jpg?oh=425febedb32ff2451fd8592b01a29348&oe=595AD6D3',
    thumbnail: 'https://scontent-gru2-1.xx.fbcdn.net/v/t31.0-8/16402775_1352422904816950_6765133457965009813_o.jpg?oh=425febedb32ff2451fd8592b01a29348&oe=595AD6D3'
  },
  {
    original: 'https://fb-s-d-a.akamaihd.net/h-ak-xla1/v/t1.0-9/12347947_1028633040529273_5416443376694321653_n.jpg?oh=94cdf8957b88d5f540abfca14bb68b56&oe=596CD3CB&__gda__=1498904594_a0871115e4cca6f35c922ec358b3a23c',
    thumbnail: 'https://fb-s-d-a.akamaihd.net/h-ak-xla1/v/t1.0-9/12347947_1028633040529273_5416443376694321653_n.jpg?oh=94cdf8957b88d5f540abfca14bb68b56&oe=596CD3CB&__gda__=1498904594_a0871115e4cca6f35c922ec358b3a23c'
  },
  {
    original: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/12313700_1022978377761406_3000394968014256743_n.jpg?oh=789dfe441ddad598b87ff5a2962391f8&oe=596E23AE',
    thumbnail: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/12313700_1022978377761406_3000394968014256743_n.jpg?oh=789dfe441ddad598b87ff5a2962391f8&oe=596E23AE'
  }
]

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
              items={images}
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
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FClubBernal&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
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
