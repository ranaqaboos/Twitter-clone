import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Explorepage } from './pages/explore';
import { Homepage } from './pages/home';
import { Loginpage } from './pages/login';
import { Profilepage } from './pages/profile';
import { Registerpage } from './pages/register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
		<Route path='/' element={<Homepage />} />
			<Route path='/profile' element={<Profilepage />} />
			<Route path='/login' element={<Loginpage />} />
      <Route path='/explore' element={<Explorepage />} />
	  <Route path='/register' element={<Registerpage />} />
	
		</Routes>
	</BrowserRouter>
);

