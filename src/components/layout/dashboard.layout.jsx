import { Fragment } from "react"
import propTypes from "prop-types"

export function DashboardLayout({children}) {
  return (
    <Fragment>
     <h1 className='font-bold text-2xl'>Dashboard Layout</h1>
      {children}
     <h1 className='font-bold text-2xl'>End Dashboard Layout</h1>
    </Fragment>
 ) 
}

DashboardLayout.propTypes = {
    children: propTypes.any,
}