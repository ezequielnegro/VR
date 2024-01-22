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
      className= {`bg-pink-300  uppercase text-lg font-normal hover:font-semibold h-12 my-8 rounded shadow-lg shadow-pink-500 ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
export default ButtonRose
