import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserList from './container/UserList';

const profil = [
  { nom: "Jules", id : 1, followers : 440, following : 540 },
  { nom: "Lara", id : 2, followers : 900, following : 950 },
  { nom: "Dylan", id : 3, followers : 300, following : 200 }
]

const useFacebooks = () => {

  const [facebooks, setFacebook] = useState(profil);

  const onChange = () => {
    
  };

  return { onChange, facebooks }
};


function App() {

  const {onChange, facebooks} = useFacebooks(); 

  return (
      <div className ='App-container'>
        <UserList facebooks={facebooks} onChange={onChange}/>
      </div>
  );  
}
export default App;
