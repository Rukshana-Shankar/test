
import React from 'react';

export const FamilyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
        <path d="M42.5 45.4c-2.3-1.6-4-4.2-4-7.1 0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4c0 3-1.7 5.5-4 7.1-5.1 3.5-12 3.5-17.1 0z" fill="#f4b32b" />
        <path d="M46.9 29.9c-4.6 0-8.4 3.8-8.4 8.4 0 2.9 1.5 5.5 3.8 7 2.5 1.7 5.5 2.6 8.6 2.6h.1c3.1 0 6.1-.9 8.6-2.6 2.3-1.5 3.8-4.1 3.8-7 0-4.6-3.8-8.4-8.4-8.4-2.3 0-4.4.9-6 2.5-1.6-1.6-3.7-2.5-6.1-2.5z" fill="#343f4b" />
        <path d="M22.5 45.4c-2.3-1.6-4-4.2-4-7.1 0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4c0 3-1.7 5.5-4 7.1-5.1 3.5-12 3.5-17.1 0z" fill="#e56e4c" />
        <path d="M26.9 29.9c-4.6 0-8.4 3.8-8.4 8.4 0 2.9 1.5 5.5 3.8 7 2.5 1.7 5.5 2.6 8.6 2.6h.1c3.1 0 6.1-.9 8.6-2.6 2.3-1.5 3.8-4.1 3.8-7 0-4.6-3.8-8.4-8.4-8.4-2.3 0-4.4.9-6 2.5-1.6-1.6-3.7-2.5-6.1-2.5z" fill="#343f4b" />
        <circle cx="34.9" cy="51.5" r="7.4" fill="#f4b32b" />
        <circle cx="34.9" cy="51.5" r="4.3" fill="#343f4b" />
    </svg>
);


export const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);

export const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);
