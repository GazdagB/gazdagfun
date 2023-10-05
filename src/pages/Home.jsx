import Card from '../components/Card';
import TicTacToe from '../assets/tictactoe.jpg'; // Import your images
import GameImg1 from '../assets/game-img1.jpg';
import GameImg2 from '../assets/game-img2.jpg';
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
 
  const games = [
    {
      img: TicTacToe,
      route: '/TicTacToe',
    },
    {
      img: GameImg1,
      route: '/gameimg1',
    },
    {
      img: GameImg2,
      route: '/gameimg2',
    },
  
  ]; 

  return (
    <div className='home'>
      <h1 className='my-5'>Gazdag Fun</h1>
      <div className="game-cards-container">
    {games.map((game, index) => (
    <Link to={game.route} key={index} className="game-link">
      <Card img={game.img} />
    </Link>
  ))}
</div>
    
    </div>
  );
}

export default Home;