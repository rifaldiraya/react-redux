import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { ADD_AGE } from "../../redux/actionType";

class Home extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.usia}</span>
        <button onClick={this.props.handlePlus}>ADD_AGE</button>
        <Link to="/tes">
          <span>Tes</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
