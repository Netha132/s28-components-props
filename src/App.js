import logo from './logo.svg';
import './App.css';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      
      <div className='batters'>

      <h1 className='heading'>CHENNAI SUPER KINGS</h1>
      
      <Players Name="Ruturaj Gaikwad" Team="CSK" Specialization="Batter" picURL="./images/ruturaj.webp"></Players>

      <Players Name="Devon Convey" Team="CSK" Specialization="Batter" picURL="./images/devonConvey.webp"></Players>

      <Players Name="M.S. Dhoni" Team="CSK" Specialization="Batter&WicketKeeper" picURL="./images/dhoni.webp"></Players>

      <Players Name="Ravindra Jadeja" Team="CSK" Specialization="Allrounder" picURL="./images/jadeja.webp"></Players>

      <Players Name="Mitchell Santner" Team="CSK" Specialization="Allrounder" picURL="./images/santner.webp"></Players>

      <Players Name="Moeen Ali" Team="CSK" Specialization="Allrounder" picURL="./images/moeenAli.webp"></Players>

      <Players Name="Shivam Dube" Team="CSK" Specialization="Allrounder" picURL="./images/dube.webp"></Players>

      <Players Name="Deepak Chahar" Team="CSK" Specialization="Bowler" picURL="./images/deepakChahar.webp"></Players>

      <Players Name="Matheesha pathirana" Team="CSK" Specialization="Bowler" picURL="./images/pathirana.webp"></Players>

      <Players Name="Simarjeet Singh" Team="CSK" Specialization="Bowler" picURL="./images/simarjeet.webp"></Players>

      <Players Name="Tushar Deshpande" Team="CSK" Specialization="Bowler" picURL="./images/deshpande.webp"></Players>

      <Players Name="Maheesh Theekshana" Team="CSK" Specialization="Bowler" picURL="./images/theekshana.webp"></Players>
      </div>
    </div>
  );
}

export default App;
