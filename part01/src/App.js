import React from 'react';


const App = () => {

  const drinks = 'morning drinks'
  const firstDrink = 'water'
  const num1= 2
  const nextDrink = 'coffee with milk'
  const num2 = 3
  const lastDrink = 'green tea'
  const num3 = 1
  
  return (
    <div>
      <h1>My {drinks}</h1>
      <p>
        When i wake up i have {num1} glasses of {firstDrink}
        </p>
      <p>
        Then it's time for {nextDrink}, usually it's about {num2} cups a day
        </p>
      <p>
        Around noon i have {num3} cup of {lastDrink}
        </p>
      <p>Total is {num1 + num2 + num3} cups</p>
    </div>
  )
}

 


export default App;
