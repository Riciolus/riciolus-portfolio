import Visit from "@/icons/Visit";

type TimelineItem = {
  period: string;
  status: string;
  title: string;
  image: string;
  url: string;
  description: string;
  techstack: string[];
};

const timeline: TimelineItem[] = [
  {
    period: "May 2024 - Present",
    status: "In Progress",
    title: "Jobpilot AI Career Assistant",
    image: "/projects/jobcopilot.png",
    url: "https://jobcopilot.vercel.app",
    description:
      "AI-powered career assistant — helping you chat with a career advisor, review your CV, and find relevant job opportunities.Think of it as your personal recruiter, available 24/7.",
    techstack: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL"],
  },
  {
    period: "Mar 2025 - Apr 2025",
    status: "Completed",
    title: "Danantara Remake",
    image: "/projects/danantara.png",
    url: "https://danantara-v02.vercel.app",
    description:
      "A modern remake of Danantara, redesigned with Next.js and three.js to deliver an interactive and visually engaging web experience with improved performance and responsiveness.",
    techstack: ["Next.js", "Three.js"],
  },
  {
    period: "Jan 2025 - Feb 2025",
    status: "Completed",
    title: "VitalsGPT",
    image: "/projects/vitals-gpt.png",
    url: "https://www.vitalsgpt.space",
    description:
      "An AI-powered web application that assists users with medical-related inquiries by leveraging large language models. Built with Next.js for the frontend, integrated with Hugging Face for AI processing, and backed by NeonDB for scalable data storage.",
    techstack: ["Next.js", "Hugging Face", "NeonDB"],
  },
  {
    period: "Oct 2024 - Dec 2024",
    status: "Completed",
    title: "Heyho Todolist",
    image: "/projects/heyho-todolist.png",
    url: "https://heyhoo.vercel.app",
    description:
      "A task management web application that helps users stay organized by allowing them to create, prioritize, and track their daily tasks with a clean and intuitive interface.",
    techstack: ["Next.js", "Prisma", "Supabase", "Tailwind"],
  },
  {
    period: "Jun 2024 - Jul 2024",
    status: "Completed",
    title: "Dogflix",
    image: "/projects/dogflix.png",
    url: "https://rbxcorner.vercel.app",
    description:
      "A simple movie browsing website that allows users to explore films using data from the TMDB API, featuring a clean and easy-to-navigate interface.",

    techstack: ["React", "Tailwind"],
  },

  {
    period: "Aug 2025 - Present",
    status: "In Progress",
    title: "RbxCorner Robux Top Up",
    image: "/projects/rbxcorner.png",
    url: "https://rbxcorner.vercel.app",
    description:
      "A web platform that allows users to top up Robux seamlessly through a secure and user-friendly interface.",
    techstack: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL"],
  },
  {
    period: "Jan 2024 - Apr 2024",
    status: "Completed",
    title: "Cakeaine Cakeshop",
    image: "/projects/cakeaine.png",
    url: "https://cakeaine-shop.vercel.app",
    description:
      "An online cake shop website that showcases a variety of cakes and provides a simple browsing experience for customers.",
    techstack: ["HTML", "CSS", "Javascript"],
  },
];

export default function ExperienceSection() {
  return (
    <section aria-labelledby="experience-projects" className="space-y-4 ">
      <h3 className="font-bold text-3xl mb-5">Experience & Projects</h3>

      <div className="relative flex min-h-full">
        {/* Vertical Line */}
        <div className="absolute w-px left-1 bg-gradient-to-b from-blue-300/5 via-neutral-700 to-blue-400/5 h-full"></div>

        {/* Timeline Points */}
        <div className="relative flex flex-col justify-between gap-12 w-full">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 w-full">
              {/* Dots */}
              <div className="xl:w-3 xl:h-3 md:w-3 md:h-2.5 w-4 h-2 border bg-[#111111] border-neutral-700 rounded-full"></div>

              {/* Content */}
              <div>
                <span className="mr-2">{item.period}</span>
                <span>* {item.status}</span>
                <br />
                <span className="text-xl font-semibold">{item.title}</span>

                {/* Image Preview */}
                <div className="relative w-fit group transition mt-1">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-1 py-0.5 bg-neutral-900/90 text-neutral-200 rounded-md font-sans text-sm font-semibold cursor-pointer flex items-center justify-center space-x-1"
                    >
                      <Visit />
                      <span>Visit Site</span>
                    </a>
                  </div>
                  <img
                    src={item.image}
                    alt="Preview"
                    className="w-80 border border-neutral-700 rounded-md object-contain"
                  />
                </div>

                {/* i want it to have some mono */}
                <p className="mt-1">{item.description}</p>

                <div className="flex flex-wrap gap-2 mt-0.5">
                  {item.techstack.map((tech) => (
                    <div
                      key={tech}
                      className="px-2 py-1 border rounded-3xl border-neutral-600 font-sans font-semibold bg-blue-500/20 text-xs text-neutral-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
