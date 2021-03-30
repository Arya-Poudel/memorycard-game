import React from 'react';
import Card from './Card'
import book1 from '../images/1984.jpg';
import book2 from '../images/AThousandSplendidSuns.jpg';
import book3 from '../images/BraveNewWorld.jpg';
import book4 from '../images/Fahrenheit451.jpg';
import book5 from '../images/FlowersForAlgernon.jpg';
import book6 from '../images/LifeOfPi.jpg';
import book7 from '../images/LittleWomen.jpg';
import book8 from '../images/TheBookThief.jpg';
import book9 from '../images/TheCatcherInTheRye.jpg';
import book10 from '../images/TheDiaryOfAYoungGirl.jpeg';
import book11 from '../images/TheHitchhikersGuideToTheGalaxy.jpg';
import book12 from '../images/ToKillAMockingbird.jpg';

const CardContainer = () => {

  let books = [
  {
  	src: book1,
  	title: '1984',
  },
  {
  	src: book2,
  	title: 'A Thousand Splendid Suns',
  },
  {
  	src: book3,
  	title: 'Brave New World',
  },
  {
  	src: book4,
  	title: 'Fahrenheit 451',
  },
  {
  	src: book5,
  	title: 'Flowers For Algernon',
  },
  {
  	src: book6,
  	title: 'Life Of Pi',
  },
  {
  	src: book7,
  	title: 'Little Women',
  },
  {
  	src: book8,
  	title: 'The Book Thief',
  },
  {
  	src: book9,
  	title: 'The Catcher In The Rye',
  },
  {
  	src: book10,
  	title: 'The Diary Of A Young Girl',
  },
  {
  	src: book11,
  	title: 'Hitchhikers Guide To The Galaxy',
  },
  {
  	src: book12,
  	title: 'To Kill A Mockingbird',
  },
 ]

  return (
      <Card card={books} />
  );
}

export default CardContainer;