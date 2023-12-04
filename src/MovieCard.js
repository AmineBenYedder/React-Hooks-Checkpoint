import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';


const MovieCard =({el})=>{
    return (
        <>
    <br/>
    <div >
    <Card className="movie_card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} style={{ width: '18rem' }}/>
      <Card.Body>
        <Card.Title><h1>{el.name}</h1></Card.Title>
        <span>{el.date}</span>
        <span className="hd" > HD</ span>
        <ReactStars className='stars'
            count={5}
            value={el.rating}
            size={20} 
            edit={false}
            color2={'#ffd700' }/>
        <Card.Subtitle className="mb-2 text-muted"><h4>{el.season} Saisons</h4></Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted"><h4>{el.type}</h4></Card.Subtitle>
        <Card.Text>{el.description}</Card.Text>
        <br/>
        <Button variant="danger" style={{backgroundColor:"red",color:'white'}}>PLAY</Button>{' '}
        <Button variant="primary"style={{backgroundColor:"yellow",color:'black'}}>WATCH TRAILER</Button>
      </Card.Body>
    </Card>
    </div>           
        </>
    );
}
export default MovieCard;