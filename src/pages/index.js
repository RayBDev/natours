import React from 'react'

import Aux from '../components/hoc/Aux/Aux'
import Header from '../components/Sections/Header/Header'
import About from '../components/Sections/About/About'
import Features from '../components/Sections/Features/Features'

const IndexPage = () => (
  <Aux>
    <Header />
    <main>
      <About />
      <Features />
    </main>
    {/* <section>
      <div className="row">
        <div className="col-1-of-2">
          Col 1 of 2
        </div>
        <div className="col-1-of-2">
          Col 1 of 2
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-2-of-3">
          Col 2 of 3
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-2-of-4">
          Col 2 of 4
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-3-of-4">
          Col 3 of 4
        </div>
      </div>      
    </section> */}
  </Aux>
)

export default IndexPage
