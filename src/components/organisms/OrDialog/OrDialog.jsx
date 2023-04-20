import { Portal } from "react-portal";
import { AiOutlineClose } from "react-icons/ai";
import FocusTrap from "focus-trap-react";

export const OrDialog = ({ title, children, onClose }) => {
  return (
    <Portal>
      <FocusTrap>
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#232323]/70">
          <div className="bg-[#232323] rounded-lg w-[80%] max-w-3xl max-h-[80%] p-10 relative">
            <header>
              <h2 className="mt-6 text-[28px] text-slate-50">{title}</h2>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-8 right-8"
              >
                <AiOutlineClose className="h-6 w-6 text-slate-50" />
              </button>
            </header>
            <div className="mt-10">{children}</div>
          </div>
        </div>
      </FocusTrap>
    </Portal>
  );
};
