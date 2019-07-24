import React from 'react';

import songData from '../../helpers/data/songData';
import Song from '../Song/Song';
import './Catalog.scss';

class Catalog extends React.Component {
  state = {
    songs: [],
  }

  componentDidMount() {
    songData.getSongs()
      .then(songs => this.setState({ songs }))
      .catch(err => console.error('could not get songs', err));
  }

  render() {
    const songComponents = this.state.songs.map(song => (
      <Song key={song.id} song={song}/>
    ));
    return (
      <div className="Catalog">
      <h1>Catalog</h1>
      <ul className="songs">
        {songComponents}
      </ul>
      </div>
    );
  }
}

export default Catalog;
