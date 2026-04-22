interface ExperienceProps {
  role: string;
  company: string;
  date: string;
  description: string[];
  icon: any;
}

export default function ExperienceCard({
  role,
  company,
  date,
  description,
  icon: Icon,
}: ExperienceProps) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center absolute left-0 sm:left-24 top-0 h-full">
        <div className="h-full w-[2px] bg-slate-800 group-hover:bg-blue-900 transition-colors"></div>
        <div className="absolute top-7 -translate-x-1/2 left-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 z-10"></div>
      </div>

      {/* Date (Desktop view moves it to the left) */}
      <div className="hidden sm:block absolute left-0 top-6 w-20 text-right">
        <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
          {date}
        </span>
      </div>

      {/* Content Box */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">
              {role}
            </h3>
            <p className="text-sm font-medium text-slate-400">
              {
                company
              }
            </p>
          </div>
        </div>

        {/* Date (Mobile view) */}
        <div className="sm:hidden mb-4">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            {date}
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {description.map(
            (
              item,
              index,
            ) => (
              <li
                key={
                  index
                }
                className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"
              >
                <span className="text-blue-500 mt-1">
                  ▹
                </span>
                <span>
                  {
                    item
                  }
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
