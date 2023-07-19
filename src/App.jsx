import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Practical from './components/Practical.jsx';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [mainTask, setMainTask] = useState('');
  const [datesWork, setDatesWork] = useState('');
  const [toggle, setToggle] = useState('');
  

  const preventForm = (e) =>{
      e.preventDefault();
  }

  const preventEdit = () => {
      setToggle(false);
  }

  const preventSubmit = () => {
      setToggle(true);
  }

  return (
    <div>
      <form onClick={preventForm}>
        <h1> CV-Project </h1>
        <GeneralInfo toggle={toggle} name={name} setName={setName} 
        email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}
        />
        <Education toggle={toggle} school={school} setSchool={setSchool}
        study={study} setStudy={setStudy} date={date} setDate={setDate}
        />
        <Practical toggle={toggle} company={company} setCompany={setCompany}
        position={position} setPosition={setPosition} mainTask={mainTask}
        setMainTask={setMainTask} datesWorked={datesWork} setDatesWork={setDatesWork}
        />
        <div className="buttonsMove">
          <button type="button" onClick={preventEdit}> Edit </button>
          <input type="submit" id="submit" onClick={preventSubmit}/>
        </div>
      </form>
    </div>
  )
}

export default App
