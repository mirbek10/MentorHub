import style from "./Button.module.scss";
function Button({title, onClick, disabled, size}) {
  return (
    <button className={`${style.button} ${style[size]}`} onClick={onClick} disabled={disabled}>
      {title}  
    </button>
  )
}

export default Button