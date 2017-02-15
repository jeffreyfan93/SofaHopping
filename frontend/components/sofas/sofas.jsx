import React from 'react';


class Sofas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="sofa-screen">
        <div className="sofa-container">
          <div className="sofa-container-top">
          </div>
          <div className="sofa-container-bottom">
            <div className="sofa-container-bottom-left">
            </div>
            <div className="sofa-container-bottom-right">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sofas;
