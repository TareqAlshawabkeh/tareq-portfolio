"use client";
import {
  Code,
  ExternalLink,
  PlayCircle,
} from "lucide-react";

interface ProjectProps {
  title: string;
  role: string;
  date: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  icon: any;
  video?: string;
  gallery?: string[];
  onOpenMedia?: (
    title: string,
    images?: string[],
    video?: string,
  ) => void;
}

export default function ProjectCard({
  title,
  role,
  date,
  description,
  tech,
  github,
  live,
  icon: Icon,
  video,
  gallery,
  onOpenMedia,
}: ProjectProps) {
  // Check if there is media to show the button
  const hasMedia =
    (gallery &&
      gallery.length >
        0) ||
    video;

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100 leading-tight mb-1">
            {title}
          </h3>
          <p className="text-sm text-blue-400 font-medium">
            {role}{" "}
            <span className="text-slate-500 mx-1">
              •
            </span>{" "}
            {date}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
        {
          description
        }
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map(
          (
            item,
          ) => (
            <span
              key={
                item
              }
              className="bg-slate-900 border border-slate-700 text-blue-400 text-xs px-3 py-1 rounded-full font-medium"
            >
              {item}
            </span>
          ),
        )}
      </div>

      {/* Links & Modal Button */}
      <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-slate-700/50">
        {github && (
          <a
            href={
              github
            }
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Code className="w-4 h-4 mr-2" />{" "}
            View
            Source
          </a>
        )}
        {live && (
          <a
            href={
              live
            }
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />{" "}
            Live
            Demo
          </a>
        )}

        {/* Updated Button: Now Amber/Gold instead of Blue */}
        {hasMedia &&
          onOpenMedia && (
            <button
              onClick={() =>
                onOpenMedia(
                  title,
                  gallery,
                  video,
                )
              }
              className="flex items-center text-sm text-amber-500 hover:text-amber-400 font-bold transition-colors ml-auto cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 mr-2" />{" "}
              View
              Demo &
              Gallery
            </button>
          )}
      </div>
    </div>
  );
}
