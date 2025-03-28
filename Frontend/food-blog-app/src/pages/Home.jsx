import React from 'react'
import foodRecipe from "../assets/foodRecipe.png"
import RecipeItem from '../components/RecipeItem'

const Home = () => {
  return (
    <>
    <section className='home'>
        <div className='left'>
          <h1>Food Recipe</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, incidunt in ipsa sapiente optio obcaecati iure quisquam, sint at expedita libero placeat facilis modi ut ducimus sit dicta, soluta eaque.
          </h5>
          <button>Share your redipe</button>
        </div>
        <div className='right'>
          <img src={foodRecipe} width="320px" height="300px"></img>
        </div>
    </section>
    <div className='bg'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L30,53.3C60,75,120,117,180,128C240,139,300,117,360,133.3C420,149,480,203,540,197.3C600,192,660,128,720,138.7C780,149,840,235,900,234.7C960,235,1020,149,1080,96C1140,43,1200,21,1260,53.3C1320,85,1380,171,1410,213.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>

    <div className='recipe'>
      <RecipeItem/>
    </div>
    </>
  )
}

export default Home