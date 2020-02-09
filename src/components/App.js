import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import RecipeList from "./RecipeList";
import RecipeInfo from "./RecipeInfo";


const App = props => {


    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={RecipeList}/>
                    <Route path='/recipe/:id' exact component={RecipeInfo}/>
                </div>
            </BrowserRouter>
        </div>

    );

};

export default App