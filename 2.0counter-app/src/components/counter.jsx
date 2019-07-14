// Create Component
// Show output
// Embedding Expression
// Setting Attributes
// Render list
// Conditional Rendering
// Binding Event handler
// Updating the state

// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: ["tag1", "tag2", "tag3"]
//   };

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags</p>;

//     return (
//       <ul>
//         {this.state.tags.map(tag => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }

//   //   constructor() {
//   //     super();
//   //     this.incrementState = this.incrementState.bind(this);
//   //   }

//   //   incrementState() {
//   //     this.setState({ count: this.state.count + 1 });
//   //   }

//   incrementState = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div className="container">
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button onClick={this.incrementState} className="btn btn-gray m-2">
//           Increment
//         </button>

//         {this.renderTags()}
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "m-2 badge badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;

import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-gray btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
