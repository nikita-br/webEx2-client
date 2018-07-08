import React, { Component } from 'react'
import PostForm from  './PostForm';
import Catigories from './Catigories';

class AddCategory extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PostForm />
                <Catigories />
            </div>
        )
    }
}
export default AddCategory