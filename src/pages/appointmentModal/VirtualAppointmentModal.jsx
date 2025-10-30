import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VirtualAppointmentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));
  const [selectedDate, setSelectedDate] = useState(null);

  const availableDates = [29, 30];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    return { adjustedFirstDay, daysInMonth };
  };

  const { adjustedFirstDay, daysInMonth } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    if (availableDates.includes(day)) setSelectedDate(day);
  };

  const getDateStyle = (day) => {
    const isAvailable = availableDates.includes(day);
    const isSelected = selectedDate === day;

    return {
      aspectRatio: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "15px",
      fontWeight: "500",
      color: isSelected ? "white" : isAvailable ? "#2563eb" : "#9ca3af",
      backgroundColor: isSelected ? "#2563eb" : "transparent",
      borderRadius: "8px",
      border: "none",
      cursor: isAvailable ? "pointer" : "default",
    };
  };

  // Detect screen size to toggle scroll behavior
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      {!showModal && (
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: "16px 32px",
              fontSize: "18px",
              fontWeight: "600",
              color: "white",
              background: "rgba(255, 255, 255, 0.2)",
              border: "2px solid white",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            📅 Open Booking Modal
          </button>
        </div>
      )}

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "center",
            padding: isMobile ? "0" : "10px",
            overflowY: isMobile ? "auto" : "hidden", // ✅ scroll only on mobile
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setShowModal(false)}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
              color: "white",
              zIndex: 2,
            }}
          >
            ✕
          </button>
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              background: "white",
              borderRadius: isMobile ? "0" : "16px",
              overflow: "hidden",
              position: "relative",
              top: isMobile ? "50px" : "",
              bottom: isMobile ? "50px" : "",
              right: isMobile ? "50px" : "",
              left: isMobile ? "50px" : "",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              minHeight: isMobile ? "70vh" : "auto",
            }}
          >
            {/* Left Panel */}
            <div
              style={{
                flex: "1 1 400px",
                padding: "40px 25px",
                background: "#fff",
                borderBottom: isMobile ? "1px solid #eee" : "none",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#1e3a5f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "bold",
                    margin: "0 auto 16px",
                  }}
                >
                  ◆
                </div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#1e3a5f",
                    letterSpacing: "2px",
                  }}
                >
                  WITH CLARITY
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  NEW YORK
                </div>
              </div>
              <hr />
              <div>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#1e3a5f",
                  }}
                >
                  Book a Virtual Appointment
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    lineHeight: "1.5",
                  }}
                >
                  Meet virtually for a one-on-one with a jewelry specialist. We
                  look forward to assisting you in discovering your dream piece!
                </p>
              </div>
            </div>

            {/* Right Panel */}
            <div
              style={{
                flex: "1 1 400px",
                padding: "30px 25px",
                background: "#fafafa",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#1e3a5f",
                }}
              >
                Select a Date & Time
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: "12px",
                  color: "#1e3a5f",
                }}
              >
                <button
                  onClick={previousMonth}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  ‹
                </button>
                <span style={{ fontWeight: "600" }}>
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </span>
                <button
                  onClick={nextMonth}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  ›
                </button>
              </div>

              {/* Calendar Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "8px",
                }}
              >
                {[...Array(adjustedFirstDay)].map((_, i) => (
                  <div key={`empty-${i}`}></div>
                ))}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  return (
                    <button
                      key={day}
                      style={getDateStyle(day)}
                      onClick={() => handleDateClick(day)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div style={{ marginTop: "25px" }}>
                <label
                  style={{
                    fontWeight: "600",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Time Zone
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                  }}
                >
                  <option>India Standard Time</option>
                  <option>Eastern Time</option>
                  <option>Pacific Time</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VirtualAppointmentModal;
