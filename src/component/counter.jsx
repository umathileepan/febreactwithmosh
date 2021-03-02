import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: this.props.value,
            imageUrl: "https://picsum.photos/200",
            tags: ['tag1','tag2','tag3']
        };
        this.formatCount=this.formatCount.bind(this);
        this.getBadgeClass=this.getBadgeClass.bind(this);
        this.handleIncrement=this.handleIncrement.bind(this);
    }

    renderTags(){
        if(this.state.tags.length === 0)  return <p> There are no tags! </p>;
        
        return  <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

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
                <br />
                <img src={this.state.imageUrl} alt=""/>
                
                {this.renderTags()}
                
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