"use client";
import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import MediaModal from "../components/MediaModal";
import {
  PlayCircle,
  Award,
} from "lucide-react";

export default function Home() {
  const [
    modalContent,
    setModalContent,
  ] = useState<{
    isOpen: boolean;
    title: string;
    images?: string[];
    video?: string;
    presentation?: string[]; // 👈 السطر الجديد
  }>({
    isOpen: false,
    title: "",
    images: [],
    video: "",
    presentation:
      [], // 👈 السطر الجديد
  });

  const openModal =
    (
      title: string,
      images?: string[],
      video?: string,
      presentation?: string[], // 👈 السطر الجديد
    ) => {
      setModalContent(
        {
          isOpen: true,
          title,
          images,
          video,
          presentation, // 👈 السطر الجديد
        },
      );
    };

  const closeModal =
    () => {
      setModalContent(
        {
          ...modalContent,
          isOpen: false,
        },
      );
    };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen">
      <MediaModal
        isOpen={
          modalContent.isOpen
        }
        onClose={
          closeModal
        }
        title={
          modalContent.title
        }
        images={
          modalContent.images
        }
        video={
          modalContent.video
        }
        presentation={
          modalContent.presentation
        } // 👈 السطر السحري الجديد
      />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-start mb-12 pt-2 pb-4 overflow-visible">
        {/* 1. الخلفية التقنية (الشبكة والشعاع الخلفي) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* الشبكة الهادئة */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:35px_35px] opacity-15"></div>
          {/* شعاع الضوء الكبير في الخلفية */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        </div>

        {/* 2. حاوية الصورة (بالمنتصف مع الشعاع المتفاعل) */}
        <div className="w-full flex justify-center mb-2 relative">
          <div className="relative w-24 h-24 md:w-28 md:h-29 group">
            {/* الشعاع (الهالة) - موجود دائماً ويزيد عند التأشير بالماوس */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            {/* نبض خفيف جداً خلف الصورة ليعطي حياة للموقع */}
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-10"></div>

            <img
              src="/profile.jpg"
              alt="Eng. Tareq"
              className="relative w-full h-full rounded-full object-cover border-2 border-blue-500/30 shadow-2xl z-10 transition-transform duration-300 group-hover:scale-105"
            />

            {/* تأثير دوائر الـ CPU حول الصورة */}
            <div className="absolute -inset-2 border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -inset-4 border border-slate-800/50 rounded-full"></div>
          </div>
        </div>

        {/* 3. النصوص والأزرار (موازاة لليسار وبأحجام متناسقة) */}
        <div className="z-20 w-full">
          <p className="text-blue-500 font-mono mb-2 text-sm md:text-base tracking-widest uppercase opacity-80">
            Hi, my
            name is
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-3 tracking-tight">
            {
              portfolioData
                .personal
                .name
            }
            <span className="text-blue-500">
              .
            </span>{" "}
            {/* النقطة الزرقاء اللي طلبتها */}
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-6 leading-tight">
            {
              portfolioData
                .personal
                .title
            }
          </h2>

          <p className="text-base md:text-lg text-slate-300 max-w-4xl mb-8 leading-relaxed border-l-2 border-blue-600/20 pl-6 py-1">
            {
              portfolioData
                .personal
                .bio
            }
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white font-semibold rounded-lg transition-all text-sm md:text-base"
            >
              View
              Projects
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="px-5 py-2.5 bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-white font-semibold rounded-lg transition-all text-sm md:text-base"
            >
              Contact
              Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="flex flex-col items-start w-full mb-32 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-blue-500"></span>
          Engineering
          Mindset
        </h2>
        <div className="text-slate-400 leading-relaxed space-y-4 max-w-3xl text-lg">
          <p>
            I am a
            Computer
            Engineering
            graduate
            from the
            University
            of
            Jordan,
            specializing
            in
            Artificial
            Intelligence,
            Machine
            Learning,
            and Data
            Engineering.
            My core
            focus
            lies in
            building
            real-time,
            AI-integrated
            systems
            and
            API-driven
            applications
            from
            design
            to
            deployment.
          </p>
          <p>
            Unlike
            traditional
            software
            development,
            I
            approach
            problems
            with a
            systems
            engineering
            mindset.
            Whether
            it is
            architecting
            a
            real-time
            cryptocurrency
            trading
            platform
            with
            WebSocket
            data
            pipelines
            or
            optimizing
            YOLOv8
            Nano for
            aerial
            object
            detection
            on edge
            devices,
            I
            prioritize
            clean
            architecture,
            scalability,
            and
            strict
            deterministic
            performance.
          </p>
          <p>
            My goal
            is to
            continue
            bridging
            the gap
            between
            advanced
            machine
            learning
            models
            and
            robust
            backend
            infrastructure
            to solve
            complex,
            real-world
            problems.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="flex flex-col items-start w-full scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-blue-500"></span>
          Engineering
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {portfolioData.projects.map(
            (
              project,
            ) => (
              <ProjectCard
                key={
                  project.id
                }
                title={
                  project.title
                }
                role={
                  project.role
                }
                date={
                  project.date
                }
                description={
                  project.description
                }
                tech={
                  project.tech
                }
                github={
                  project.github
                }
                live={
                  project.live
                }
                icon={
                  project.icon
                }
                video={
                  project.video
                }
                gallery={
                  project.gallery
                }
                presentation={
                  project.presentation
                } // 👈 التمرير الجديد
                onOpenMedia={
                  openModal
                }
              />
            ),
          )}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="flex flex-col items-start w-full mt-32 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-blue-500"></span>
          Experience
          &
          Leadership
        </h2>

        <div className="w-full">
          {portfolioData.experience.map(
            (
              exp,
            ) => (
              <ExperienceCard
                key={
                  exp.id
                }
                role={
                  exp.role
                }
                company={
                  exp.company
                }
                date={
                  exp.date
                }
                description={
                  exp.description
                }
                icon={
                  exp.icon
                }
              />
            ),
          )}
        </div>
      </section>

      {/* SKILLS SECTION - Cleaned up */}
      <section
        id="skills"
        className="flex flex-col items-start w-full mt-32 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-blue-500"></span>
          Technical
          Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {Object.entries(
            portfolioData.skills,
          ).map(
            ([
              category,
              skills,
            ]) => (
              <div
                key={
                  category
                }
                className="bg-slate-800/40 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <h3 className="text-lg font-bold text-slate-200 capitalize mb-4 group-hover:text-blue-400 transition-colors">
                  {category.replace(
                    /_/g,
                    " ",
                  )}
                </h3>
                <ul className="space-y-3">
                  {skills.map(
                    (
                      skill,
                    ) => (
                      <li
                        key={
                          skill
                        }
                        className="text-slate-400 text-sm font-medium flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                        {
                          skill
                        }
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section
        id="achievements"
        className="flex flex-col items-start w-full mt-32 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-amber-500"></span>
          Key
          Achievements
          & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {portfolioData.achievements.map(
            (
              achievement,
              index,
            ) => {
              const Icon =
                achievement.icon;
              const isWinner =
                index ===
                0;
              const hasMedia =
                achievement.gallery &&
                achievement
                  .gallery
                  .length >
                  0;

              return (
                <div
                  key={
                    achievement.id
                  }
                  className="relative group"
                >
                  {isWinner && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/40 to-amber-500/0 rounded-xl blur opacity-75 animate-pulse"></div>
                  )}

                  <div
                    className={`relative z-10 p-6 bg-slate-800/40 rounded-xl border flex flex-col h-full overflow-hidden transition-all duration-500 ${isWinner ? "border-amber-500/30 hover:border-amber-500/50" : "border-slate-800 hover:border-amber-500/50"}`}
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 bg-slate-800/80 text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 border border-slate-700 group-hover:border-amber-500/30">
                        <Icon className="w-7 h-7" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-1 transition-colors duration-300 text-slate-100 group-hover:text-amber-400">
                          {
                            achievement.title
                          }
                        </h3>
                        <p
                          className={`text-sm font-semibold mb-3 transition-colors ${isWinner ? "text-amber-500/80" : "text-slate-500 group-hover:text-amber-500/60"}`}
                        >
                          {
                            achievement.event
                          }
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {
                            achievement.description
                          }
                        </p>
                      </div>
                    </div>

                    {hasMedia && (
                      <button
                        onClick={() =>
                          openModal(
                            achievement.title,
                            achievement.gallery,
                          )
                        }
                        className="mt-auto pt-4 flex items-center text-sm font-bold transition-colors cursor-pointer w-fit text-amber-500 hover:text-amber-400"
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />{" "}
                        View
                        Event
                        Gallery
                      </button>
                    )}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </section>

      {/* CREDENTIALS & RESUME SECTION (الشهادة وبطاقة السيرة الذاتية متوازيات) */}
      {/* CREDENTIALS & RESUME SECTION */}
      <section
        id="credentials"
        className="w-full mt-24 pt-16 border-t border-slate-800/50"
      >
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-500" />
            Credentials
            & Resume
          </h2>
          <p className="text-slate-400 mt-2">
            Verified
            certifications
            and
            detailed
            professional
            history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* 1. بطاقة الشهادة */}
          {portfolioData.certifications.map(
            (
              cert,
            ) => {
              const Icon =
                cert.icon;
              const hasMedia =
                cert.gallery &&
                cert
                  .gallery
                  .length >
                  0;

              return (
                <div
                  key={
                    cert.id
                  }
                  className="bg-slate-800/30 p-6 rounded-xl border border-slate-800 flex flex-col gap-4 hover:border-blue-500/50 transition-all duration-300 group shadow-sm h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 rounded-lg text-blue-500 group-hover:scale-110 transition-transform border border-slate-800 group-hover:border-blue-500/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                        {
                          cert.title
                        }
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {
                          cert.issuer
                        }{" "}
                        •{" "}
                        {
                          cert.date
                        }
                      </p>
                    </div>
                  </div>
                  {hasMedia && (
                    <button
                      onClick={() =>
                        openModal(
                          cert.title,
                          cert.gallery,
                        )
                      }
                      className="mt-auto pt-4 border-t border-slate-800/50 flex items-center text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer w-fit"
                    >
                      <PlayCircle className="w-5 h-5 mr-2" />{" "}
                      View
                      Certificate
                    </button>
                  )}
                </div>
              );
            },
          )}

          {/* 2. بطاقة السيرة الذاتية (الجديدة والمتناسقة) */}
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-800 flex flex-col gap-4 hover:border-amber-500/50 transition-all duration-300 group shadow-sm h-full">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-amber-500 group-hover:scale-110 transition-transform border border-slate-800 group-hover:border-amber-500/30">
                {/* أيقونة ملف للسيرة الذاتية */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  Comprehensive
                  Resume
                </h4>
                <p className="text-sm text-slate-400 mt-1">
                  Detailed
                  overview
                  of
                  my
                  AI
                  models,
                  system
                  architectures,
                  and
                  technical
                  background.
                </p>
              </div>
            </div>
            <a
              href="/Resume-Tareq-AlShawabkeh.pdf"
              target="_blank"
              rel="noreferrer"
              download // 👈 هاي الكلمة بتجبر المتصفح يحمل الملف بدل ما يفتحه
              className="mt-auto pt-4 border-t border-slate-800/50 flex items-center text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors cursor-pointer w-fit"
            >
              {/* أيقونة تحميل */}
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Download
              PDF
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER SECTION (رجعناه زي ما كان بالضبط) */}
      <section
        id="contact"
        className="w-full mt-10 border-t border-slate-800 pt-20 pb-10 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-6">
          Let's
          Build
          Something.
        </h2>
        <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
          I am
          always
          open to
          discussing
          new
          opportunities,
          complex
          engineering
          challenges,
          or AI
          system
          architectures.
          Let's
          connect.
        </p>

        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 mb-16 shadow-lg shadow-blue-900/20"
        >
          Say Hello
        </a>

        {/* Social Icons with Labels */}
        <div className="flex gap-8 mb-12">
          {portfolioData.socials.map(
            (
              social,
            ) => {
              const Icon =
                social.icon;
              return (
                <a
                  key={
                    social.label
                  }
                  href={
                    social.url
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="p-3 bg-slate-800/50 rounded-lg text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-800 transition-all border border-slate-800 group-hover:border-blue-500/50 group-hover:-translate-y-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-slate-500 group-hover:text-blue-400 transition-colors">
                    {
                      social.label
                    }
                  </span>
                </a>
              );
            },
          )}
        </div>

        <p className="text-slate-600 text-sm font-medium">
          ©{" "}
          {new Date().getFullYear()}{" "}
          {
            portfolioData
              .personal
              .name
          }
          .
          Engineered
          with
          Next.js &
          Tailwind.
        </p>
      </section>
    </div>
  );
}
