import React from "react";
import {Link} from "react-router-dom";

const RecipeItem = (props) => {

    const {id, title, image} = props;
    const imageURL = `https://spoonacular.com/recipeImages/${image}`;
    return (

                <div className="card">
                    <Link to={`/recipe/${id}`}>
                    <img className="card-img-top" src={imageURL} alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title primary list-inline-item">{title}</h5>
                    </div>
                    </Link>
                </div>

    );
};

export default RecipeItem