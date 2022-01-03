import React, { useState, useEffect } from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import Guest from '@/Layouts/Guest'

export default function Welcome(props) {
  const [title, setTitle] = useState('Welcome')
  const [isTrue, setIsTrue] = useState(false)

  const toggle = () => {
    setIsTrue(!isTrue)
  }

  useEffect(() => {
    setTitle(isTrue ? 'Clicked' : 'Welcome')
  }, [isTrue])

  return (
      <Guest>
        <Head title="Welcome"/>
          <div className="d-flex flex-row-reverse p-2">
              <div>
                  <Link
                      href={route('login')}
                      className="text-decoration-none text-reset"
                  >
                      Login
                  </Link>
              </div>
          </div>
          <div className="absolute-center">
              <h1 className="font-bold" onClick={toggle}>
                  {title}
              </h1>
          </div>
      </Guest>
  )
}