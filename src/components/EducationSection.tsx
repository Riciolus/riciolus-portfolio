import BsiLogo from "@/icons/BSI";

const EducationSection = () => {
  return (
    <section className="space-y-4">
      <h3 className="font-bold text-3xl font-mono">Education</h3>
      <div className="flex items-center space-x-5">
        <BsiLogo />
        <div>
          <h5 className="text-lg">Bachelor of Information Systems</h5>
          <h5 className="text-gray-400">
            Bina Sarana Informatika University, Depok, Indonesia
          </h5>
          <span className="text-gray-400">Sept 2023 - Present</span>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
