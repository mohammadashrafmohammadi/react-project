import PropTypes from "prop-types"

export function Button({label, size, ...rest}) {
  return ( 
  <>
  {size === "xl" && (<button {...rest}>{label}</button>)}
  </>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "lg" , "xl"])
}