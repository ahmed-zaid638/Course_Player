import { useEffect, useRef } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PdfModalProps {
  fileUrl: string;
  onClose: () => void;
}

export default function PdfModal({ onClose }: PdfModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const defaultLayout = defaultLayoutPlugin();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (overlayRef.current && e.target === overlayRef.current) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-md shadow-lg p-4 max-w-5xl w-[80%] h-[90vh] relative overflow-hidden">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={"/test.pdf"} plugins={[defaultLayout]} />
        </Worker>
      </div>
    </div>
  );
}
