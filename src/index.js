import ReacDOM from 'react-dom';
import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBuQGaeyGjuEXySwtuLY8d6EKpUpfPrpGQ';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] }
        YTSearch({ key: API_KEY, term: 'Rihanna' }, videos => {
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReacDOM.render(<App />, document.querySelector('.container'));