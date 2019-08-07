import React from 'react';



const Recipe = ({title,calories,image}) => {
    
    var styles = {
        backgroundImage: 'url('+image+')'
    }
    
    return(
        <div className="recipe-listing">
            <div className="imagebox" style={styles}></div>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
        </div>
    );
}
export default Recipe;