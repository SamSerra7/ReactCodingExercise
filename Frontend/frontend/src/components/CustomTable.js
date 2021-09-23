import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

export default function CustomTable (props){
    return(
        <Table striped bordered hover size="sm" >
            <thead>
                <tr>
                    {props.headers.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data.map(fields => <tr key={fields.id}>
                    <td>{fields.original_title}</td>
                    <td>{fields.popularity}</td>
                    <td>{fields.release_date}</td>
                    <td>{fields.vote_average}</td>
                    <td><Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${fields.poster_path}`} rounded  style={{height:'30%',width:'30%'}}/></td>
                </tr>)}
            </tbody>
        </Table>
    )
}