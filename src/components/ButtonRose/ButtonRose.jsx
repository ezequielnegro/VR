const ButtonRose = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button"
}) => {
  return (
    <button
      type={type}
      className= {`bg-pink-300  uppercase font-normal hover:font-semibold my-4 rounded shadow-lg shadow-pink-500 ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
export default ButtonRose
