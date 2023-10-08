import Card from '../components/Card';
import TicTacToe from '../assets/tictactoe.jpg'; // Import your images
import GameImg1 from '../assets/game-img1.jpg';
import GameImg2 from '../assets/game-img2.jpg';
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
 
  const projects = [
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
      <h1 className='mt-5 welcome-logo'>Gazdag Fun</h1>
      <p className='header-message mb-5'>Where a beginner developer&rsquo;s project&apos;s live!</p>
      <div className="game-cards-container">
        {projects.map((project, index) => (
          <Link to={project.route} key={index} className="project-link">
            <Card img={project.img} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;