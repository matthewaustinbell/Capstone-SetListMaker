import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import setlistsData from '../../helpers/data/setlistsData';

import './Setlists.scss';

class Setlists extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    setlistsData.getMySetlists(firebase.auth().currentSetlist.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('cant get orders', err));
  }

  render() {
    return (
      <div className="Setlists">
        <h1>Setlists</h1>
      </div>
    );
  }
}

export default Setlists;
