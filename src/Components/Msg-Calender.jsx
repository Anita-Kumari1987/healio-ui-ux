import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "../Styles/Msg-Calender.css";

const MsgCalender = () => {
  return (
    <div className="msgCalenderContainer">
      <div className="messageContainer">
        <div className="msg-icons">
          <p className="msgText">MESSAGES</p>
          <div className="icon-Group">
            <button className="expand-icon">
              <span>EXPAND</span>
              <span className="icon">
                <img
                  className="expandArrow "
                  src="./images/Arrow-white.svg"
                  alt="Log in arrow"
                />
              </span>
            </button>
            <div className="icon-Div">
              <i className="fa-solid fa-magnifying-glass custom-icon"></i>
            </div>
            <div className="icon-Div">
              <i className="fa-solid fa-plus custom-icon"></i>
            </div>
          </div>
        </div>
        <div className="msg-Lists">
          <img src="/msgList.jpg" alt="List of messages" />
        </div>
      </div>
      <div className="calenderContainer">
        <div className="calendar">
          <h2>March 2025</h2>
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div className="today">7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MsgCalender;
