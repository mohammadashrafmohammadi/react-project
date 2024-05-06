import { Fragment } from 'react'
import propTypes from "prop-types"

export function AuthLayout({children}) {
  return (
    <Fragment>
    <h1 className='font-bold text-2xl'>Auth Layout</h1>
    {children}
    <h1 className='font-bold text-2xl'>End Auth Layout</h1>
    </Fragment>
  )
}

AuthLayout.propTypes = {
    children: propTypes.any,
}

