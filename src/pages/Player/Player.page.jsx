import React from 'react';
import Rowlist from '../../components/Rowlist/RowList.component';

import './Player.styles.css';

function PlayerPage(props) {
  return (
    <div className="player_page_container">
      <div className="player_container" />

      <section>
        <p>This is video id {props.id.params.id} </p>
        <Rowlist />
      </section>
    </div>
  );
}

export default PlayerPage;
