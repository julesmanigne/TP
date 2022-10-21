import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import User from './components/user';

const profils = [
  {
    nom: "Jules",
    id:1,
  },
  {
    nom: "Lara",
    id:2,
  },
  {
    nom: "Dylan",
    id:3,
  }
]

function App() {
  const profilList = profils.map((profil) => {
    return (
      <User 
        key={profil.id}
        name={profil.nom} 
      />
    );
  });

  console.log(profilList);

  return (
    <div>
      <div className ='App-container'>
        {profilList}
      </div>
    </div>
  );  
}
export default App;
