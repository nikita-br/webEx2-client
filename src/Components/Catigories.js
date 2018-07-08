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
        fetch('http://rocky-chamber-96945.herokuapp.com/category')
            .then(res => res.json())
            .then(data => this.setState({catigories: data}));
    }
    render() {

        const  catigoriesItems = this.state.catigories.map(post => (
            <div key={post._id}>
                <h3>{post.name}</h3>
            </div>
        ));
        return (
            <div>
                <h1>catigories</h1>
                {catigoriesItems}
            </div>
        );
    }
}

export default Catigories;
