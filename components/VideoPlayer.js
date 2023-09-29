import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/VideoPlayer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';



// Modal.setAppElement('#root'); // Set the root element for accessibility

const VideoPlayer = ({ videoUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <button onClick={openModal} className={styles.button}>PLAY</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        // className={styles.modal}
        style={customStyles}

      >
        <div className={styles.videoPlayer}>
            <div className={styles.buttonContainer}>
                <FontAwesomeIcon icon={faXmark} onClick={closeModal} className={styles.modalButtn}/>
            </div>
            <video controls width={400}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
