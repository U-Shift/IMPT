import React from 'react';
import { X, Github, ExternalLink, Files, Tags, Quote, IdCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AboutModalProps {
    showAbout: boolean;
    setShowAbout: (val: boolean) => void;
    isDarkMode: boolean;
}

export const AboutModal: React.FC<AboutModalProps> = ({ showAbout, setShowAbout, isDarkMode }) => {
    const { t } = useTranslation();
    if (!showAbout) return null;

    return (<div className="fixed inset-0 z-[5000] lg:flex lg:items-center lg:justify-center bg-black/85 backdrop-blur-xl p-0 lg:p-8" onClick={() => setShowAbout(false)}>
        <div className={`
                ${isDarkMode ? 'bg-neutral-900' : 'bg-white'} 
                lg:border ${isDarkMode ? 'lg:border-neutral-800' : 'lg:border-neutral-200'} 
                lg:rounded-[48px] lg:max-w-6xl w-full h-[100dvh] lg:h-auto lg:max-h-[90vh] relative transition-all animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden
            `} onClick={e => e.stopPropagation()}>

            {/* Header (Fixed) */}
            <div className="p-8 lg:p-14 pb-4 lg:pb-6 shrink-0">
                <button onClick={() => setShowAbout(false)} className="absolute top-6 right-6 lg:top-10 lg:right-10 p-3 hover:bg-neutral-200/20 rounded-full transition-colors flex items-center justify-center z-10">
                    <X className="w-6 h-6 opacity-40 text-neutral-500" />
                </button>
                <div className="flex items-center gap-4 lg:gap-6">
                    <img src="images/logo/icon.png" alt="IMPT Logo" className="w-12 h-12 lg:w-16 lg:h-16" />
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black leading-none tracking-tighter">IMPT</h2>
                        <p className="text-neutral-500 font-black text-[10px] lg:text-[12px] uppercase tracking-[0.4em] mt-2 lg:mt-3">{t('about.title_desc')}</p>
                    </div>
                </div>
            </div>

            {/* Content (Scrollable) */}
            <div className="p-8 lg:p-14 pt-2 lg:pt-4 overflow-y-auto flex-1">
                <h3 className="text-lg lg:text-xl font-black tracking-tighter mb-3">{t('about.about_section')}</h3>
                <div className="pb-3 opacity-60">
                    <p className={`p-4 lg:p-6 rounded-2xl ${isDarkMode ? 'bg-white/5' : 'bg-neutral-50'} border-l-4 border-sky-900 font-medium`}>
                        {t('about.p1')}
                        <br />
                        <br />
                        {t('about.p2')}
                    </p>
                </div>

                {/*Useful links */}
                <div className="pt-6 pb-4">
                    <h3 className='text-lg lg:text-xl font-bold tracking-tighter mb-3'>{t('about.useful_links')}</h3>
                    <div className="pt-3 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 pt-0 uppercase text-sm lg:text-base font-bold tracking-widest leading-relaxed opacity-60">
                        <a href="https://u-shift.github.io/IMPT-data/" target='_blank' rel='noreferrer' className="leading-none flex items-center gap-3 p-4 lg:p-4 rounded-2xl border border-neutral-800 hover:bg-sky-900 hover:text-white transition-all hover:border-sky-900 hover:scale-[1.02] active:scale-95">
                            <Files className="w-5 h-5" /> <span>{t('about.methodological_report')}</span>
                        </a>
                        <a href="https://u-shift.github.io/IMPT-data/metadata.html" target="_blank" rel="noreferrer" className="leading-none flex items-center gap-3 p-4 lg:p-4 rounded-2xl border border-neutral-800 hover:bg-sky-900 hover:text-white transition-all hover:border-sky-900 hover:scale-[1.02] active:scale-95">
                            <Tags className="w-5 h-5" /> <span>{t('about.metadata')}</span>
                        </a>
                        <a href="https://u-shift.github.io/IMPT-data/about.html#cite-as" target="_blank" rel="noreferrer" className="leading-none flex items-center gap-3 p-4 lg:p-4 rounded-2xl border border-neutral-800 hover:bg-sky-900 hover:text-white transition-all hover:border-sky-900 hover:scale-[1.02] active:scale-95">
                            <Quote className="w-5 h-5" /> <span>{t('about.cite_as')}</span>
                        </a>
                        <a href="https://github.com/U-Shift/IMPT" target="_blank" rel="noreferrer" className="leading-none flex items-center gap-3 p-4 lg:p-4 rounded-2xl border border-neutral-800 hover:bg-sky-900 hover:text-white transition-all hover:border-sky-900 hover:scale-[1.02] active:scale-95">
                            <Github className="w-5 h-5" /> <span>{t('about.source_code_web')}</span>
                        </a>
                        <a href="https://github.com/U-Shift/IMPT-data" target="_blank" rel="noreferrer" className="leading-none flex items-center gap-3 p-4 lg:p-3 rounded-2xl border border-neutral-800 hover:bg-sky-900 hover:text-white transition-all hover:border-sky-900 hover:scale-[1.02] active:scale-95">
                            <Github className="w-5 h-5" /> <span>{t('about.source_code_data')}</span>
                        </a>
                    </div>
                </div>

                {/* Authors */}
                <div className="pt-6 pb-4">
                    <h3 className="text-lg lg:text-xl font-black tracking-tighter mb-3">{t('about.authors_section')}</h3>
                    <p className='flex opacity-60'>{t('about.authors_paragraph')} </p>
                    <h4 className="opacity-60 text-md lg:text-lg font-black tracking-tighter mt-3"><a href='https://ushift.pt' target='_blank'>U-Shift Lab, Instituto Superior Técnico</a></h4>
                    <p className='flex flex-wrap opacity-60'>Filipe Moura <a className='ml-1' href="https://orcid.org/0000-0001-7749-8490" target='_blank'><IdCard /></a>,
                        Rosa Félix <a className='ml-1' href="https://orcid.org/0000-0002-5642-6006" target='_blank'><IdCard /></a>,
                        Mauricio Orozco-Fontalvo <a className='ml-1' href="https://orcid.org/0000-0003-0514-4647" target='_blank'><IdCard /></a>,
                        Gonçalo Matos <a className='ml-1' href="https://orcid.org/0009-0001-3489-1732" target='_blank'><IdCard /></a>,
                        Miguel Alvelos,
                        Margarida Pimentel
                    </p>
                    <h4 className="opacity-60 text-md lg:text-lg font-black tracking-tighter mt-3"><a href='https://www.tmlmobilidade.pt/' target='_blank'>Transportes Metropolitanos de Lisboa (TML)</a></h4>
                    <p className='flex flex-wrap opacity-60'>
                        Camila Garcia <a className='ml-1' href="https://orcid.org/0000-0002-1114-0979" target='_blank'><IdCard /></a>,
                        Catarina Marcelino
                    </p>
                    <img src='images/logo_acknowledgement_tml.png' className='mt-6' />
                </div>

                {/* Funding */}
                <div className='pt-6 pb-4'>
                    <h3 className="text-lg lg:text-xl font-black tracking-tighter mb-3">{t('about.funding_section')}</h3>
                    <p className='flex opacity-60'>{t('about.funding_paragraph')}</p>
                    <img src='images/logo_planapp.png' className='mt-6' />
                </div>

                {/* Footer */}
                <div className="pt-6 pb-4 flex flex-col justify-between items-center opacity-40 text-center space-y-2">
                    <p className="text-[10px] lg:text-[12px]">&copy; 2026, {t('about.copyright')}</p>
                </div>
            </div>

        </div>
    </div>
    );
};
