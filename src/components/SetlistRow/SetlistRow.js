import React from 'react';

import setlistShapes from '../../helpers/propz/setlistShapes';

class SetlistRow extends React.Component {
  static propTypes = {
    setlist: setlistShapes.setlistShape,
  }

  render() {
    const { setlist } = this.props;
    const numSong = Object.values(setlist.songs).reduce((a, b) => a + b);
    return (
      <tr>
        <th>{setlist.name}</th>
        <th>{numSong}</th>
        <th><button className="btn btn-light">x</button></th>
      </tr>
    );
  }
}

export default SetlistRow;
