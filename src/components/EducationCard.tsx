
import React from 'react';

interface EducationCardProps {
  school: string;
  degree: string;
  years: string;
  details?: string;
}

const EducationCard = ({ school, degree, years, details }: EducationCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="text-xl font-heading font-bold text-gray-900">{school}</h3>
        <span className="text-gray-500">{years}</span>
      </div>
      <p className="text-gray-800 mb-2">{degree}</p>
      {details && <p className="text-gray-600">{details}</p>}
    </div>
  );
};

export default EducationCard;
