import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import Home from './components/Home';
import Main from './components/Main';
import { Login } from './components/Auth/components/Login';
import { Register } from './components/Auth/components/Register';
import Explore from './components/Explore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Main />} />
              <Route path="/explore" element={<Explore />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
