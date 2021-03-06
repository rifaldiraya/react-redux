import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_AGE } from "../redux/actionType";

class Tes extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.usia}</p>
        <button onClick={this.props.handlePlus}>ADD AGE</button>
        <Link to="/home">
          <span>Home</span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usia: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ADD_AGE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tes);
