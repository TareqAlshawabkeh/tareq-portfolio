"use client";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  X,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  useState,
  useEffect,
} from "react";

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images?: string[];
  video?: string;
}

export default function MediaModal({
  isOpen,
  onClose,
  title,
  images,
  video,
}: MediaModalProps) {
  // State for the image slider
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen)
      setCurrentIndex(
        0,
      );
  }, [isOpen]);

  if (!isOpen)
    return null;

  const nextImage =
    () => {
      if (images) {
        setCurrentIndex(
          (prev) =>
            prev ===
            images.length -
              1
              ? 0
              : prev +
                1,
        );
      }
    };

  const prevImage =
    () => {
      if (images) {
        setCurrentIndex(
          (prev) =>
            prev ===
            0
              ? images.length -
                1
              : prev -
                1,
        );
      }
    };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        {/* Background Overlay */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={
            onClose
          }
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{
            scale: 0.95,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.95,
            opacity: 0,
          }}
          className="relative bg-slate-900 border border-slate-800 w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <h3 className="text-xl font-bold text-white">
              {
                title
              }
            </h3>
            <button
              onClick={
                onClose
              }
              className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-8 items-center">
            {/* Video Section */}
            {video && (
              <div className="w-full max-w-4xl">
                <h4 className="text-amber-500 font-bold mb-4 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />{" "}
                  Project
                  Showcase
                  Video
                </h4>
                <video
                  controls
                  className="w-full rounded-xl border border-slate-700 shadow-lg bg-black"
                >
                  <source
                    src={
                      video
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            )}

            {/* Image Slider Section */}
            {images &&
              images.length >
                0 && (
                <div className="w-full max-w-4xl flex flex-col items-center">
                  <h4 className="text-amber-500 font-bold mb-4 w-full text-left">
                    Gallery
                    &
                    Presentation
                  </h4>

                  <div className="relative w-full aspect-video bg-black/50 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden group">
                    {/* Current Image */}
                    <img
                      src={
                        images[
                          currentIndex
                        ]
                      }
                      alt={`Slide ${currentIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Slider Controls (Only show if more than 1 image) */}
                    {images.length >
                      1 && (
                      <>
                        <button
                          onClick={
                            prevImage
                          }
                          className="absolute left-4 p-2 bg-slate-900/80 hover:bg-amber-500 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={
                            nextImage
                          }
                          className="absolute right-4 p-2 bg-slate-900/80 hover:bg-amber-500 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 px-3 py-1 bg-slate-900/80 text-slate-300 text-xs rounded-full">
                          {currentIndex +
                            1}{" "}
                          /{" "}
                          {
                            images.length
                          }
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
