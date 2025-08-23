import AboutMeSection from "@/components/AboutMeSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Profile from "@/components/Profile";
import Spacer from "@/components/Spacer";

export default function Home() {
  return (
    <div className="bg-[#111111] text-neutral-300 min-h-screen flex items-center justify-center w-full px-[clamp(1rem,10vw,20rem)] py-[clamp(3rem,3vw,3rem)]">
      <div className="lg:flex flex-row gap-6 font-mono w-full">
        {/* Left Side Profile */}
        <Profile />

        <Spacer />

        {/* Right Side */}
        <div className="x w-full pt-5 lg:pt-0 space-y-10 lg:ml-[20vw]">
          <AboutMeSection />
          <ExperienceSection />
          <EducationSection />
        </div>
      </div>
    </div>
  );
}
