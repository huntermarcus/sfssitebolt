import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Upload,
  AlertCircle,
  Clock
} from 'lucide-react';

export function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    class: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    board: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const admissionCriteria = [
    { class: "Pre-KG", ageRange: "2.5 - 3.5 years", documents: "Birth Certificate, Vaccination Card" },
    { class: "LKG", ageRange: "3.5 - 4.5 years", documents: "Birth Certificate, Vaccination Card" },
    { class: "UKG", ageRange: "4.5 - 5.5 years", documents: "Birth Certificate, Previous School Certificate" },
    { class: "Class I", ageRange: "5.5 - 6.5 years", documents: "Birth Certificate, UKG Certificate" },
    { class: "Class II-V", ageRange: "As per CBSE", documents: "Transfer Certificate, Last Grade Report" },
    { class: "Class VI-VIII", ageRange: "As per CBSE", documents: "Transfer Certificate, Grade Reports" },
    { class: "Class IX", ageRange: "As per CBSE", documents: "Transfer Certificate, Class VIII Report" },
    { class: "Class XI", ageRange: "As per CBSE", documents: "Class X Marksheet, Transfer Certificate" }
  ];

  const admissionSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Fill out the online application form with required documents"
    },
    {
      step: "2", 
      title: "Document Verification",
      description: "Submit original documents for verification at the school office"
    },
    {
      step: "3",
      title: "Interaction Session",
      description: "Student and parent interaction with the admission committee"
    },
    {
      step: "4",
      title: "Fee Payment",
      description: "Complete fee payment upon selection confirmation"
    },
    {
      step: "5",
      title: "Welcome to School",
      description: "Orientation session and class allocation"
    }
  ];

  const mandatoryDocuments = [
    "Birth Certificate (Original + Photocopy)",
    "Previous School Transfer Certificate",
    "Last Academic Year Report Card",
    "Vaccination Certificate",
    "Recent Passport Size Photographs (4 copies)",
    "Parent ID Proof (Aadhar Card/Passport)",
    "Address Proof (Utility Bill/Lease Agreement)",
    "Caste Certificate (if applicable)",
    "Medical Fitness Certificate"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/70 to-neutral-dark/50" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-light">Admissions Open</h1>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Join our school family and embark on a journey of academic excellence and character development
            </p>
            <div className="bg-accent-gold/20 backdrop-blur-sm border border-accent-gold/30 rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-3 text-accent-gold">
                <Clock className="h-6 w-6" />
                <span className="font-semibold">Application Deadline: March 31, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-dark mb-6">Admission Criteria</h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Age requirements and documentation needed for each class
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-blue to-secondary-blue">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Class</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Age Range</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Required Documents</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionCriteria.map((criteria, index) => (
                    <motion.tr
                      key={criteria.class}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-neutral-gray/20 hover:bg-neutral-light transition-colors duration-300"
                    >
                      <td className="px-6 py-4 text-neutral-dark font-medium">{criteria.class}</td>
                      <td className="px-6 py-4 text-neutral-gray">{criteria.ageRange}</td>
                      <td className="px-6 py-4 text-neutral-gray">{criteria.documents}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-neutral-light/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-dark mb-6">Admission Process</h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Simple steps to secure your child's future at SFS CBSE School
            </p>
          </motion.div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-gold to-yellow-500 hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="bg-gradient-to-r from-accent-gold to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl relative z-10 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">{step.title}</h3>
                  <p className="text-neutral-gray text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-dark mb-6">Mandatory Documents</h2>
            <p className="text-xl text-neutral-gray">
              Please ensure all documents are ready before submitting your application
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              {mandatoryDocuments.map((document, index) => (
                <motion.div
                  key={document}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-3 bg-neutral-light rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-dark">{document}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-neutral-light/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-dark mb-6">Application Form</h2>
            <p className="text-xl text-neutral-gray">
              Complete the form below to begin your admission process
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-2xl space-y-6"
          >
            {/* Student Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent-gold border-b border-neutral-gray/20 pb-4">
                Student Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark placeholder-neutral-gray focus:outline-none focus:border-accent-gold transition-colors duration-300"
                    placeholder="Enter full name"
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark focus:outline-none focus:border-accent-gold transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark focus:outline-none focus:border-accent-gold transition-colors duration-300"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Applying for Class *
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark focus:outline-none focus:border-accent-gold transition-colors duration-300"
                  >
                    <option value="">Select Class</option>
                    <option value="pre-kg">Pre-KG</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={`class-${i + 1}`}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent-gold border-b border-neutral-gray/20 pb-4">
                Parent Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Father's Name *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark placeholder-neutral-gray focus:outline-none focus:border-accent-gold transition-colors duration-300"
                    placeholder="Enter father's name"
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Mother's Name *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark placeholder-neutral-gray focus:outline-none focus:border-accent-gold transition-colors duration-300"
                    placeholder="Enter mother's name"
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark placeholder-neutral-gray focus:outline-none focus:border-accent-gold transition-colors duration-300"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark placeholder-neutral-gray focus:outline-none focus:border-accent-gold transition-colors duration-300"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-neutral-dark font-medium mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark placeholder-neutral-gray focus:outline-none focus:border-accent-gold transition-colors duration-300 resize-none"
                  placeholder="Enter complete address"
                />
              </div>
            </div>

            {/* Previous School Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent-gold border-b border-neutral-gray/20 pb-4">
                Previous School Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Previous School Name
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark placeholder-neutral-gray focus:outline-none focus:border-accent-gold transition-colors duration-300"
                    placeholder="Enter previous school name"
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-dark font-medium mb-2">
                    Board of Education
                  </label>
                  <select
                    name="board"
                    value={formData.board}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral-gray/30 rounded-lg text-neutral-dark focus:outline-none focus:border-accent-gold transition-colors duration-300"
                  >
                    <option value="">Select Board</option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE</option>
                    <option value="state">State Board</option>
                    <option value="ib">IB</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent-gold border-b border-neutral-gray/20 pb-4">
                Document Upload
              </h3>
              
              <div className="border-2 border-dashed border-neutral-gray/40 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-neutral-gray mx-auto mb-4" />
                <p className="text-neutral-dark mb-2">Upload Required Documents</p>
                <p className="text-neutral-gray text-sm mb-4">
                  Supported formats: PDF, JPG, PNG (Max size: 5MB each)
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  id="document-upload"
                />
                <label
                  htmlFor="document-upload"
                  className="inline-flex items-center space-x-2 bg-neutral-light text-neutral-dark px-6 py-3 rounded-lg cursor-pointer hover:bg-neutral-gray/20 transition-colors duration-300"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose Files</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-gold to-yellow-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Application...</span>
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>

            <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-blue">
                  <p className="font-medium mb-1">Important Note:</p>
                  <p>
                    After submitting this online application, please visit the school office 
                    within 7 days with original documents for verification. Admission is subject 
                    to document verification and seat availability.
                  </p>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full text-center"
          >
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-dark mb-4">Application Submitted!</h3>
            <p className="text-neutral-gray mb-6">
              Thank you for your application. We have received your form and will contact you 
              within 2-3 business days regarding the next steps.
            </p>
            <div className="bg-accent-gold/20 border border-accent-gold/30 rounded-lg p-4 mb-6">
              <p className="text-accent-gold text-sm">
                Application ID: <span className="font-mono font-bold">SFS2025001</span>
              </p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="bg-gradient-to-r from-accent-gold to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}