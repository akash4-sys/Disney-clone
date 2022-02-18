import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/detail/:id" element={<Detail/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;