import React, { useState, useEffect } from "react";
import "./calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookedSlots, setBookedSlots] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [publicHolidays, setPublicHolidays] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");

  const timeSlots = ["10:00-10:30", "12:00-12:30", "16:30-17:00"];

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch(
          "https://date.nager.at/api/v3/publicholidays/2025/GB"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Holidays Data:", data);
        const holidays = data.map((holiday) => holiday.date); 
        setPublicHolidays(holidays);
      } catch (error) {
        console.error("Error parsing JSON or empty response:", error.message);
      }
    };
    fetchHolidays();
  }, []);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const isWorkingDay = (date) => {
    const day = date.getDay(); // 0: Sunday, 6: Saturday
    const formattedDate = date.toISOString().split("T")[0];
    return day !== 0 && day !== 6 && !publicHolidays.includes(formattedDate);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  const handleDateClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    const today = new Date();

    if (date < today.setHours(0, 0, 0, 0)) {
      setErrorMessage("You cannot book a meeting in the past.");
      return;
    }

    if (isWorkingDay(date)) {
      setSelectedDate(date);
      const formattedDate = date.toISOString().split("T")[0];
      const bookedTimes = bookedSlots[formattedDate] || [];
      const available = timeSlots.filter((time) => !bookedTimes.includes(time));
      setAvailableTimes(available);
      setErrorMessage("");
    } else {
      setErrorMessage("Selected date is not available for booking.");
      setSelectedDate(null);
      setAvailableTimes([]);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = async () => {
    if (!userName || !userEmail || !companyName) {
      setErrorMessage("Please fill out all fields to confirm your booking.");
      return;
    }

    if (!selectedDate || !selectedTime) {
      setErrorMessage("Please select a date and time for your booking.");
      return;
    }

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    if (!validateEmail(userEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const bookingDetails = `
      Booking confirmed for ${selectedDate.toDateString()} 
      at ${selectedTime} (UK Time).
    `;

    const formattedDate = selectedDate.toISOString().split("T")[0];

    try {
      const formData = new FormData();
      formData.append("access_key", "a011d99e-ae3e-48da-8aef-15fe7020e583");
      formData.append("name", userName);
      formData.append("email", userEmail);
      formData.append("replyTo", userEmail);
      //formData.append("replyto", "email");
      formData.append("message", bookingDetails);
       formData.append(
         "subject",
         "Appointment Confirmation: Your Booking Details"
       );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Response from Web3Forms:", data);

      if (response.ok) {
        setBookedSlots((prev) => ({
          ...prev,
          [formattedDate]: [...(prev[formattedDate] || []), selectedTime],
        }));
        console.log("True");

        setEmailSent(true);
        setErrorMessage("");
      } else {
        console.log("web 3 fomrs response error" , data)
        setErrorMessage(data.message || "Unable to send confirmation email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setEmailSent(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserEmail("");
    setUserName("");
    setCompanyName("");
  };

  return (
    <div className="scheduling-container">
      <div className="appointment-details">
        <div className="logo-section">
          <img src="/1.1.png" alt="Omaeva Logo" className="logo" />
        </div>
        <div className="form-section">
          <h3>Book an appointment</h3>
          <div className="form-group">
            {/* <label>Name:</label> */}
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            {/* <label>Email:</label> */}
            <input
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            {/* <label>Company:</label> */}
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter your company name"
            />
          </div>
        </div>
      </div>

      <div className="calendar-section">
        <div className="calendar-header">
          {/* <h3>Select a Date & Time</h3> */}
          <div className="calendar-navigation">
            <button onClick={handlePrevMonth}>{"<"}</button>
            <span>
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
              })}{" "}
              {currentYear}
            </span>
            <button onClick={handleNextMonth}>{">"}</button>
          </div>
        </div>
        <div className="calendar-grid">
          {Array(firstDay)
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`} className="calendar-cell empty"></div>
            ))}
          {Array(daysInMonth)
            .fill(null)
            .map((_, index) => {
              const date = new Date(currentYear, currentMonth, index + 1);
              const today = new Date();
              const isPastDate = date < today.setHours(0, 0, 0, 0);
              const isAvailable = isWorkingDay(date) && !isPastDate;

              return (
                <div
                  key={`day-${index + 1}`}
                  className={`calendar-cell ${
                    selectedDate?.getDate() === index + 1 &&
                    selectedDate?.getMonth() === currentMonth
                      ? "selected"
                      : ""
                  } ${isAvailable ? "" : "disabled"}`}
                  onClick={() => isAvailable && handleDateClick(index + 1)}
                >
                  {index + 1}
                </div>
              );
            })}
        </div>
        {selectedDate && (
          <div className="time-slots">
            <h4>Available Times:</h4>
            <div className="time-grid">
              {availableTimes.map((time, index) => (
                <div
                  key={`time-${index}`}
                  className={`time-slot ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  onClick={() => handleTimeClick(time)}
                >
                  {time}
                </div>
              ))}
            </div>
            <button
              className="confirm-button"
              onClick={handleConfirmBooking}
              disabled={loading}
            >
              {loading ? <div className="spinner"></div> : "Confirm Booking"}
            </button>
          </div>
        )}
        {emailSent && (
          <div className="modal">
            <div className="modal-content">
              <h2>Booking Confirmed!</h2>
              <p>A confirmation email has been sent to your email address.</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Calendar;
