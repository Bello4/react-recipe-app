import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './component/Recipe';
import Particles from 'react-particles-js';
import img from './img/chef1.png';
import cook from './img/chef-master.png';
import './component/Search.css'




function AppFunction() {
  const APP_ID = "157cade0";
   const KEY = "4380a0ebf81b44b47ab03020fa5bc6c0";	

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
 
  useEffect(() => {
  getData();
  }, [query]);

 

const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
}


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

 

  const particlesOptions = {
    particles: {
     number: {
       value: 106,
       density: {
         enable: true,
         value_area: 800
       }
     }
    }
  }

  return(
    <div >
      <div className="header">
      <Particles className="particles"
        params={particlesOptions}
        />
        <div className="nav">
        <div className="top-bar">
            <img src={img} alt='logo' />
            <h1>My Grocery List</h1>
        </div>
            <div>
              
               <form onSubmit={getSearch} >
                  <input placeholder="Search over 1000 Foriegn Recipes" value={search} onChange={updateSearch} className="search__field" type="text" />
                  <button className="search__btn" type="submit">Search</button>
                </form>
              
            </div>
        </div>

        { query === '' ? <div className="form-div">
                  <div>
                <h1 className="form-header">Be Your Chef, Save Your Health.</h1>
                  <p>
                  Web App to search over 1000 food recipe and instruction on how to cook.
                  </p>
                  <p>
                    copyright © by Oladepo ahmed bello.
                  </p>
              </div>
              <img src={cook} alt="icon"/>
              
        </div> :
        <div className='row'>
              {recipes.map(recipe => (
                  <Recipe  key={recipe.recipe.label}
                   name={recipe.recipe.label} 
                   publisher={recipe.recipe.source} 
                   img={recipe.recipe.image} 
                   calories={recipe.recipe.calories}
                   ingredients={recipe.recipe.ingredients}
                   url={recipe.recipe.url}
                   />
              ))};
               
        </div>}
      </div>
    </div>
      
  );
}

export default AppFunction;