const Boton = (props) => {
  return (
    <button className="contador" onClick={props.handleClick}>
       {props.text}
    </button>
  );
}

export default Boton;
