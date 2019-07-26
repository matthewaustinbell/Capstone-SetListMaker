import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import NewSetlist from '../NewSetlist/NewSetlist';
import Setlists from '../Setlists/Setlists';
import Catalog from '../Catalog/Catalog';


import songData from '../../helpers/data/songData';
import setlistsData from '../../helpers/data/setlistsData';

import './Home.scss';

class Home extends React.Component {
  state = {
    setlists: [],
    songs: [],
  }

  componentDidMount() {
    songData.getSongs()
      .then(songs => this.setState({ songs }))
      .catch(err => console.error('could not get songs', err));
    setlistsData.getMySetlists(firebase.auth().currentUser.uid)
      .then(setlists => this.setState({ setlists }))
      .catch(err => console.error('could not get setlists', err));
  }

  render() {
    const { songs, setlists } = this.state;
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <Catalog songs={songs}/>
        </div>
        <div className="col">
           <NewSetlist />
        </div>
        <div className="col">
        <Setlists setlists={setlists}/>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
