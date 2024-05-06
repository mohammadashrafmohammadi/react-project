import { Fragment } from "react";
import PropTypes from "prop-types";

export function Input({label, type, ...rest}) {
    
  return (
    <Fragment>
        {/* {label} */}
    <input  {...rest}/>
    </Fragment>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    
  }