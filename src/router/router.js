import React from "react";
import { Route } from "react-router-dom";
import CompanyList from "../Components/CompanyList";
import Catigories from "../Components/Catigories";
import AddCategory from "../Components/AddCategory";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={CompanyList} />
            <Route  path="/catigories" component={Catigories} />
            <Route  path="/add_category" component={AddCategory} />
        </React.Fragment>
    );};

export default ReactRouter;
