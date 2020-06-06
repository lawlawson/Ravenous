import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    bestMatch:'best_match',
    highestRated:'rating',
    mostReviewed:'review_count'
}

class SearchBar extends React.Component {
    render() {
        return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    renderSortByOptions();
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
            </div>
        );
        renderSortbyOptions() {
            return Object.keys(sortByOptions).map(sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
            <li key="sortByOptionValue">{sortByOption}</li>
            });  
        }
    } 
         
}

export default SearchBar;