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
  LayoutTemplate,
  Play,
  BarChart3,
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
  presentation?: string[]; // أضفنا البرزنتيشن هون
}

export default function MediaModal({
  isOpen,
  onClose,
  title,
  images,
  video,
  presentation,
}: MediaModalProps) {
  // حالة التبويبات (Tabs)
  const [
    activeTab,
    setActiveTab,
  ] = useState<
    | "app"
    | "demo"
    | "results"
  >("app");
  // حالة الـ Slider تبعك
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  // Reset index & tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(
        0,
      );
      // اختيار التبويب الافتراضي الذكي
      if (
        images &&
        images.length >
          0
      )
        setActiveTab(
          "app",
        );
      else if (
        video
      )
        setActiveTab(
          "demo",
        );
      else if (
        presentation &&
        presentation.length >
          0
      )
        setActiveTab(
          "results",
        );
    }
  }, [
    isOpen,
    images,
    video,
    presentation,
  ]);

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

          {/* التبويبات (Tabs) */}
          <div className="flex border-b border-slate-800 bg-slate-900">
            {images &&
              images.length >
                0 && (
                <button
                  onClick={() =>
                    setActiveTab(
                      "app",
                    )
                  }
                  className={`flex-1 flex items-center justify-center py-3 text-sm font-semibold transition-colors border-b-2 ${
                    activeTab ===
                    "app"
                      ? "border-blue-500 text-blue-500 bg-blue-500/5"
                      : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <LayoutTemplate className="w-4 h-4 mr-2" />{" "}
                  App
                  Interface
                </button>
              )}
            {video && (
              <button
                onClick={() =>
                  setActiveTab(
                    "demo",
                  )
                }
                className={`flex-1 flex items-center justify-center py-3 text-sm font-semibold transition-colors border-b-2 ${
                  activeTab ===
                  "demo"
                    ? "border-amber-500 text-amber-500 bg-amber-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <Play className="w-4 h-4 mr-2" />{" "}
                Live
                Demo
              </button>
            )}
            {presentation &&
              presentation.length >
                0 && (
                <button
                  onClick={() =>
                    setActiveTab(
                      "results",
                    )
                  }
                  className={`flex-1 flex items-center justify-center py-3 text-sm font-semibold transition-colors border-b-2 ${
                    activeTab ===
                    "results"
                      ? "border-emerald-500 text-emerald-500 bg-emerald-500/5"
                      : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />{" "}
                  System
                  Results
                </button>
              )}
          </div>

          {/* Body */}
          <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-8 items-center custom-scrollbar">
            {/* 1. App Interface (Slider تبعك) */}
            {activeTab ===
              "app" &&
              images &&
              images.length >
                0 && (
                <div className="w-full max-w-4xl flex flex-col items-center">
                  <div className="relative w-full aspect-video bg-black/50 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden group shadow-lg">
                    <img
                      src={
                        images[
                          currentIndex
                        ]
                      }
                      alt={`Slide ${currentIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                    {images.length >
                      1 && (
                      <>
                        <button
                          onClick={
                            prevImage
                          }
                          className="absolute left-4 p-2 bg-slate-900/80 hover:bg-blue-500 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={
                            nextImage
                          }
                          className="absolute right-4 p-2 bg-slate-900/80 hover:bg-blue-500 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
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

            {/* 2. Video Section (حجم مرتب) */}
            {activeTab ===
              "demo" &&
              video && (
                <div className="w-full max-w-4xl flex justify-center items-center bg-black/40 rounded-xl border border-slate-800 p-2 shadow-lg">
                  <video
                    controls
                    autoPlay
                    className="rounded-lg w-full max-h-[60vh] object-contain"
                  >
                    <source
                      src={
                        video
                      }
                      type="video/mp4"
                    />
                    Your
                    browser
                    does
                    not
                    support
                    the
                    video
                    tag.
                  </video>
                </div>
              )}

            {/* 3. System Results Section (صور البرزنتيشن الـ 7) */}
            {activeTab ===
              "results" &&
              presentation &&
              presentation.length >
                0 && (
                <div className="w-full max-w-4xl flex flex-col gap-6">
                  {presentation.map(
                    (
                      img,
                      index,
                    ) => (
                      <div
                        key={
                          index
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={
                            img
                          }
                          alt={`Presentation slide ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ),
                  )}
                </div>
              )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
