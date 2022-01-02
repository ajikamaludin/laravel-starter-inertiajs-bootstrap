import React, { useState, useEffect } from 'react'
import Guest from '@/Layouts/Guest'

export default function Welcome() {
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
          <div className="absolute-center">
            <h1 className="font-bold" onClick={toggle}>
                {title}
            </h1>
          </div>
      </Guest>
  )
}