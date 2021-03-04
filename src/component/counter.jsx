import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: this.props.counter.value,
        };
        this.formatCount=this.formatCount.bind(this);
        this.getBadgeClass=this.getBadgeClass.bind(this);
        this.handleIncrement=this.handleIncrement.bind(this);
    }

    handleIncrement(product=1){
        console.log(product);
        this.setState({
            count: this.state.count + 1
        });
    };

    render() { 
        return ( 
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button  onClick={ () => this.handleIncrement(this.product) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <br />
            </div>
         );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state
        return count === 0 ? "Zero" : count;
    } 
};
 
export default Counter;