import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonCV from "../../data/CvData.json";

{
  /* .map loops trough every element in array. (proj, index) proj is the object and index is the position in array. Join combines every object in array to one string*/
}
function Portfolio() {
  return (
    <>
      <Navbar />
      {/* Top content*/}
      <main className="bg-gray-50 min-h-screen py-12 md:px-16 rounded-lg">
        <div className="px-4 md:px-0 max-w-full md:max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
            {JsonCV.name}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center">
            {JsonCV.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-3 sm:pt-4 pb-4 sm:pb-6">
            {JsonCV.profile}
          </p>
        </div>
        <section className="px-4 md:px-0 max-w-full md:max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Left Column: Projects & Experience */}
          <div className="md:w-2/3 flex flex-col">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl text-black font-semibold border-b-2 border-gray-200 pb-1 mb-2">
                Projects
              </h3>
              {JsonCV.projects?.map((proj, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-base sm:text-lg font-medium text-gray-800">
                    {proj.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    {proj.description}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm italic mt-1">
                    Tech: {proj.tech.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            {/* Work Experience */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black sm:text-xl md:text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
                Experience
              </h3>
              {JsonCV.work_experience?.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-base sm:text-lg font-medium text-gray-800">
                    {exp.role} - {exp.company}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {exp.years}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Skills */}
          <div className="md:w-1/3 flex flex-col">
            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg text-black sm:text-xl md:text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
                Education
              </h3>
              {JsonCV.education?.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-base sm:text-lg font-medium text-gray-800">
                    {edu.program}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {edu.school} ({edu.years})
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black sm:text-xl md:text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
                Skills
              </h3>
              {JsonCV.skills &&
                Object.entries(JsonCV.skills).map(([category, skillsArray]) => (
                  <div key={category} className="mb-4">
                    <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 capitalize mb-2">
                      {category}
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {skillsArray.map((skill) => (
                        <li
                          key={skill}
                          className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
