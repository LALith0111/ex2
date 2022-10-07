import pic from './Images/1.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Ex 2</h1>
          <h1>Card view </h1>
      <div class="cards">
    <article class="card">
        <header>
            <h2>Ferrari</h2>
        </header>    
        <center>
        <img src={pic} alt="logo"/>
        </center>
        <div class="content">
            <p> Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947.</p>
            <footer>
        <button className='button'>Open</button>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;
