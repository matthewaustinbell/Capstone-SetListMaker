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
    setlistEditing: {},
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

removeFromSetlist = (songId) => {
  const songSetlistCopy = { ...this.state.songSetlist };
  delete songSetlistCopy[songId];
  this.setState({ songSetlist: songSetlistCopy });
}

makeNew = (setlistName) => {
  const newSetlist = { songs: { ...this.state.songSetlist }, name: setlistName };
  newSetlist.uid = firebase.auth().currentUser.uid;
  setlistsData.postSetlist(newSetlist)
    .then(() => {
      this.setState({ songSetlist: {} });
      this.getSetlists();
    })
    .catch(err => console.err('error in post setlist', err));
}

updateExisting = (setlistName) => {
  const updateSetlist = { ...this.state.setlistEditing };
  const setlistId = updateSetlist.id;
  updateSetlist.songs = this.state.songSetlist;
  updateSetlist.name = setlistName;
  delete updateSetlist.id;
  setlistsData.putSetlist(setlistId, updateSetlist)
    .then(() => {
      this.setState({ songSetlist: {}, setlistEditing: {} });
      this.getSetlists();
    })
    .catch(err => console.error('unable to update', err));
}

saveNewSetlist = (setlistName) => {
  if (Object.keys(this.state.setlistEditing).length > 0) {
    this.updateExisting(setlistName);
  } else {
    this.makeNew(setlistName);
  }
}

selectSetlistToEdit = (setlistId) => {
  const selectedSetlist = this.state.setlists.find(x => x.id === setlistId);
  this.setState({ songSetlist: selectedSetlist.songs, setlistEditing: selectedSetlist });
}

render() {
  const {
    songs,
    setlists,
    songSetlist,
    setlistEditing,
  } = this.state;
  return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <Catalog songs={songs} addSongToSetlist={this.addSongToSetlist}/>
        </div>
        <div className="col">
           <NewSetlist
              songs={songs}
              songSetlist={songSetlist}
              removeFromSetlist={this.removeFromSetlist}
              saveNewSetlist={this.saveNewSetlist}
              setlistEditing={setlistEditing}
            />
        </div>
        <div className="col">
        <Setlists setlists={setlists} deleteSetlist={this.deleteSetlist} selectSetlistToEdit={this.selectSetlistToEdit}/>
        </div>
      </div>
    </div>
  );
}
}

export default Home;
