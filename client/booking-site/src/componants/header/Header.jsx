import React, { useContext, useState } from "react";
import "./header.css";
import { FaHotel } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsCarFront } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { LiaTaxiSolid } from "react-icons/lia";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from '../../context/SearchContext.js';
import { AuthContext } from "../../context/AuthContext";




export const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDates, setOpenDates] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext)

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } })
  }
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaHotel />
              <span>Stays</span></Link>
          </div>
          <div className="headerListItem ">
            <Link to='/flights' style={{ color: 'inherit', textDecoration: 'none' }}>
              <GiCommercialAirplane />
              <span>Flights</span></Link>
          </div>
          <div className="headerListItem ">
            <Link to='/carrentals' style={{ color: 'inherit', textDecoration: 'none' }}>
              <BsCarFront />
              <span>Car rentals</span></Link>
          </div>
          <div className="headerListItem ">
            <Link to='/attractions' style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaBed />
              <span>Attractions</span></Link>
          </div>
          <div className="headerListItem ">
            <Link to="/airporttaxi" style={{ color: 'inherit', textDecoration: 'none' }}>
              <LiaTaxiSolid />
              <span>Airport taxis</span></Link>
          </div>
        </div>
        {type !== "list" &&
          <>
            <h1 className="headerTitele">
              A Lifetime of discounts ? It's Genius.
            </h1>
            <p className="headerDesc">
              Welcome to a world of endless adventures, breathtaking landscapes,
              and unforgettable experiences.
            </p>
            {!user && <button className="headerBtn"><Link to='/registre' style={{ textDecoration: 'none', color: 'inherit' }}>Sign In | Register</Link></button>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerIcon" />
                <input
                  type="text"
                  placeholder="where are you going ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <BsFillCalendarRangeFill className="headerIcon" />
                <span
                  onClick={() => setOpenDates(!openDates)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDates && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}

                  />
                )}
              </div>
              <div className="headerSearchItem">
                <BsFillPersonLinesFill className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult}adult - ${options.children}children - ${options.room}room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="searchBtn" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
