// import logo from './logo.svg';
import './App.css';

//["Samsung","HTC","Micromax", "Apple"]
function App() {
  const mobOperatingSystem = ["Android","Blackbery","iPhone", "Windows Phone"];
  const manufacturingSystem = [
    {companyName: "Samsung", class : "square"},
    {companyName: "HTC", class : "square"},
    {companyName: "Micromax", class : "none"},
    {companyName: "Apple", class : "disc"},
  ]
  return (
    <div>
      <div>
      <h1>Mobile Operating System</h1>
        <ul>
        {mobOperatingSystem.map((os) => {
        return <MobileOperating name = {os} />
        })}
        </ul>     
      </div>   
      <div>
      <h1>Mobile Manufacturers</h1>
        <ul>
        {manufacturingSystem.map((ms) => {
        return <Manufacturing companyName = {ms.companyName} styleApplied = {ms.class}/>
      })}
        </ul>
      </div>
    </div>
  );
}
function MobileOperating({name}){
  return (
        <>
        <li>{name}</li>
        </>
  ) 
}

function Manufacturing({companyName, styleApplied}){
  return (
    <>     
      <li class= {styleApplied}>{companyName}</li>
    </>
  )
}

export default App;
