import React from 'react';

const KanbanIcon = ({ type }) => {
  switch (type) {
    case 'todo':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-600">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    
    case 'in-progress':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <circle cx="12" cy="12" r="10" fill="#f59e0b"/>
        </svg>
      );
    
    case 'done':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
        </svg>
      );
    
    case 'canceled':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-500">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/>
        </svg>
      );
    
    case 'high-priority':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 5v4h2v-4h-2zm0 6v2h2v-2h-2z" fill="#dc2626"/>
        </svg>
      );
    
    case 'medium-priority':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 5v4h2v-4h-2zm0 6v2h2v-2h-2z" fill="#f59e0b"/>
        </svg>
      );
    
    case 'low-priority':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M7 10l5 5 5-5H7z" fill="#4b5563"/>
        </svg>
      );
    
    case 'no-priority':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <circle cx="12" cy="12" r="8" fill="none" stroke="#6b7280" strokeWidth="2"/>
        </svg>
      );
    
    case 'add':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
        </svg>
      );
    
    case 'menu':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
        </svg>
      );
  }
  return null;
};

export default KanbanIcon;
