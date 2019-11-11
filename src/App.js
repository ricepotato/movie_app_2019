import React from 'react';

function Food({fav}){
  console.log(fav);
  return <h2>I like {fav}</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Food fav="kimchi" />
      <Food fav="kimchi2" />
      <Food fav="kimchi3" />
      <Food fav="kimchi4" />
    </div>
  );
}

export default App;
