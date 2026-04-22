import { portfolioData } from "../data/portfolio";

export default function Navbar() {
  // هذا السطر يتجاهل كلمة .Eng ويأخذ اسمك الأول ليكون شكل اللوجو نظيفاً
  const firstName =
    portfolioData.personal.name
      .replace(
        "Eng.",
        "",
      )
      .trim()
      .split(
        " ",
      )[0];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-xl text-white tracking-tighter"
        >
          {
            firstName
          }
          <span className="text-blue-500">
            .dev
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="hover:text-white transition-colors"
          >
            Awards
          </a>
          <a
            href="#credentials"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Credentials
          </a>
        </div>

        {/* Contact Button */}
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
