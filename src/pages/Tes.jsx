import React from "react";
import { connect } from "react-redux";

function Tes() {
  return (
    <div>
      <p>{this.props.usia}</p>;
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usia: state.age,
  };
};

export default connect(mapStateToProps, null)(Tes);
