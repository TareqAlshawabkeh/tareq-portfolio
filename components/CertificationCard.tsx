import { ExternalLink } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  icon: any;
  url?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  icon: Icon,
  url,
}: CertificationProps) {
  const CardContent =
    (
      <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-blue-500/50 transition-all group h-full cursor-pointer">
        <div className="p-2 bg-slate-900 rounded-lg text-blue-500 group-hover:scale-110 transition-transform border border-slate-800 group-hover:border-blue-500/30">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-400">
            {issuer}{" "}
            • {date}
          </p>
        </div>
        {/* أيقونة تظهر عند التأشير تدل على وجود رابط */}
        {url && (
          <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
        )}
      </div>
    );

  // إذا كان هناك رابط، اجعل الكرت بأكمله قابلاً للضغط
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="block h-full outline-none"
      >
        {
          CardContent
        }
      </a>
    );
  }

  return CardContent;
}
