import React from 'react';
import { UserConsumer } from '../../MyContext'


function Child(props) {

    return (
        <div>
        <UserConsumer>
        {(props) => {
          console.log(props)
        }}
      </UserConsumer>
        <p>Information</p>
        </div>

    )
}

export default Child