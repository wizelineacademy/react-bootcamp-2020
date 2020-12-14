import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { State } from './utils/State';
import { ConfigState } from './utils/ConfigState';
import { VideoState } from './utils/VideoState';
import 'antd/dist/antd.css';

ReactDOM.render(
  <State>
    <ConfigState>
      <VideoState>
          <App />
      </VideoState>
    </ConfigState>
  </State>,
  document.getElementById('root')
);
