import React, { useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import '../../styles/certificate_style/CertificateModal.css';



const CertificateModal = ({ 
  isOpen, 
  onClose, 
  currentImage, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext 
}) => {
  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (hasPrevious) onPrevious();
          break;
        case "ArrowRight":
          if (hasNext) onNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!isOpen) return null;

  return (
    <div className="certificate-modal-overlay" onClick={onClose}>
      <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="certificate-modal-close" 
          onClick={onClose}
          aria-label="Close certificate view"
        >
          <FaTimes />
        </button>
        
        <div className="certificate-modal-image-container">
          <img 
            src={currentImage} 
            alt="Certificate" 
            className="certificate-modal-image"
          />
        </div>
        
        <div className="certificate-modal-navigation">
          <button 
            className={`certificate-modal-nav-button previous ${!hasPrevious ? 'disabled' : ''}`}
            onClick={onPrevious}
            disabled={!hasPrevious}
            aria-label="Previous certificate"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            className={`certificate-modal-nav-button next ${!hasNext ? 'disabled' : ''}`}
            onClick={onNext}
            disabled={!hasNext}
            aria-label="Next certificate"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;