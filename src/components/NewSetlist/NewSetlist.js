import React from 'react';

import './NewSetlist.scss';

class NewSetlist extends React.Component {
  state={
    setlistName: '',
  }

  renderSetlist = (key) => {
    const song = this.props.songs.find(x => x.id === key);
    // const count = this.props.songSetlist[key];
    const xClickFunction = (e) => {
      e.preventDefault();
      this.props.removeFromSetlist(key);
    };

    return (
      <li key={key}>
        <div className="col-5">
          {song.name}
        </div>
        <div className="col-3">
          {song.artist}
        </div>
        <div className="col-2">
          <button className="btn btn-outline-dark" onClick={xClickFunction}>x</button>
        </div>
      </li>
    );
  };

  render() {
    const { songSetlist } = this.props;
    const setlistIds = Object.keys(songSetlist);
    const setlistExists = setlistIds.length > 0;

    const total = setlistIds.reduce((prevTotal, key) => {
      const song = this.props.songs.find(x => x.id === key);
      const count = this.props.songSetlist[key];
      return prevTotal + count * song.id;
    }, 0);
    return (
      <div className="NewSetlist">
        <h1>New Setlist</h1>
        <form className='col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="setlist-name">Setlist Name:</label>
            <input
              type="text"
              className="form-control"
              id="setlist-name"
              placeholder="Rock Setlist"
            />
          </div>
        </form>
        <ul>{setlistIds.map(this.renderSetlist)}</ul>
        <div className="text-center">
        {
          setlistExists ? (
            <button className="btn btn-outline-dark"> Save Setlist</button>
          ) : (
            <div>Add Catalog to your setlist</div>
          )
        }
      </div>
    </div>
    );
  }
}

export default NewSetlist;
