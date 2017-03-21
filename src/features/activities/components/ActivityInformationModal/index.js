import React from 'react'

import CategoryInformation from '../CategoryInformation'

import './ActivityInformationModal.css'

const ActivityInformationModal = ({close, information}) => (
  <div className='ActivityInformationModal modal is-active'>
    <div
      className="modal-background"
      onClick={() => close()}
    >
    </div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">
          {information.name}
        </p>
        <button
          onClick={() => close()}
          className="delete"
        >
        </button>
      </header>
      <section className="modal-card-body">
        <div className="content">
          <CategoryInformation category={information.category} />
          <hr/>
          <h3>Dias y horarios</h3>
          <div className="notification">
            {information.schedule}
          </div>
          <h3>Precios</h3>
          <div className="notification">
            {information.price}
          </div>
        </div>
      </section>
      <footer className="modal-card-foot">
        <a
          className="button"
          onClick={() => close()}
        >
          Cerrar
        </a>
        <a className="button is-primary">Contactar</a>
      </footer>
    </div>
  </div>
)

export default ActivityInformationModal
