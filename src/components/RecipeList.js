import React from "react";
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'

import RecipeItem from "./RecipeItem";
import {searchTheTerm} from '../actions'
import "../app.css"

class RecipeList extends React.Component {

    
    componentDidMount() {

        // When the list component first mounts, We search for an empty string to display some content
        this.props.searchTheTerm("")

    }




    renderSearch = ({input}) => {

        return (  <input {...input} className="form-control mr-sm-2" type="search" placeholder="Search"
                         aria-label="Search"/>)

    };


    onSubmit = (formValues) => {
        this.props.searchTheTerm(formValues.term)
    };


    renderRecipeList = (recipes) => {

        if(recipes.length === 0 ){
            return <div> </div>
        }

        return recipes.map( recipe => {

                const {id, title, image} = recipe;

                return <RecipeItem key={id} id={id} title={title} image={image}/>

            }
        )

    };


    render() {


        return (

            <div style={{background: "#F9EDCC", minHeight: "100vh"}}>

                <div className="container" style={{padding: '20px', borderRadius: '20px'}}>

                    <nav className="navbar navbar-transparent m-y-2">
                        <a className="navbar-brand text-primary">Recipe</a>
                        <form className="form-inline" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Field name="term" component={this.renderSearch}/>
                        </form>
                    </nav>



                    <div className="card-columns">
                        {this.renderRecipeList(this.props.recipesList)}
                    </div>


                </div>
            </div>

        );
    };
}

const wrappedApp = reduxForm({form: "searchTerm"})(RecipeList);


const mapStateToProps = (state) => {

    console.log(state);
    const {recipesList} = state;
    return {recipesList}

};


export default connect(mapStateToProps, {searchTheTerm})(wrappedApp);