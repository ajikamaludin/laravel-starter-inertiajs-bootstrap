import React, { useState } from 'react'
import { Head } from '@inertiajs/inertia-react'

export default function Authenticated({ auth, children }) {
  
  const [popup, setPopUp] = useState(false)
  const toggle = () => {
    setPopUp(!popup)
  }

  return (
      <div>
          <Head title="Dashboard" />
          <header className="p-3 mb-3 border-bottom">
              <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                      <div className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                          <span className="fs-4 px-4">App</span>
                      </div>

                      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                          <li>
                              <a
                                  href="#"
                                  className="nav-link px-2 link-secondary"
                              >
                                  Dashboard
                              </a>
                          </li>
                          <li>
                              <a
                                  href="#"
                                  className="nav-link px-2 link-secondary"
                              >
                                  Profile
                              </a>
                          </li>
                      </ul>

                      <div className="dropdown text-end">
                          <div
                              className="d-block link-dark text-decoration-none dropdown-toggle"
                              onClick={toggle}
                          >
                              Admin
                          </div>
                          <ul
                              className="dropdown-menu text-small"
                              style={popup ? { display: 'block' } : {}}
                          >
                              <li>
                                  <a className="dropdown-item" href="#">
                                      Profile
                                  </a>
                              </li>
                              <li>
                                  <hr className="dropdown-divider" />
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#">
                                      Sign out
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </header>
          <div className="container">{children}</div>
      </div>
  )
}