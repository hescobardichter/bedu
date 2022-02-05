const HeroBox = (props) => {
  const { name,  heroe, img, color, children  } = props;
  return (
    <div className="cada-caja" style={{'background-color': color}}>
      <h2>{ name } y soy { heroe }</h2>
      <img src={img} alt="" />
      {children}
    </div>
  );
}

export default HeroBox;
