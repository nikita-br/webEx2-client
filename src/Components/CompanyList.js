import React, {Component} from 'react';
//import PropTypes from 'prop-types';

class Catigories extends Component {

    constructor(props){
        super(props);
        this.state = {
            catigories: []
        }
    }

    componentWillMount(){
        fetch('http://rocky-chamber-96945.herokuapp.com/company')
            .then(res => res.json())
            .then(data => this.setState({catigories: data}));
    }
    render() {

        const  catigoriesItems = this.state.catigories.map(post => (
            <div key={post._id}>
                <h3>name:{post.name}</h3>
                <h3>adress</h3>
                <ul>
                    <li> street:{post.address.street}</li>
                    <li> city:{post.address.city} </li>
                    <li> state:{post.address.state} </li>
                    <li>zip:{post.address.zip} </li>
                </ul>
                <h3>category:{post.category}</h3>



            </div>
        ));
        return (
            <div>
                <h1>Companies</h1>
                {catigoriesItems}
            </div>
        );
    }
}

export default Catigories;
