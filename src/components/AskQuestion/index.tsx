import { useState, useEffect, useRef } from "react";

interface AskQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AskQuestionModal = ({ isOpen, onClose }: AskQuestionModalProps) => {
  const [content, setContent] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const [showConfirmClose, setShowConfirmClose] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    } else {
      setContent("");
      setIsDirty(false);
      setShowConfirmClose(false);
    }
  }, [isOpen]);

  const handleCloseClick = () => {
    if (isDirty) {
      setShowConfirmClose(true);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setContent("");
    setIsDirty(false);
    setShowConfirmClose(false);
    onClose();
  };

  const handleSubmit = () => {
    if (!content.trim()) return;
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0  z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative m-3">
          <textarea
            ref={textareaRef}
            placeholder="Type your question here..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setIsDirty(true);
            }}
            className="w-full p-2 border border-[#bfa4a4] outline-none rounded mb-4 h-32"
          />

          <div className="flex justify-between space-x-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={handleCloseClick}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-[#009966] text-white rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Close Dialog */}
      {showConfirmClose && (
        <>
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-xl max-w-sm w-full text-center shadow-2xl">
              <p className="mb-4">You have unsaved changes. Close anyway?</p>
              <div className="flex justify-center space-x-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setShowConfirmClose(false)}
                >
                  No
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={handleClose}
                >
                  Yes, close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AskQuestionModal;
