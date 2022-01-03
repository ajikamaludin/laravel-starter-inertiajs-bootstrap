import React, { useState } from 'react'
import { Head, Link } from '@inertiajs/inertia-react'

export default function Authenticated({ auth, children }) {
  
  const [popup, setPopUp] = useState(false)
  const toggle = () => {
    setPopUp(!popup)
  }

  const [menu, setMenu] = useState(false)
  const menuToggle = () => {
    setMenu(!menu)
  }

  return (
      <div>
          <Head title="Dashboard" />
          <header className="mb-3 border-bottom">
              <div className="p-3 navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container">
                      <button
                          className="navbar-toggler"
                          type="button"
                          onClick={menuToggle}
                      >
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className={`collapse navbar-collapse ${menu && 'show'}`}>
                          <div className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                              <span className="fs-4 navbar-brand">App</span>
                          </div>
                          <ul className="navbar-nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                              <li>
                                  <a
                                      href="#"
                                      className="nav-link active px-2 link-secondary"
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
                      </div>

                      <div className="d-flex">
                          <div className="dropdown text-end">
                              <div
                                  className="d-block link-dark text-decoration-none dropdown-toggle"
                                  onClick={toggle}
                              >
                                  {auth.user.email}
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
                                      <Link
                                          className="dropdown-item"
                                          href={route('logout')}
                                          method="post"
                                          as="button"
                                      >
                                          Sign out
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
          <div className="container">{children}</div>
      </div>
  )
}