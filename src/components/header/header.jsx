import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed,faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';

import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
const Header = (type) => {

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1

    })

    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date,
      key: 'selection'
    }
  ]);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev,
        [name]: operation === "i" ? options[name] + 1: options[name] - 1
        };
    });
  };

  const handelsearch = () =>{
    navigate("/hotels", {state:{destination, date, options}});
  }

    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Stay</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flight</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
                </div>
            </div>
            { type !== "list" && <> <h1 className='headerTitle'> A lifetime of discounts? it's Genius</h1>
            <p className="headerDesc"> Get reWarded for your travels - unlock instant saving 10% or more with a free lamabooking account
            </p>
            <button className="headerbtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input type="text/"
                placeholder='Where are you going' 
                className="headerSearchInput"
                onClick={() => setDestination()}/>
                {/* onClick={() => setDestination(e.target.value)}/> */}

                </div>

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span onClick={( () => setOpenDate(!openDate))} className="headerSearchText"> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} </span>

                   {openDate && <DateRange
                     editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                     moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                    />}
                </div>

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}> {`${options.adult} adult . ${options.children} children . ${options.room}`}   </span>
                
                
                { openOptions && <div className="options">
                    <div className="optionItiem">
                        <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" 
                    disabled={options.adult <= 1}
                    onClick={() => handleOption("adult", "d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                    </div>
                    </div>
                    <div className="optionItiem">
                        <span className="optionText">Childeren</span>
                     <div className="optionCounter">
                    <button className="optionCounterButton" 
                    disabled={options.children <= 0}
                    onClick={() => handleOption("children", "d")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}>+</button>
                    </div>
                    </div>

                    
                    <div className="optionItiem">
                        <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" 
                    disabled={options.room <= 1}
                    onClick={() => handleOption("room", "d")}>-</button>
                    <span className="optionCounterNumber"> {options.room}</span>
                    <button className="optionCounterButton"onClick={() => handleOption("room", "i")} >+</button>
                    </div>
                    </div>
                </div>
}
                </div>

                <div className="headerSearchItem">
                <button className="headerbtn" onClick={handelsearch}> Search</button>
                </div>
            </div></>}
            </div>
        </div>
    );
} 

export default Header;