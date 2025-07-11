import './App.css';

function RoundRect({title, ID, timing, section, instr, loc, seats}) {
  return (
    <div className = 'block'>
      
      
      <div className='row spread'> 
        <p className="block-header">{ID}</p>
        <p>{timing}</p>
      </div>

      <p className = "block-subheader">{title}</p>
      
    </div>
  );
}

class TimeBlock {
  constructor() {
    this.ID = "CMSC132";
    this.title = "Object-Oriented Programming II";
    this.timing = "9:00-9:50AM";
    this.section = "0303";
    this.instr = "Nora Burkhauser";
    this.loc = "CSI 3120";
    this.seats = 50;
  }
  static timingToMinutes(hours, minutes) {
    return hours * 60 + minutes;
  }

  static minutesToTiming(minutes) {
    return [minutes / 60, minutes % 60]
  }
}

function column() {

}


export default function App() {
  return (
    <>
      <div className="App">
        <RoundRect title = "Object-Oriented Programming II" ID = "CMSC132" timing = "9:00-9:50AM" section = "0303" instr = "Nora Burkhauser" loc = "CSI 3120" seats = {50}/>
      </div>
    </>
  );
}
