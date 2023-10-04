import React, { useState } from 'react';
import ReactPlayer from 'react-player';

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
        style={customStyles}

      >
        <div className={styles.videoPlayer}>
            <div className={styles.buttonContainer}>
                <FontAwesomeIcon icon={faXmark} onClick={closeModal} className={styles.modalButtn}/>
            </div>
            <div className={styles.videoContainer}>
              <ReactPlayer
                url={videoUrl}
                controls={true} // Show video controls (play, pause, volume, etc.)
                width='80vw'
                height='60vh'
              />
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
