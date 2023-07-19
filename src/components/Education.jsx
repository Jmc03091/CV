
import '../styles/Education.css';

function Education(props) {
    const {toggle, school, setSchool, 
           study, setStudy, date, setDate} = props
    return(
        <div>
          { toggle ?
              <div>
                <label> School Name: </label>
                <input
                type="text"
                value={school}
                className="trueInput"
                disabled="disabled"
                />
                <label> Title of Study: </label>
                <input
                type="text"
                value={study}
                className="trueInput"
                disabled="disabled"
                />
                <label> Date of Study: </label>
                <input
                type='text'
                value={date}
                className='trueInput'
                disabled='disabled'
                />
              </div>
              :
              <div>
                <label> School Name: </label>
                <input
                type="text"
                value={school}
                onChange={e => setSchool(e.target.value)}
                />
                <label> Title of Study: </label>
                <input
                type="text"
                value={study}
                onChange={e => setStudy(e.target.value)}
                />
                <label> Date of Study: </label>
                <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)}
                />
              </div>
          }




        </div>
    );
}

export default Education;
