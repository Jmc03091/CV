
import '../styles/GeneralInfo.css';

function GeneralInfo(props) {
    const {toggle, name, setName,email,setEmail,
           phone, setPhone } = props;
    return(
        <div>
          { toggle ? 
              <div>
                <label> Name: </label>
                <input
                type="text"
                value={name}
                className="trueInput"
                disabled="disabled"
                />
                <label> Email: </label>
                <input
                type="text"
                value={email}
                className="trueInput"
                disabled="disabled"
                />
                <label> Phone #: </label>
                <input
                type="text"
                value={phone}
                className="trueInput"
                disabled="disabled"
                />
              </div>
              :
              <div>
                <label> Name: </label>
                <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <label> Email: </label>
                <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <label> Phone #: </label>
                <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                />
              </div>
          }
          


          

        </div>
    );
}

export default GeneralInfo;
