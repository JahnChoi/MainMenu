import React from 'react'
import './ResultsList.css'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const ResultsList = (props) => {
    if (props.loading) {
        console.log("option1")
        return (
            <div className = "results-list-container">
            {/*Loading gif*/}
            <h2>LoadingText</h2>
            </div>
        )
    } else if (props.results.length > 0) {
        console.log("option2")
        return (
            <div className='results_list_container'>
                 <div className="results-list">
                    {props.results.map((item, index) => {
                        return (
                            <ListItem key = {index} restaurant={item}/>
                        )
                    })}
                </div> 
            </div>
        )
    } else if (props.searched) {
        console.log("option3")
        return (
            <div className ="results-list-container">
                <div className="no-results-found">
                {/*Fail header text*/}
                <h2>props.results.length</h2>
                </div>
            </div> 
        )
    } else {
        console.log("option4")
        return (
            <div className ="results-list-container">
            </div>
        )       
    }
}

ResultsList.PropTypes = {
    loading: PropTypes.bool.isRequired,
    searched: PropTypes.bool.isRequired,
}

export default ResultsList