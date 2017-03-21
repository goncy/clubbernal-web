import React from 'react'

import './ContactInformation.css'

const ContactInformation = () => (
  <div className="ContactInformation animated fadeIn">
    <div className='content is-medium'>
      <h1 className='title'>Información de contacto</h1>
      <hr/>
      <div className="row">
        <iframe src="https://www.google.com/maps/d/embed?mid=1XLce6hj21_FkNmW5kUtu4h0wT9A" width="100%" height="400px"></iframe>
      </div>
      <div className="row">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <div className="heading">
                <span className="icon">
                  <i className="fa fa-phone"></i>
                </span>
                SEDE
              </div>
              <div className="title">
                4444-4444
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <div className="heading">
                <span className="icon">
                  <i className="fa fa-phone"></i>
                </span>
                CAMPO DE DEPORTES
              </div>
              <div className="title">
                4444-4444
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <div className="heading">
                <span className="icon">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>
                  SEDE
                </span>
              </div>
              <div className="title">
                <span>
                  Labarden 527, Bernal Este
                </span>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <div className="heading">
                <span className="icon">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>
                  CAMPO DE DEPORTES
                </span>
              </div>
              <div className="title">
                <span>
                  Caseros 111, Bernal Este
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <div className="heading">
                <span className="icon">
                  <i className="fa fa-envelope"></i>
                </span>
                <span style={{marginLeft: 5}}>
                  INFORMACION
                </span>
              </div>
              <div className="title">
                <span>
                  info@clubbernal.com.ar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactInformation
