import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App/App";



jest.mock('react-dom', ()=> ({render: jest.fn()}))


it('rendering App', () => {

  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  global.document.getElementById = (id) => id ==='root' && div
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div)
});