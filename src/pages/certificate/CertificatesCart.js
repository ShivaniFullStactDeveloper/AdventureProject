import React, { useState } from "react";
import '../../styles/certificate_style/CertificatesCart.css';
import certificateData from "../certificate/CertificateData";
import CertificateModal from "../certificate/CertificateModal";

const CertificatesCart = ({ filteredCertificates = certificateData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < filteredCertificates.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div>
      <div className="certificate-wrapper">
        {filteredCertificates.map(({ id, alert, image }, index) => (
          <div 
            className="certificate-card" 
            key={id}
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            aria-label={`View certificate ${id}`}
          >
            <img src={image} alt={alert} />
          </div>
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="no-certificates">
          <p>No certificates found. Try a different search.</p>
        </div>
      )}

      <CertificateModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={modalOpen && filteredCertificates.length > 0 ? filteredCertificates[currentIndex].image : ""}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasPrevious={currentIndex > 0}
        hasNext={currentIndex < filteredCertificates.length - 1}
      />
    </div>
  );
};

export default CertificatesCart;