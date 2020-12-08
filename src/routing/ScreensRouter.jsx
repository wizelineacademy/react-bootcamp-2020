import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/home/Home';
import Detail from '../screens/detail/Detail';
import { AuthContext } from '../store/contexts/AuthContext';
import { FavoriteContext } from '../store/contexts/FavoriteContext';

const ScreensRouter = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AuthContext);
  // eslint-disable-next-line
  const [favState, favDispatch] = useContext(FavoriteContext);

  useEffect(() => {
    favDispatch({
      type: 'LOAD_FROM_STORAGE',
    });
  }, []);

  return (
    <div className="main">
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        {state.isAuth ? <Route path="/fav" component={Home} /> : null}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default ScreensRouter;
