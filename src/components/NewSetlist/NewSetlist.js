import React from 'react';
import PropTypes from 'prop-types';
import songShapes from '../../helpers/propz/songShapes';
import './NewSetlist.scss';

class NewSetlist extends React.Component {
  static propTypes = {
    songs: PropTypes.arrayOf(songShapes.songShape),
    songSetlist: PropTypes.object.isRequired,
    setlistEditing: PropTypes.object.isRequired,
    removeFromSetlist: PropTypes.func.isRequired,
    saveNewSetlist: PropTypes.func.isRequired,

  }

  state={
    setlistName: '',
  }

  componentWillUpdate(nextProps) {
    if (nextProps.setlistEditing !== this.props.setlistEditing && nextProps.setlistEditing.name) {
      this.setState({ setlistName: nextProps.setlistEditing.name });
    }
  }

nameChange = (e) => {
  e.preventDefault();
  this.setState({ setlistName: e.target.value });
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

  saveSetlist = (e) => {
    e.preventDefault();
    this.props.saveNewSetlist(this.state.setlistName);
    this.setState({ setlistName: '' });
  }

  render() {
    const { songSetlist, setlistEditing } = this.props;
    const { setlistName } = this.state;
    const setlistIds = Object.keys(songSetlist);
    const setlistExists = setlistIds.length > 0;

    const total = setlistIds.reduce((prevTotal, key) => {
      const song = this.props.songs.find(x => x.id === key);
      const count = this.props.songSetlist[key];
      return prevTotal + count * song.id;
    }, 0);
    return (
      <div className="NewSetlist">
        <h1>{Object.keys(setlistEditing).length > 1 ? 'Edit Setlist' : 'New Setlist'}</h1>
        <form className='col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="setlist-name">Setlist Name:</label>
            <input
              type="text"
              className="form-control"
              id="setlist-name"
              placeholder="Rock Setlist"
              value={setlistName}
              onChange={this.nameChange}
            />
          </div>
        </form>
        <ul>{setlistIds.map(this.renderSetlist)}</ul>
        <div className="text-center">
        {
          setlistExists ? (
            <button className="btn btn-outline-dark" onClick={this.saveSetlist}> Save Setlist</button>
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
