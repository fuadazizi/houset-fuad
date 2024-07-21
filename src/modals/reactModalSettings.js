import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById("root"));
ReactModal.defaultStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      overflow:"auto"
    },
    content: {}
  }