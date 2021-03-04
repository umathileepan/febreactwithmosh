import React from 'react';
import Counter from '../component/counter.jsx';

class Counters extends React.Component{
    constructor(props){
        super(props);
        this.state= {
           counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
            ]
        };
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    render() {
        return(
            <div>
                {this.state.counters.map(counter => (<Counter key={counter.id} onDelete={this.handleDelete} counter={counter} /> ))}
            </div>
        );
    }
}

export default Counters;