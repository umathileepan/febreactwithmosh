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
        }
    }

    render() {
        return(
            <div>
                {this.state.counters.map(counter => (<Counter key={counter.id} value={counter.value} selected id={counter.id}>
                </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;