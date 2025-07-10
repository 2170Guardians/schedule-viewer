import './App.css';

function RoundRect({title, ID, timing}) {
  return (
    <div className = 'block'>
      <p className="block-header">{title}</p>
      <div className='row'>
        <p>{ID}</p>
        <p>{timing}</p>
      </div>
      
    </div>
  );
}


export default function App() {
  return (
    <>
      <div className="App">
        <RoundRect title = "DS" ID = "CMSC131" timing = "1PM-3PM" />
      </div>
    </>
  );
}
