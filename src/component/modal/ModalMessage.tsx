import Modal from "react-modal";
import "./ModalMessage.css";
import close_svg from "../../image/close.svg";
import { SnsIcon } from "./SnsIcon";
import { ModalType, OverlayStyle, ContentStyle } from "../../Hook/Types";

export default function ModalMessge({
  modalOpen,
  headerText,
  buttonText,
  onClick,
  type,
  placeholder,
  icon,
  folderName,
  close,
}: ModalType) {
  const customModalStyle: Record<string, OverlayStyle | ContentStyle> = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      width: "100%",
      height: "100%",
      zIndex: "10",
    },
    content: {
      width: "400px",
      height: "280px",
      padding: "32px 40px",
      zIndex: "11",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      border: "1px solid var(--Linkbrary-gray20, #CCD5E3)",
      backgroundColor: "white",
      position: "relative",
    },
  };
  const styletype = ["blue", "red"].includes(type) ? type : "blue";
  return (
    <Modal
      isOpen={modalOpen} 
      style={customModalStyle}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <h4 className="modal_title">
        {headerText}
        <img
          src={close_svg}
          alt="모달창 닫기버튼"
          className="modal_closebtn"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        />
      </h4>
      {placeholder ? (
        <input className="modal_input" type="text" placeholder={placeholder} />
      ) : null}
      {folderName ? <p className="modal_folder_name">{folderName}</p> : null}
      {buttonText ? (
        <button
          className={["modal_btn", `modal_btn_${styletype}`].join(" ")}
          onClick={onClick}
        >
          {buttonText}
        </button>
      ) : null}
      {icon ? <SnsIcon /> : null}
    </Modal>
  );
}

ModalMessge.defaultProps = {
  type: "blue",
};

//나중에 버튼에서 어떤 동작을 구현해야할 때 onClick prop을 남겨야함
// onClick={onClick}
// 그러면 onClick 의 타입은?   onClick: (e: React.MouseEvent<HTMLElement>) => void 

  
  
