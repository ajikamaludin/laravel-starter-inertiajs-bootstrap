import React from 'react'
import { Head } from '@inertiajs/inertia-react'

import Authenticated from '@/Layouts/Authenticated'

export default function Dashboard(props) {
  return (
      <Authenticated auth={props.auth}>
          <Head title="Dashboard - Admin" />
          <div>Hai you are login</div>
      </Authenticated>
  )
}