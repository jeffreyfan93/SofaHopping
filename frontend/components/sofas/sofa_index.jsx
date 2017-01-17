import React from 'react';

import SofaIndexItem from './sofa_index_item';

class SofaIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSofas();
  }

  componentDidMount() {
    this.props.fetchSofas();
  }

  render() {
    return (
      <div className="sofas-index-container">
        <div className="sofas-index-title">Sofas</div>
        <ul className="sofas-index">
          {this.props.sofas.map(sofa => (
            <SofaIndexItem
              key={sofa.id}
              sofa={sofa} />
          ))}
        </ul>
      </div>
    );
  }

}

export default SofaIndex;
