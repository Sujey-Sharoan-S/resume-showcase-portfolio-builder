
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import SkillItem from '@/components/SkillItem';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import ContactForm from '@/components/ContactForm';
import { Briefcase, Calendar, LinkedIn, Mail, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Sujey Sharoan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Embedded Engineer
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
              <a 
                href="#projects"
                className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About/Profile Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>About Me</SectionTitle>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am passionate about embedded systems and hardware programming, specializing in microcontroller firmware 
              development, circuit design, and interfacing technologies. With hands-on experience in Arduino and 
              STM32 platforms, I write efficient code for SPI, UART, and I²C communication, ensuring seamless data 
              exchange between devices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond technical execution, I enjoy simplifying complex concepts, making them accessible to 
              learners and professionals alike. I strive to bridge hardware and software seamlessly to create 
              impactful and intelligent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Skills</SectionTitle>
            
            <div className="mb-10">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Programming
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <SkillItem title="C Programming" />
                <SkillItem title="Embedded C" />
                <SkillItem title="ARM Cortex" />
                <SkillItem title="STM Cube IDE" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Protocols
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <SkillItem title="I²C" />
                <SkillItem title="SPI" />
                <SkillItem title="UART" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Projects</SectionTitle>
            
            <div className="space-y-8">
              <ProjectCard 
                title="Obstacle Avoiding Robot using Arduino"
                description="An Obstacle Avoiding Robot using Arduino detects and avoids objects using ultrasonic sensors. The Arduino processes sensor data to control motors via a driver module. When an obstacle is detected, it stops, turns, and resumes movement. Enhancements include UV sensors, and wireless Bluetooth control for smarter navigation."
              />
              
              <ProjectCard 
                title="Human Detection and Disaster Management"
                description="Human Detection Drone integrates computer vision and embedded systems for real-time tracking. Using an STM32 microcontroller, camera module, and AI-based image recognition, it detects humans from aerial footage. Applications include security, rescue ops, and crowd monitoring."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Education</SectionTitle>
            
            <EducationCard 
              school="SNS COLLEGE OF ENGINEERING"
              degree="BE in Electronics and Communication Engineering"
              years="2022-2026"
            />
            
            <EducationCard 
              school="PERKS MATRICULATION HIGHER SECONDARY SCHOOL"
              degree="SSLC - 77% • HSC - 75%"
              years="2020-2022"
            />
            
            <div className="mt-12">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Certifications
              </h3>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                <p className="text-gray-800 font-medium">C PROGRAMMING – Prep Insta</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                <p className="text-gray-800 font-medium">ARM CORTEX M4 – Pantech ai</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Experience
              </h3>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-heading font-bold text-gray-900">Micro Infotech</h4>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>3 weeks (21 days)</span>
                  </div>
                </div>
                <p className="text-gray-700">Embedded systems internship</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  Workshops
                </h3>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-lg font-heading font-bold text-gray-900">PCB DESIGNING</h4>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2 days at SNS college of engineering</span>
                    </div>
                  </div>
                  <p className="text-gray-700">PCB designing workshop using Eagle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Contact Me</SectionTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="mb-6">
                  <p className="text-gray-700 mb-6">
                    Feel free to reach out to me for collaboration, questions, or just to say hello!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-600" />
                    <p className="text-gray-700">9500874458</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-600" />
                    <a href="mailto:Sujeysharoan19@gmail.com" className="text-gray-700 hover:text-gray-900">
                      Sujeysharoan19@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <LinkedIn className="w-5 h-5 mr-3 text-gray-600" />
                    <a 
                      href="https://www.linkedin.com/in/sujey-sharoan-s/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      linkedin.com/in/sujey-sharoan-s/
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
