import React, {useState, useEffect} from 'react';
import Heading from './heading';

const Card = (props) => {

  const {card} = props;

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState(card);

  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    shuffleArray(card);
    setCards(card);
    // eslint-disable-next-line 
  },[score]);
  

  const handleGameLogic = (title) => {
  	  if (clickedCards.includes(title)) {
  	  		//gameover
          //alert
          alert(`Game Over! Score = ${score}`);
  	  		if (score > highScore) {setHighScore(score);}
  	  		setScore(0);
  	  		setClickedCards([]);
  	  } else {
  	  		//update score and cardlist
  	  		setScore((score) => score + 1)
  	  		if (score === 12) {

  	  		}
  	  		setClickedCards((card) => [...card, title])
  	  }
  };

  return (
  	<>
  	  <Heading score={score} highScore={highScore}/>
  	  <div className = "card-container">
	  	  {cards.map((card) => (
	  		<div className = "card" onClick={() => handleGameLogic(card.title)} key={card.title}>
	  			<img src={card.src} alt={card.title} />
	  			<p>{card.title}</p>
	  		</div>
      		))}
	   </div>
	</>
  );
}

export default Card;