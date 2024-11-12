// components/Icons.js
export const Icons = {
    ThreeDotMenu: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3.25C8.41421 3.25 8.75 2.91421 8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5C7.25 2.91421 7.58579 3.25 8 3.25Z" fill="#707070"/>
        <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" fill="#707070"/>
        <path d="M8 14.25C8.41421 14.25 8.75 13.9142 8.75 13.5C8.75 13.0858 8.41421 12.75 8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25Z" fill="#707070"/>
      </svg>
    ),
    Add: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3.25V12.75M12.75 8H3.25" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Backlog: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#707070" strokeWidth="1.5"/>
        <path d="M4.5 5H11.5M4.5 8H11.5M4.5 11H11.5" stroke="#707070" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    Cancelled: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="#707070" strokeWidth="1.5"/>
        <path d="M5 5L11 11M5 11L11 5" stroke="#707070" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    Done: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="#5E6AD2" strokeWidth="1.5"/>
        <path d="M5 8L7 10L11 6" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    InProgress: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="#F1C950" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="2" fill="#F1C950"/>
      </svg>
    ),
    Todo: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="#707070" strokeWidth="1.5"/>
      </svg>
    ),
    Display: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5Z" stroke="#707070" strokeWidth="1.5"/>
        <path d="M2 6H14" stroke="#707070" strokeWidth="1.5"/>
      </svg>
    ),
    NoPriority: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="#6B6F76" strokeWidth="1.5"/>
        <path d="M8 4V8L10 10" stroke="#6B6F76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    LowPriority: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8L8 13L13 8M3 3L8 8L13 3" stroke="#6B6F76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    MediumPriority: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8H13M3 4H13M3 12H13" stroke="#6B6F76" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    HighPriority: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 13L8 8L13 13M3 8L8 3L13 8" stroke="#FC7840" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    UrgentPriority: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 4V9M8 11.5V12" stroke="#D21010" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="6" stroke="#D21010" strokeWidth="1.5"/>
      </svg>
    )
  };
  