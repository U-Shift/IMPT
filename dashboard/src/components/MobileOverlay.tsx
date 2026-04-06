import React from 'react';
import { Smartphone, Monitor, Info } from 'lucide-react';

interface MobileOverlayProps {
    onShowAbout: () => void;
}

export const MobileOverlay: React.FC<MobileOverlayProps> = ({ onShowAbout }) => {
    return (
        <div className="fixed inset-0 z-[5000] flex flex-col items-center justify-center p-8 bg-neutral-950/80 backdrop-blur-2xl text-center">
            <div className="w-20 h-20 bg-sky-900/20 rounded-full flex items-center justify-center mb-8 border border-sky-800/30">
                <Smartphone className="w-10 h-10 text-sky-500" />
            </div>

            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-4">
                Desktop Optimized
            </h2>

            <p className="text-neutral-400 max-w-md leading-relaxed mb-10 font-medium">
                The IMPT Dashboard features complex spatial analytics and interactive maps designed for larger screens.
                Please visit us on a desktop or tablet for the full experience.
            </p>
        </div>
    );
};
