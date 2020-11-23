import React from 'react';
import Rowlist from '../../components/Rowlist/RowList.component';

function PlayerPage(props) {
  return (
    <section>
      <p>This is video id {props.id.params.id} </p>
      <Rowlist />
    </section>
  );
}

export default PlayerPage;
