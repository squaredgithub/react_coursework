import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import Todo from './Todo';
import Show from './Show';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Show />
    // {/* <Todo /> */}
    // {/* <App /> */}
</React.StrictMode> 
);

