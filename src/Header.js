import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AddCategory from "./Components/AddCategory";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Get all Companies
                </NavLink>
                <NavLink to="/catigories" activeStyle={this.active}>
                    Get All Catigories
                </NavLink>
                <NavLink to="/add_category" activeStyle={this.active}>
                    Add New Category
                </NavLink>
            </div>
);}}
export default Header;