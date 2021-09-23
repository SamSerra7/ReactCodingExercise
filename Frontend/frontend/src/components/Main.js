import Grid from './Grid';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useState } from 'react';

export default function Main(props) {

    const [movieName, setMovieName] = useState('');

    const changeSearch = (e) =>{
        let value = e.target.value;
        console.log(value);
        setMovieName(value ? value : ' ');
        e.preventDefault();
        window.scrollTo(0,0);
    }

    return (
        <Container>
            <Form.Control type="text" placeholder="Insert the movie name" onKeyUp={(e) => changeSearch(e) }/>
            { movieName ? 
                (<div style={{marginTop:'1%'}}>
                    <Grid word={movieName}/> 
                </div>)
                : 
                (<div style={{marginTop:'5%'}} >
                    <Spinner animation="grow" variant="info"/>
                    <Spinner animation="grow" variant="info"/>
                    <Spinner animation="grow" variant="info"/>
                    </div>
                 )
            }
        </Container>
    )
}