
import React from 'react';

interface SkillItemProps {
  title: string;
}

const SkillItem = ({ title }: SkillItemProps) => {
  return (
    <div className="bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm">
      <p className="font-medium text-gray-800">{title}</p>
    </div>
  );
};

export default SkillItem;
