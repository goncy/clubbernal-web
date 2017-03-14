import React from 'react'

import './Home.css'

const Home = () => (
  <div className='Home'>
    <div className="content">
      <div className="columns">
        <div className="column has-text-centered">
          <div className="notification is-primary">
            <div className="content">
              <h1 className="title">
                <span className="icon is-medium">
                  <i className="fa fa-facebook-official"></i>
                </span>
                /ClubBernal
              </h1>
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
        <div className="column">
          <div className="notification">
            <p>Rest</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
