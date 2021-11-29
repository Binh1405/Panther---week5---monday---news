import './App.css';
import Mainpage from "./Mainpage/Mainpage";
import data from "./data.json"

function App() {
  const jobList = data.jobs.slice(0,20)
  return (
    <div className="App"> 
      {
        jobList.map((el) => <Mainpage key={el.id} data={el}/>)
      }
    </div>
  );
}
export default App;

