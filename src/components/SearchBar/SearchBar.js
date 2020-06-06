import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    bestMatch:'best_match',
    highestRated:'rating',
    mostReviewed:'review_count'
}

class SearchBar extends React.Component {
    render() {
        renderSortbyOptions() {
            return Object.keys(sortByOptions).map(sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
            <li key="sortByOptionValue">{sortByOption}</li>
            });  
        }
    }
    
         
}