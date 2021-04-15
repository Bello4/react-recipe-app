import React from 'react';
//import App from './App'

import './Search.css'

function Recipe({ name, publisher, img, calories, veiw, ingredients, url }) {

 
  return(
    <div>
      
        <div className="wrapper" onDoubleClick={veiw} id={name} >
          <div className="recipe-img">
            <img src={img} alt='recipe-img' />
          </div>
          <div className="recipe-info">
          <h2>{name}</h2>
          <p>{publisher}</p>
          <p>Calories: {Math.round(calories)}</p>
          <ul>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
          </ul>
          <div className="btn-url"><a href={url}>How to Prepare</a></div>
          </div>
        </div>
       
    </div>
    
  )
}

export default Recipe;