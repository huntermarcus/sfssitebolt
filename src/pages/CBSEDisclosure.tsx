import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FileText, 
  Download, 
  Eye, 
  School, 
  Users, 
  Building, 
  Award
} from 'lucide-react';

export function CBSEDisclosure() {
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const tabs = [
    { id: 'general', label: 'General Information', icon: School },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'results', label: 'Academic Results', icon: Award },
    { id: 'staff', label: 'Staff Information', icon: Users },
    { id: 'infrastructure', label: 'Infrastructure', icon: Building }
  ];

  const generalInfo = [
    { field: "NAME OF THE SCHOOL", value: "MONTFORT SCHOOL" },
    { field: "STATE GOVERNMENT NOC No.", value: "48272/W28/2006 Dated 16-06-2006" },
    { field: "STATE RECOGNITION No.", value: "004-23-S-002600125 Valid Upto 10-01-2025" },
    { field: "CBSE AFFILIATION NO.", value: "1930205" },
    { field: "SCHOOL CODE", value: "55145" },
    { field: "CBSE AFFILIATION PERIOD", value: "01-04-2022 to 31-03-2027" },
    { field: "CATEGORY", value: "Senior Secondary School" },
    { field: "NAME OF THE PRINCIPAL", value: "BRO. ROBERT LOURDUSAMY" },
    { field: "QUALIFICATION", value: "M.A., B.ED" },
    { field: "SCHOOL EMAIL ID", value: "montfortsg@gmail.com" },
    { field: "SCHOOL WEBSITE", value: "www.montforttrichy.com" },
    { field: "COMPLETE ADDRESS WITH PIN CODE", value: "Balaji Nagar, Kattur, Trichy – 620 019" },
    { field: "CONTACT DETAILS ( LANDLINE / MOBILE )", value: "+91 – 431 – 2534047, 2534049" }
  ];

  const documents = [
    { name: "AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Affiliation-2027s.pdf" },
    { name: "SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE", link: "https://montforttrichy.com/wp-content/uploads/2023/06/SOCEITY REGISTRATION CERTIFICATE.pdf" },
    { name: "NO OBJECTION CERTIFICATE (NOC) ISSUED, BY THIS STATE GOVT.", link: "https://montforttrichy.com/wp-content/uploads/2023/06/NOC.pdf" },
    { name: "RECOGNITION CERTIFICATE UNDER RTE ACT, 2009", link: "https://montforttrichy.com/wp-content/uploads/2023/06/RECOGNITION_CERTIFICATES.pdf" },
    { name: "BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", link: "https://montforttrichy.com/wp-content/uploads/2023/06/BUILDING_SAFETY_CERTIFICATE.pdf" },
    { name: "FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Fire-Safety-Certificates.pdf" },
    { name: "THE DEO CERTIFICATE / SELF CERTIFICATION PROFORMA", link: "https://montforttrichy.com/wp-content/uploads/2023/06/SELF_CERTIFICATION_PROFORMA.pdf" },
    { name: "HEALTH AND SANITATION CERTIFICATE", link: "https://montforttrichy.com/wp-content/uploads/2023/06/WATERHEALTH_CERTIFICATE_2024.pdf" },
    { name: "WATER SAMPLE TEST REPORT", link: "https://montforttrichy.com/wp-content/uploads/2023/06/WATERREPORTS.pdf" },
    { name: "LAND CERTIFICATE", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Landcertificate.pdf" },
    { name: "SCHOOL AFFIDAVIT", link: "https://montforttrichy.com/wp-content/uploads/2023/06/SCHOOLAFFIDAVIT.pdf" },
  ];

  const academicDocs = [
    { name: "FEE STRUCTURE OF THE SCHOOL", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Fee-Structure 2024-2025.pdf" },
    { name: "ANNUAL ACADEMIC CALENDAR", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Academic Calender 2024-25.pdf" },
    { name: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", link: "https://montforttrichy.com/wp-content/uploads/2023/06/SMCC.pdf" },
    { name: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", link: "https://montforttrichy.com/wp-content/uploads/2023/06/PTA.pdf" },
    { name: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLITY", link: "https://montforttrichy.com/wp-content/uploads/2023/06/X & XII Results_Montfort School.pdf" },
    { name: "DECLARATION OF BOOKS CONTENT", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Books.pdf" },
    { name: "STAFF DETAILS", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Teaching-staff.pdf" },
    { name: "STUDENTS STRENGTH", link: "https://montforttrichy.com/wp-content/uploads/2023/06/Students_Strength_2223.pdf" },
  ];

  const resultsX = [
    { year: 2018, registered: 320, passed: 320, percentage: 100 },
    { year: 2019, registered: 307, passed: 307, percentage: 100 },
    { year: 2020, registered: 311, passed: 311, percentage: 100 },
    { year: 2021, registered: 307, passed: 307, percentage: 100 },
    { year: 2022, registered: 302, passed: 302, percentage: 100 },
  ];

  const resultsXII = [
    { year: 2018, registered: 61, passed: 61, percentage: 100 },
    { year: 2019, registered: 107, passed: 107, percentage: 100 },
    { year: 2020, registered: 111, passed: 111, percentage: 100 },
    { year: 2021, registered: 120, passed: 120, percentage: 100 },
    { year: 2022, registered: 103, passed: 103, percentage: 100 },
  ];

  const staffDetails = [
    { category: "PRINCIPAL", details: 1 },
    { category: "VICE PRINCIPAL", details: 1 },
    { category: "PGT", details: 9 },
    { category: "TGT", details: 52 },
    { category: "PRT", details: 53 },
    { category: "NTT", details: 22 },
    { category: "PET", details: 8 },
    { category: "LIBRARIAN", details: 2 },
    { category: "ART TEACHERS", details: 4 },
    { category: "SPECIAL EDUCATOR", details: 1 },
    { category: "COUNSELLOR", details: 1 },
    { category: "NURSE", details: 2 },
  ];

  const infrastructureDetails = [
    { facility: "TOTAL LAND AREA", details: "31888 Sq. Mt." },
    { facility: "PLAYGROUND AREA", details: "146809 Sq. Ft." },
    { facility: "NO. OF CLASS ROOMS", details: "104 (52 Sq. Ft.)" },
    { facility: "NO. OF DIGITAL CLASS ROOMS", details: "93" },
    { facility: "LIBRARY", details: "02 (AREA 175 Sq. Mt.)" },
    { facility: "NO. OF BOOKS IN THE LIBRARY", details: "18000" },
    { facility: "COMPUTER LAB", details: "04 (AREA 178 Sq. Mt.)" },
    { facility: "COMPOSITE LAB", details: "01 (AREA 57 Sq. Mt.)" },
    { facility: "PHYSICS LAB", details: "01 (AREA 178 Sq. Mt.)" },
    { facility: "CHEMISTRY LAB", details: "01 (AREA 178 Sq. Mt.)" },
    { facility: "MATHS LAB", details: "01 (AREA 100 Sq. Mt.)" },
    { facility: "BIOLOGY LAB", details: "01 (AREA 93 Sq. Mt.)" },
    { facility: "TOILETS", details: "BOYS - 42, GIRLS - 42, MALE STAFF - 3, FEMALE STAFF - 14" },
    { facility: "CWSN TOILETS", details: "BOYS - 6, GIRLS - 6" },
    { facility: "URINALS WITH PARTITION", details: "BOYS - 48, GIRLS - 48" },
  ];

  return (
    <div className="pt-16 lg:pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/80 to-primary-red/80" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            mixBlendMode: 'overlay'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white">CBSE Mandatory Disclosure</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Complete transparency in compliance with CBSE regulations and guidelines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 bg-light-gray backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-lg ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-red to-secondary-red text-white'
                    : 'bg-white text-primary-blue hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* General Information */}
          {activeTab === 'general' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
              data-aos="fade-up"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary-blue mb-4">A. GENERAL INFORMATION</h2>
              </div>

              <div className="bg-white backdrop-blur-md rounded-2xl border border-gray-200 overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-primary-blue to-secondary-blue">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">INFORMATION</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generalInfo.map((info, index) => (
                        <motion.tr
                          key={info.field}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-200 hover:bg-light-gray transition-colors duration-300"
                        >
                          <td className="px-6 py-4 text-gray-800 font-medium">{info.field}</td>
                          <td className="px-6 py-4 text-gray-600">{info.value}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Documents */}
          {activeTab === 'documents' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
              data-aos="fade-up"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary-blue mb-4">B. DOCUMENTS / INFORMATION</h2>
              </div>

              <div className="space-y-6">
                {documents.map((doc, index) => (
                  <motion.div
                    key={doc.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-primary-blue mb-4 flex items-center space-x-2">
                        <FileText className="h-6 w-6 text-secondary-red" />
                        <span>{doc.name}</span>
                        </h3>
                        <div className="flex space-x-2">
                            <a href={doc.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-blue rounded-lg hover:bg-secondary-blue transition-colors duration-300">
                                <Eye className="h-4 w-4 text-white" />
                            </a>
                            <a href={doc.link} download className="p-2 bg-primary-red rounded-lg hover:bg-secondary-red transition-colors duration-300">
                                <Download className="h-4 w-4 text-white" />
                            </a>
                        </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Academic Results */}
          {activeTab === 'results' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
              data-aos="fade-up"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary-blue mb-4">C. RESULT AND ACADEMICS</h2>
              </div>

              <div className="space-y-8">
                {/* Academic Documents */}
                 <div className="bg-white backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-2xl font-bold text-primary-blue mb-6 flex items-center space-x-2">
                        <FileText className="h-6 w-6 text-secondary-red" />
                        <span>Documents</span>
                    </h3>
                    <div className="space-y-4">
                        {academicDocs.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between bg-light-gray p-4 rounded-lg" data-aos="fade-left" data-aos-delay={index * 100}>
                                <span className="font-medium text-gray-800">{doc.name}</span>
                                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-blue rounded-lg hover:bg-secondary-blue transition-colors duration-300">
                                    <Eye className="h-4 w-4 text-white" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Class X Results */}
                <div className="bg-white backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="text-2xl font-bold text-primary-blue mb-6 flex items-center space-x-2">
                    <Award className="h-6 w-6 text-secondary-red" />
                    <span>RESULT - CLASS X</span>
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-primary-blue to-secondary-blue">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">YEAR</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">NO. OF REGISTERED STUDENTS</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">NO. OF STUDENTS PASSED</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">PASS PERCENTAGE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsX.map((result, index) => (
                          <motion.tr
                            key={result.year}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-gray-200 hover:bg-light-gray transition-colors duration-300"
                          >
                            <td className="px-6 py-4 text-gray-800 font-medium">{result.year}</td>
                            <td className="px-6 py-4 text-gray-600">{result.registered}</td>
                            <td className="px-6 py-4 text-gray-600">{result.passed}</td>
                            <td className="px-6 py-4">
                              <span className="bg-green-500/20 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                {result.percentage}%
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Class XII Results */}
                <div className="bg-white backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg" data-aos="fade-up" data-aos-delay="600">
                  <h3 className="text-2xl font-bold text-primary-blue mb-6 flex items-center space-x-2">
                    <Award className="h-6 w-6 text-secondary-red" />
                    <span>RESULT - CLASS XII</span>
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-primary-red to-secondary-red">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">YEAR</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">NO. OF REGISTERED STUDENTS</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">NO. OF STUDENTS PASSED</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">PASS PERCENTAGE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsXII.map((result, index) => (
                          <motion.tr
                            key={result.year}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-gray-200 hover:bg-light-gray transition-colors duration-300"
                          >
                            <td className="px-6 py-4 text-gray-800 font-medium">{result.year}</td>
                            <td className="px-6 py-4 text-gray-600">{result.registered}</td>
                            <td className="px-6 py-4 text-gray-600">{result.passed}</td>
                            <td className="px-6 py-4">
                              <span className="bg-green-500/20 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                {result.percentage}%
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Staff Information */}
          {activeTab === 'staff' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
              data-aos="fade-up"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary-blue mb-4">D. STAFF DETAILS</h2>
              </div>

              <div className="bg-white backdrop-blur-md rounded-2xl border border-gray-200 overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-primary-blue to-secondary-blue">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">INFORMATION</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffDetails.map((staff, index) => (
                        <motion.tr
                          key={staff.category}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-200 hover:bg-light-gray transition-colors duration-300"
                        >
                          <td className="px-6 py-4 text-gray-800 font-medium">{staff.category}</td>
                          <td className="px-6 py-4 text-gray-600">{staff.details}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Infrastructure */}
          {activeTab === 'infrastructure' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
              data-aos="fade-up"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary-blue mb-4">E. INFRASTRUCTURE</h2>
              </div>

              <div className="bg-white backdrop-blur-md rounded-2xl border border-gray-200 overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-primary-red to-secondary-red">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">INFORMATION</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infrastructureDetails.map((item, index) => (
                        <motion.tr
                          key={item.facility}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className="border-b border-gray-200 hover:bg-light-gray transition-colors duration-300"
                        >
                          <td className="px-6 py-4 text-gray-800 font-medium">{item.facility}</td>
                          <td className="px-6 py-4 text-gray-600">{item.details}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
}