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
    songSetlist: {},
  }

getSetlists = () => {
  setlistsData.getMySetlists(firebase.auth().currentUser.uid)
    .then(setlists => this.setState({ setlists }))
    .catch(err => console.error('cant get setlists', err));
}

componentDidMount() {
  songData.getSongs()
    .then(songs => this.setState({ songs }))
    .catch(err => console.error('could not get songs', err));

  this.getSetlists();
}

deleteSetlist = (setlistId) => {
  setlistsData.deleteSetlist(setlistId)
    .then(() => this.getSetlists())
    .catch(err => console.error('did not delete setlist', err));
}

addSongToSetlist = (songId) => {
  const songSetlistCopy = { ...this.state.songSetlist };
  songSetlistCopy[songId] = songSetlistCopy[songId] + 1 || 1;
  this.setState({ songSetlist: songSetlistCopy });
}

render() {
  const { songs, setlists } = this.state;
  return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <Catalog songs={songs} addSongToSetlist={this.addSongToSetlist}/>
        </div>
        <div className="col">
           <NewSetlist />
        </div>
        <div className="col">
        <Setlists setlists={setlists} deleteSetlist={this.deleteSetlist}/>
        </div>
      </div>
    </div>
  );
}
}

export default Home;
