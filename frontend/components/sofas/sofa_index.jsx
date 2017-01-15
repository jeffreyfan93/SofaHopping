import React from 'react';

import SofaIndexItem from './sofa_index_item';

class SofaIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSofas();
  }

  render() {
    return (
      <div>
        <div>Sofas: </div>
        <ul>
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
