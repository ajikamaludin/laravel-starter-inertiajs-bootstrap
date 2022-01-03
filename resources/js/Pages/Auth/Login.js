import React, { useEffect } from "react"
import { Head, useForm } from '@inertiajs/inertia-react'

import Guest from "@/Layouts/Guest"

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
      email: '',
      password: '',
  })

  useEffect(() => {
      return () => {
          reset('password')
      }
  }, [])

  const onHandleChange = (event) => {
      setData(event.target.name, event.target.value)
  }

  const submit = (e) => {
      e.preventDefault()

      post(route('login'))
  }
  return (
      <Guest>
          <Head title="Login" />
          <div className="row justify-content-center">
              <div className="col-md-7 col-lg-5" style={{ paddingTop: '5rem' }}>
                  <div className="card">
                      <div className="card-body">
                          <div className="wrap">
                              <div className="p-4 p-md-5">
                                  <div className="d-flex justify-content-center">
                                      <div className="wrap">
                                          <h3 className="mb-4">Sign In</h3>
                                      </div>
                                  </div>
                                  <form action="#" method="post">
                                      <div className="form-group mt-3 mb-3">
                                          <label
                                              className="form-control-placeholder"
                                              htmlFor="email"
                                          >
                                              Email
                                          </label>
                                          <input
                                              type="text"
                                              className={`form-control rounded ${errors.email && 'is-invalid'}`}
                                              placeholder="email"
                                              name="email"
                                              value={data.email}
                                              onChange={onHandleChange}
                                          />
                                          <div className="invalid-feedback">
                                              {errors.email}
                                          </div>
                                      </div>
                                      <div className="form-group mb-4">
                                          <label
                                              className="form-control-placeholder"
                                              htmlFor="password"
                                          >
                                              Password
                                          </label>
                                          <input
                                              id="password-field"
                                              type="password"
                                              className={`form-control rounded ${errors.email && 'is-invalid'}`}
                                              placeholder="password"
                                              name="password"
                                              value={data.password}
                                              onChange={onHandleChange}
                                          />
                                          <div className="invalid-feedback">
                                              {errors.password}
                                          </div>
                                      </div>
                                      <div className="form-group mb-3">
                                          <button
                                              className="form-control btn btn-primary rounded submit px-3"
                                              disabled={processing}
                                              onClick={submit}
                                          >
                                              Sign In
                                          </button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Guest>
  )
}