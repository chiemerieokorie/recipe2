import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import {getRecipeInfo} from "../actions"

class RecipeInfo extends React.Component {

    componentDidMount() {

        this.props.getRecipeInfo(this.id)
    }

    renderIngredientsList = ingredientsList => ingredientsList.map(ingredient => {

            const {name, originalString} = ingredient;

             return <tr> <td>{name}</td> <td>{originalString}</td></tr>

            });

    id = this.props.match.params.id;


    render() {


        if (!this.props.title) {

            return <div> </div>
        }

        const {image, title, sourceName, instructions, extendedIngredients} = this.props;
         console.log(this.renderIngredientsList(extendedIngredients));

        return (


                <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">

                            <h1><Link to="/" className="navbar-brand">Recipes </Link></h1>
                        </div>
                    </div>
                </nav>


                    <div className="media">
                        <img src={image} className="mr-3" alt={title}/>
                        <div className="media-body">
                            <h5 className="mt-0">{title}</h5>

                            Source: {sourceName}
                            <br/>
                            <br/>
                            <h6><strong>Instructions</strong></h6>
                            {instructions}


                        </div>


                    </div>

                    <table className="table table-borderless">
                        <thead className="thead-primary">
                        <tr>
                            <th scope="col">Ingredients</th>
                            <th scope="col">Amount</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.renderIngredientsList(extendedIngredients)}
                        </tbody>
                    </table>
                </div>


        );
    }
};

const mapStateToProps = (state, ownProps) => {

    const recipeId = ownProps.match.params.id;
    return state.recipes[recipeId]
};


export default connect(mapStateToProps, {getRecipeInfo})(RecipeInfo)