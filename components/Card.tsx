
import React, { forwardRef } from 'react';
import { DownloadIcon } from './Icons';

interface CardProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    onDownload?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ title, subtitle, children, className, onDownload }, ref) => {
        return (
            <div ref={ref} className={`bg-white p-4 rounded-lg shadow-md flex flex-col h-full ${className}`}>
                <div className="flex-shrink-0">
                    <div className="flex justify-between items-start gap-2">
                         <div>
                            <h2 className="text-md font-semibold text-gray-800">{title}</h2>
                            {subtitle && <p className="text-xs text-gray-500 uppercase tracking-wider">{subtitle}</p>}
                        </div>
                        {onDownload && (
                            <button
                                onClick={onDownload}
                                className="p-1 text-gray-400 hover:text-gray-800 transition-colors flex-shrink-0"
                                aria-label={`Download ${title} chart`}
                            >
                                <DownloadIcon className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                    <hr className="my-2" />
                </div>
                <div className="flex-grow flex flex-col">
                    {children}
                </div>
            </div>
        );
    }
);

Card.displayName = 'Card';
