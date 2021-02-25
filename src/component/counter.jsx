import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            imageUrl: "https://picsum.photos/200"
        };
        this.formatCount=this.formatCount.bind(this);
    }

    render() { 
        return ( 
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <br />
                <img src={this.state.imageUrl} alt=""/>
            </div>
         );
    }

    formatCount() {
        const {count} = this.state
        return count === 0 ? "Zero" : count;
    } 
}
 
export default Counter;