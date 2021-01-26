function Button(props) {
  return (
    <button type="button" className={props.class + ' btn'}
            onClick={props.onClick}
            disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default Button;
