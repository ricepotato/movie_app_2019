import React from 'react';
import PropTypes from "prop-types";

function Food({name, image, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={image} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {id:1, name:"김치", rating:2, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fohyena.files.wordpress.com%2F2015%2F02%2Fec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png&f=1&nofb=1"},
  {id:2, name:"삼겹살", rating:1, image:"https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"},
];

function App() {
  return (
    <div className="App">
      <h1>Hello React !</h1>
      {foodILike.map(dish => <Food key={dish.id} rating={dish.rating} name={dish.name} image={dish.image} />)}
    </div>
  );
}

export default App;
