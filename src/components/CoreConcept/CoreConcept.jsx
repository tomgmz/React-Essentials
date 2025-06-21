function CoreConcept({image, title, description}){
  return(
    <li>
      <img className="mx-auto" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept