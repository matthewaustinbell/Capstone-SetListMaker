import React from 'react';
import PropTypes from 'prop-types';

import setlistShapes from '../../helpers/propz/setlistShapes';

class SetlistRow extends React.Component {
  static propTypes = {
    setlist: setlistShapes.setlistShape,
    deleteSetlist: PropTypes.func.isRequired,
  }

  deleteSetlistEvent = (e) => {
    const { setlist, deleteSetlist } = this.props;
    e.preventDefault();
    deleteSetlist(setlist.id);
  };

  render() {
    const { setlist } = this.props;
    const numSong = Object.values(setlist.songs).reduce((a, b) => a + b);
    return (
      <tr>
        <th>{setlist.name}</th>
        <th>{numSong}</th>
        <th><button className="btn btn-light" onClick={this.deleteSetlistEvent}>x</button></th>
      </tr>
    );
  }
}

export default SetlistRow;
