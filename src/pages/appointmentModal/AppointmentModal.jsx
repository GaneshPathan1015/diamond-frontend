import React, { useState } from "react";
import VirtualAppointmentModal from "./VirtualAppointmentModal";
import { X } from "lucide-react"; // Make sure you have lucide-react installed
import styles from "./AppointmentModal.module.css";
// import ShowroomModal from "./ShowroomModal";

const AppointmentModal = ({ isOpen, onClose }) => {
  const [showVirtualModal, setShowVirtualModal] = useState(false);
  const [showShowroomModal, setShowShowroomModal] = useState(false);
  if (!isOpen && !showVirtualModal && !showShowroomModal) {
    return null;
  }

  const handleSelect = (type) => {
    console.log(type);

    // Close main modal
    onClose();

    // Open respective modal
    if (type === "virtual") {
      setShowVirtualModal(true);
    } else if (type === "showroom") {
      setShowShowroomModal(true);
    }
  };

  return (
    <>
      {!showVirtualModal && !showShowroomModal && (
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.overlay2} />
            <div className={styles.content}>
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={28} />
              </button>

              <div className={styles.subtitle}>Tailored to You</div>

              <h1 className={styles.title}>Virtual or In-Person</h1>

              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => {
                    handleSelect("virtual");
                  }}
                >
                  Virtual Appointment
                </button>

                <button
                  className={styles.button}
                  onClick={() => {
                    handleSelect("showroom");
                  }}
                >
                  Showroom Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showVirtualModal && (
        <VirtualAppointmentModal onClose={() => setShowVirtualModal(false)} />
      )}

      {/* Showroom Modal */}
      {/*  {showShowroomModal && (
        <ShowroomModal onClose={() => setShowShowroomModal(false)} />
      )} */}
    </>
  );
};

export default AppointmentModal;
