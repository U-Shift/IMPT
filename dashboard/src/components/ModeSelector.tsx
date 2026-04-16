import React from 'react';
import { Tooltip } from './Tooltip';

interface Option {
    id: string;
    label: string;
    icon: string | React.ReactNode;
}

interface ModeSelectorProps {
    value: string;
    options: Option[];
    onChange: (id: string) => void;
    isDark: boolean;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ value, options, onChange, isDark }) => {
    if (!options || options.length < 2) return null;

    return (
        <div className={`flex flex-col gap-2 p-1.5 rounded-[24px] border backdrop-blur-md shadow-2xl pointer-events-auto transition-all duration-300
            ${isDark ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white/90 border-neutral-200'}
        `}>
            {options.map((option) => {
                const isActive = value === option.id;
                return (
                    <Tooltip key={option.id} content={option.label} isDarkMode={isDark}>
                        <button
                            onClick={() => onChange(option.id)}
                            className={`
                                w-11 h-11 rounded-[18px] flex items-center justify-center transition-all duration-300 relative group
                                ${isActive
                                    ? 'bg-sky-800 text-white shadow-lg shadow-sky-900/20 scale-105'
                                    : `${isDark ? 'text-neutral-500 hover:bg-white/5 hover:text-neutral-200' : 'text-neutral-400 hover:bg-neutral-50 hover:text-neutral-800'}`
                                }
                            `}
                        >
                            <span className="text-xl leading-none transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
                                {option.icon}
                            </span>
                        </button>
                    </Tooltip>
                );
            })}
        </div>
    );
};
