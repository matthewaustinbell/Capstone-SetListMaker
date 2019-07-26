import React from 'react';
import PropTypes from 'prop-types';

import setlistShapes from '../../helpers/propz/setlistShapes';
import SetlistRow from '../SetlistRow/SetlistRow';

import './Setlists.scss';

class Setlists extends React.Component {
  static propTypes = {
    setlists: PropTypes.arrayOf(setlistShapes.setlistShape),
    deleteSetlist: PropTypes.func.isRequired,
  }

  render() {
    const setlistComponents = this.props.setlists.map(setlist => (
      <SetlistRow key={setlist.id} setlist={setlist} deleteSetlist={this.props.deleteSetlist}/>
    ));

    return (
      <div className="Setlists">
        <h2>Setlists</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Your Setlists</th>
              <th scope="col"># of Songs</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {setlistComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Setlists;
