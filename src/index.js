import ReacDOM from 'react-dom';
import React from 'react';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBuQGaeyGjuEXySwtuLY8d6EKpUpfPrpGQ';

const App = () =>{
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReacDOM.render(<App />, document.querySelector('.container'));