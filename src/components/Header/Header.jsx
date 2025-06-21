import '../Header/Header.css'
import reactImage from '../../assets/react-core-concepts.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomDescription(description){
  return Math.floor(Math.random() * (description + 1));
}

function Header(){
  const description = reactDescriptions[getRandomDescription(2)];
  
  return(
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

export default Header