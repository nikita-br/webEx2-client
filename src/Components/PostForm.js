import React, {Component} from 'react';
//import PropTypes from 'prop-types';


class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange (e){
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e){
        e.preventDefault();

        const post = {
            name: this.state.name
        }
        fetch('http://rocky-chamber-96945.herokuapp.com/category',{
            method: 'POST',
            headers: {
                'content-type': 'application/JSON'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    render() {

        return (
            <div>
                <h1>Add</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name:</label><br/>
                        <input type="text" name="name" onChange={this.onChange}
                               value={this.state.name}/>
                        <button type="submit">Add</button>
                    </div>
                    <br/>

                </form>
            </div>

        );
    }
}
export default PostForm;
