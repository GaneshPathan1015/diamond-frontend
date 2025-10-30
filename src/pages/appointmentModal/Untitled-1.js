import React, { useState } from "react";

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },
  card: {
    maxWidth: "1200px",
    margin: "0 auto",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    backgroundColor: "white",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0",
  },
  leftCol: {
    flex: "0 0 100%",
    maxWidth: "100%",
    padding: "40px",
  },
  rightCol: {
    flex: "0 0 100%",
    maxWidth: "100%",
    padding: "40px",
    position: "relative",
  },
  leftPanel: {
    backgroundColor: "white",
  },
  logo: {
    width: "200px",
    marginBottom: "30px",
  },
  logoText: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#1a3b5c",
    letterSpacing: "2px",
    marginBottom: "5px",
  },
  logoSubtext: {
    fontSize: "12px",
    color: "#1a3b5c",
    letterSpacing: "3px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a3b5c",
    marginBottom: "20px",
  },
  duration: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#6c757d",
    marginBottom: "20px",
    fontSize: "16px",
  },
  description: {
    color: "#495057",
    lineHeight: "1.6",
    fontSize: "16px",
  },
  rightPanel: {
    backgroundColor: "#ffffff",
    position: "relative",
  },
  ribbon: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "120px",
    height: "120px",
    overflow: "hidden",
  },
  ribbonText: {
    position: "absolute",
    top: "28px",
    right: "-25px",
    transform: "rotate(45deg)",
    backgroundColor: "#5a6c7d",
    color: "white",
    padding: "8px 40px",
    fontSize: "11px",
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  calendarHeader: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1a3b5c",
    marginBottom: "30px",
    textAlign: "center",
  },
  monthNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  navButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#1a3b5c",
    cursor: "pointer",
    padding: "5px 10px",
  },
  monthYear: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a3b5c",
  },
  calendar: {
    width: "100%",
  },
  weekHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
    marginBottom: "10px",
  },
  dayHeader: {
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "600",
    color: "#6c757d",
    padding: "8px 0",
    textTransform: "uppercase",
  },
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
  },
  dayCell: {
    aspectRatio: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    backgroundColor: "transparent",
    color: "#495057",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.2s",
  },
  dayCellHover: {
    backgroundColor: "#e9ecef",
  },
  dayCellAvailable: {
    backgroundColor: "#0066cc",
    color: "white",
    fontWeight: "600",
  },
  dayCellSelected: {
    backgroundColor: "#0052a3",
    color: "white",
    fontWeight: "600",
  },
  dayCellEmpty: {
    cursor: "default",
  },
  timezone: {
    marginTop: "30px",
  },
  timezoneLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#495057",
    marginBottom: "8px",
  },
  timezoneSelect: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #dee2e6",
    fontSize: "14px",
  },
};

// Media query styles
const mediaQueries = `
  @media (min-width: 992px) {
    .left-col {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .right-col {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }
`;

const VirtualAppointmentModal = ({}) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)); // October 2025
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);

  const availableDates = [29, 30];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

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

  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const getDayCellStyle = (day) => {
    const isAvailable = availableDates.includes(day);
    const isSelected = selectedDate === day;
    const isHovered = hoveredDate === day;

    if (isSelected) {
      return { ...styles.dayCell, ...styles.dayCellSelected };
    }
    if (isAvailable && isHovered) {
      return { ...styles.dayCell, ...styles.dayCellAvailable };
    }
    if (isAvailable) {
      return { ...styles.dayCell, ...styles.dayCellAvailable };
    }
    if (isHovered && day) {
      return { ...styles.dayCell, ...styles.dayCellHover };
    }
    return styles.dayCell;
  };

  return (
    <>
      <style>{mediaQueries}</style>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.row}>
            <div className="left-col" style={styles.leftCol}>
              <div style={styles.leftPanel}>
                <div style={styles.logo}>
                  <div style={styles.logoText}>WITH CLARITY</div>
                  <div style={styles.logoSubtext}>NEW YORK</div>
                </div>
                <div
                  style={{
                    color: "#6c757d",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  With Clarity
                </div>
                <h1 style={styles.title}>Book a Virtual Appointment</h1>
                <div style={styles.duration}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 5V10L13 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>45 min</span>
                </div>
                <p style={styles.description}>
                  Meet virtually for a one-on-one with a jewelry specialist. We
                  look forward to assisting you in discovering your dream piece!
                </p>
              </div>
            </div>
            <div className="right-col" style={styles.rightCol}>
              <div style={styles.rightPanel}>
                <div style={styles.ribbon}>
                  <div style={styles.ribbonText}>Powered by Calendly</div>
                </div>

                <h2 style={styles.calendarHeader}>Select a Date & Time</h2>

                <div style={styles.monthNav}>
                  <button
                    style={styles.navButton}
                    onClick={previousMonth}
                    aria-label="Previous month"
                  >
                    ‹
                  </button>
                  <div style={styles.monthYear}>
                    {monthNames[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </div>
                  <button
                    style={styles.navButton}
                    onClick={nextMonth}
                    aria-label="Next month"
                  >
                    ›
                  </button>
                </div>

                <div style={styles.calendar}>
                  <div style={styles.weekHeader}>
                    {dayNames.map((day) => (
                      <div key={day} style={styles.dayHeader}>
                        {day}
                      </div>
                    ))}
                  </div>

                  <div style={styles.calendarGrid}>
                    {[...Array(firstDay === 0 ? 6 : firstDay - 1)].map(
                      (_, i) => (
                        <div
                          key={`empty-${i}`}
                          style={{ ...styles.dayCell, ...styles.dayCellEmpty }}
                        ></div>
                      )
                    )}
                    {[...Array(daysInMonth)].map((_, i) => {
                      const day = i + 1;
                      return (
                        <button
                          key={day}
                          style={getDayCellStyle(day)}
                          onClick={() =>
                            availableDates.includes(day) && setSelectedDate(day)
                          }
                          onMouseEnter={() => setHoveredDate(day)}
                          onMouseLeave={() => setHoveredDate(null)}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={styles.timezone}>
                  <div style={styles.timezoneLabel}>Time zone</div>
                  <select style={styles.timezoneSelect}>
                    <option>🌍 India Standard Time (1:05pm)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualAppointmentModal;
