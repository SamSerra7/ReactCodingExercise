import retrieveMoviesByWord from '../services/moviesService';
import { useState, useEffect, useLayoutEffect } from 'react';
import CustomTable from './CustomTable';
import '../App.css'

const styles = {
    'grid': { height: 400, width: 600 },
    'link': { 
        background: 'none!important',
        border: 'none',
        padding: '0!important',
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    'linkDisabled': { 
        background: 'none!important',
        border: 'none',
        padding: '0!important',
        color: '#696969',
        cursor: 'default'
    }
}
const headers = ["Title","Popularity","Release Date","Vote Average"];

function Grid (props) {

    const [currentPage , setCurrentPage] = useState(1); 
    const [rowData, setRowData] = useState(null);

    useLayoutEffect(() => retrieveMoviesByWord(props.word,currentPage).then(movies=>setRowData(movies.results)), []);
    
    useEffect(() => retrieveMoviesByWord(props.word,currentPage).then(movies=>setRowData(movies.results)), [currentPage,props.word]);

    return (
        <div style={{ height: '80%', width: '90%'}}>
            {rowData ? <>
            <CustomTable headers={headers} data={rowData}/>
            <button style={currentPage > 1 ? styles.link : styles.linkDisabled}
                onClick={() => currentPage <= 1 ? null : setCurrentPage(currentPage - 1)}
            >
                previous
            </button>
            <button style={styles.link} onClick={() => setCurrentPage(currentPage + 1)}>next</button></>
        :
        <h2>No data</h2>
        }
        </div>
      );
}

export default Grid;