import React from 'react';

import NewSetlist from '../NewSetlist/NewSetlist';
import Setlists from '../Setlists/Setlists';
import Catalog from '../Catalog/Catalog';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <Catalog />
        </div>
        <div className="col">
           <NewSetlist />
        </div>
        <div className="col">
        <Setlists />
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
