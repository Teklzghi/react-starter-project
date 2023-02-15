import './App.css';
import showsData from  './shows-data'

function Show (props){
  return (
    <div className='Show'>
      <img 
      className='Show-image'
      src={ props.showObject.image.medium } 
      alt={ props.showObject.name } />
    <h2>{ props.showObject.name }</h2>
   </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>The Best Tv Show App</h1>
       { showsData.map(X => <Show showObject={x} />) }
      </div>
  );
}

export default App;
