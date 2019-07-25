import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import setlistsData from '../../helpers/data/setlistsData';
import SetlistRow from '../SetlistRow/SetlistRow';
import './Setlists.scss';

class Setlists extends React.Component {
  state = {
    setlists: [],
  }

  componentDidMount() {
    setlistsData.getMySetlists(firebase.auth().currentUser.uid)
      .then(setlists => this.setState({ setlists }))
      .catch(err => console.error('cant get setlists', err));
  }

  render() {
    const setlistComponents = this.state.setlists.map(setlist => (
      <SetlistRow key={setlist.id} setlist={setlist} />
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
