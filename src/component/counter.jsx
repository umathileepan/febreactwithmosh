import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            imageUrl: "https://picsum.photos/200",
            tags: ['tag1','tag2','tag3']
        };
        this.formatCount=this.formatCount.bind(this);
        this.getBadgeClass=this.getBadgeClass.bind(this);
    }

    render() { 
        return ( 
            <div>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <br />
                <img src={this.state.imageUrl} alt=""/>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
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
}
 
export default Counter;