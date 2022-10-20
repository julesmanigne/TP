import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';


export default function App() {

  const profils = [
    { id : 1, nom: "Jules", imageUrl: '', imageSize: 90 },
    { id : 2, nom: "Marie", imageUrl: '', imageSize: 90 },
    { id : 3, nom: "Dylan", imageUrl: '', imageSize: 90 }
  ];

  return (
  <>
    <div className='App'>
      <Navbar/>
    </div>
  </>
  )
}
