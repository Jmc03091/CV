
import '../styles/Practical.css';

function Practical(props) {
    const {toggle, company, setCompany,
           position, setPosition, mainTask,
           setMainTask, datesWork, setDatesWork } = props;
    return(
        <div>
          { toggle ?
              <div>
                <label> Company Name: </label>
                <input
                type="text"
                value={company}
                className="trueInput"
                disabled="disabled"
                />
                <label> Position Title: </label>
                <input
                type="text"
                value={position}
                className="trueInput"
                disabled="disabled"
                />
                <label> Main Tasks of Jobs: </label>
                <input
                type="text"
                value={mainTask}
                className="trueInput"
                disabled="disabled"
                />
                <label> Dates Worked (mm/yy to mm/yy): </label>
                <input
                type="text"
                value={datesWork}
                className="trueInput"
                disabled="disabled"
                />
              </div>
              :
              <div>
                <label> Company Name: </label>
                <input
                type="text"
                value={company}
                onChange={e => setCompany(e.target.value)}
                />
                <label> Position Title: </label>
                <input
                type="text"
                value={position}
                onChange={e => setPosition(e.target.value)}
                />
                <label> Main Tasks of Jobs: </label>
                <input
                type="text"
                value={mainTask}
                onChange={e => setMainTask(e.target.value)}
                />
                <label> Dates Worked (mm/yy to mm/yy): </label>
                <input
                type="text"
                value={datesWork}
                onChange={e => setDatesWork(e.target.value)}
                />
              </div>
          }
              

        </div>
    );
}

export default Practical;
