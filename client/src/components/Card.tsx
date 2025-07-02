import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string; 
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className || ''}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Card;