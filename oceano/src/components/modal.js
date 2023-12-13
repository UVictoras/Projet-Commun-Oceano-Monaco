const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-md mx-auto my-6">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <button
                className="p-1 ml-auto bg-red-100 border-0 text-black"
                onClick={onClose}
              >
                <span className=" text-black ">
                  yo
                </span>
              </button>
            </div>
            
            <div className="relative p-6 flex-auto">{children}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;