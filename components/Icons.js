import React from 'react';

// --- Basic Shapes & Logos ---

export const VercelLogo = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 75 65" fill={fill}><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>
);

export const TriangleUp = ({ className = "w-5 h-5", strokeWidth = 1.5, fill = "none", stroke = "currentColor" }) => (
  <svg className={className} fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export const TriangleDown = ({ className = "w-3 h-3", strokeWidth = 2, fill = "none", stroke = "currentColor" }) => (
  <svg className={className} fill={fill} viewBox="0 0 20 20" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export const ChevronDown = ({ className = "w-4 h-4", strokeWidth = 2, fill = "none", stroke = "currentColor" }) => (
   <svg className={className} fill={fill} viewBox="0 0 20 20" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


// --- UI Elements ---

export const Bell = ({ className = "w-5 h-5", strokeWidth = 1.5, fill = "none", stroke = "currentColor" }) => (
  <svg className={className} fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

export const Search = ({ className = "w-5 h-5", strokeWidth = 2, fill = "none", stroke = "currentColor" }) => (
  <svg className={className} fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const Ellipsis = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg className={className} fill={fill} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

export const Grid = ({ className = "w-4 h-4", fill = "currentColor" }) => (
    <svg className={className} fill={fill} viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
    </svg>
);

export const List = ({ className = "w-4 h-4", strokeWidth = 2, fill = "none", stroke = "currentColor" }) => (
    <svg className={className} fill={fill} viewBox="0 0 20 20" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h12M4 10h12M4 14h12" />
    </svg>
);

export const Add = ({ className = "w-4 h-4", strokeWidth = 2, fill = "none", stroke = "currentColor" }) => (
    <svg className={className} fill={fill} viewBox="0 0 20 20" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

// --- Specific Icons (simplified) ---

export const Feedback = ({ className = "w-4 h-4", strokeWidth = 1.5, fill = "none", stroke = "currentColor" }) => (
    <svg className={className} fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.694 8.25-8.25 8.25a9.01 9.01 0 01-5.083-1.625m-1.754-1.062A9.01 9.01 0 013 12c0-4.556 3.694-8.25 8.25-8.25 2.29 0 4.38.9 5.85 2.344m-1.41 6.375a.75.75 0 001.41-.001l.001-.001V7.5a.75.75 0 00-1.5 0v3.875l-.001.001z" />
    </svg>
);

export const Github = ({ className = "w-4 h-4", fill = "currentColor" }) => (
    // Simplified representation or placeholder
    <svg className={className} fill={fill} viewBox="0 0 16 16" aria-hidden="true">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
);

export const Branch = ({ className = "w-3 h-3", strokeWidth = 1.5, fill = "none", stroke = "currentColor" }) => (
    <svg className={className} fill={fill} viewBox="0 0 16 16" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
        <path fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
    </svg>
);

export const Graph = ({ className = "w-5 h-5", strokeWidth = 1.5, fill = "none", stroke = "currentColor" }) => (
    <svg className={className} fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);