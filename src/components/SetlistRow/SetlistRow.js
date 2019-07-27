import React from 'react';
import PropTypes from 'prop-types';

import setlistShapes from '../../helpers/propz/setlistShapes';

class SetlistRow extends React.Component {
  static propTypes = {
    setlist: setlistShapes.setlistShape,
    deleteSetlist: PropTypes.func.isRequired,
    selectSetlistToEdit: PropTypes.func.isRequired,
  }

  deleteSetlistEvent = (e) => {
    const { setlist, deleteSetlist } = this.props;
    e.preventDefault();
    deleteSetlist(setlist.id);
  };

  selectSetlist = (e) => {
    e.preventDefault();
    const { setlist, selectSetlistToEdit } = this.props;
    selectSetlistToEdit(setlist.id);
  }

  render() {
    const { setlist } = this.props;
    const numSong = Object.values(setlist.songs).reduce((a, b) => a + b);
    return (
      <tr>
        <th><button className="link-button" onClick={this.selectSetlist}>{setlist.name}</button></th>
        <th>{numSong}</th>
        <th><button className="btn btn-light" onClick={this.deleteSetlistEvent}>x</button></th>
      </tr>
    );
  }
}

export default SetlistRow;
