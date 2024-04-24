import PropTypes from "prop-types"
export function Button(props) {
  return <button type="submit" onClick={props.onClick}>{props.label}</button>
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}