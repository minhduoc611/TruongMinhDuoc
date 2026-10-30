import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
// Real screenshots from the internal app; all figures, names and campaign data are blurred.
import liveDashboard from '../assets/images/atino/live-dashboard.png';
import liveAnalysis from '../assets/images/atino/live-analysis.png';
import liveSalary from '../assets/images/atino/live-salary.png';
import kocOverview from '../assets/images/atino/koc-overview.png';
import kocCampaigns from '../assets/images/atino/koc-campaigns.png';
import kocProvince from '../assets/images/atino/koc-province.png';
import salesProduct from '../assets/images/atino/sales-product.png';
import salesCustomer from '../assets/images/atino/sales-customer.png';
import salesAllocation from '../assets/images/atino/sales-allocation.png';

// Per-module visual config. Tailwind classes are kept as full literal strings
// so they are picked up correctly by the compiler (no dynamic class names).
const MODULES = {
  livestream: {
    ns: 'livestreamDetail',
    shots: [liveDashboard, liveAnalysis, liveSalary],
    pageBg: 'linear-gradient(125deg, #1a0820 0%, #2a0a2e 45%, #120618 100%)',
    heroGradient: 'from-rose-500/20 to-orange-500/20',
    accentText: 'text-rose-400',
    accentBorder: 'border-rose-400/40',
    accentBg: 'bg-rose-500/10',
    chip: 'bg-rose-500/10 text-rose-300 border-rose-400/30',
    bar: 'from-rose-500 to-orange-500'
  },
  koc: {
    ns: 'kocDetail',
    shots: [kocOverview, kocCampaigns, kocProvince],
    pageBg: 'linear-gradient(125deg, #120730 0%, #2d1466 45%, #0c0524 100%)',
    heroGradient: 'from-violet-500/20 to-cyan-500/20',
    accentText: 'text-violet-400',
    accentBorder: 'border-violet-400/40',
    accentBg: 'bg-violet-500/10',
    chip: 'bg-violet-500/10 text-violet-300 border-violet-400/30',
    bar: 'from-violet-500 to-cyan-500'
  },
  sales: {
    ns: 'salesDetail',
    shots: [salesProduct, salesCustomer, salesAllocation],
    pageBg: 'linear-gradient(125deg, #03202b 0%, #0b3b54 45%, #021820 100%)',
    heroGradient: 'from-emerald-500/20 to-sky-500/20',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-400/40',
    accentBg: 'bg-emerald-500/10',
    chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
    bar: 'from-emerald-500 to-sky-500'
  }
};

const AtinoModuleDetail = ({ module }) => {
  const { t } = useTranslation();
  const cfg = MODULES[module];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [module]);

  if (!cfg) return null;

  const k = (path) => `${cfg.ns}.${path}`;
  const metrics = t(k('metrics'), { returnObjects: true });
  const sections = t(k('sections'), { returnObjects: true });
  const techStack = t(k('techStack'), { returnObjects: true });

  const metricsArr = Array.isArray(metrics) ? metrics : [];
  const sectionsArr = Array.isArray(sections) ? sections : [];
  const techArr = Array.isArray(techStack) ? techStack : [];
  const captions = t(k('gallery'), { returnObjects: true });
  const captionArr = Array.isArray(captions) ? captions : [];

  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto" style={{ background: cfg.pageBg }}>
      {/* Background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute w-96 h-96 rounded-full opacity-20 blur-3xl -top-32 -right-32 bg-gradient-to-br ${cfg.heroGradient}`}></div>
        <div className={`absolute w-80 h-80 rounded-full opacity-15 blur-3xl bottom-0 -left-20 bg-gradient-to-br ${cfg.heroGradient}`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{t(k('backButton'))}</span>
        </Link>

        {/* Hero */}
        <div className={`rounded-3xl overflow-hidden border ${cfg.accentBorder} backdrop-blur-xl mb-10`}
             style={{ background: 'linear-gradient(135deg, rgba(17,24,39,0.7) 0%, rgba(31,41,55,0.5) 100%)' }}>
          <div className="relative h-56 sm:h-72 lg:h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
            <img src={cfg.shots[0]} alt={t(k('hero.title'))} className="w-full h-full object-cover object-top" />
            <div className="absolute top-4 left-4 z-20">
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${cfg.accentBg} ${cfg.accentText} border ${cfg.accentBorder} backdrop-blur-sm`}>
                {t(k('tagline'))}
              </span>
            </div>
          </div>
          <div className="p-6 lg:p-10">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
              {t(k('hero.title'))}
            </h1>
            <p className={`text-lg font-medium mb-4 ${cfg.accentText}`}>{t(k('hero.subtitle'))}</p>
            <p className="text-gray-300 leading-relaxed max-w-4xl">{t(k('hero.overview'))}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {techArr.map((tech, i) => (
                <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full border ${cfg.chip}`}>
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-xs italic mt-6">
              {t(k('privacyNote'))}
            </p>
          </div>
        </div>

        {/* Metrics */}
        {metricsArr.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {metricsArr.map((m, i) => (
              <div key={i} className={`rounded-2xl p-5 border ${cfg.accentBorder} ${cfg.accentBg} backdrop-blur-sm text-center`}>
                <div className={`text-2xl lg:text-3xl font-extrabold mb-1 ${cfg.accentText}`}>{m.value}</div>
                <div className="text-gray-300 text-sm leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Screenshot gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{t(k('galleryTitle'))}</h2>
          <div className="space-y-8">
            {cfg.shots.map((src, i) => (
              <figure
                key={i}
                className={`rounded-2xl overflow-hidden border ${cfg.accentBorder} bg-white/5 backdrop-blur-sm`}
              >
                <a href={src} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={src}
                    alt={captionArr[i] || t(k('hero.title'))}
                    loading="lazy"
                    className="w-full h-auto block hover:opacity-95 transition-opacity"
                  />
                </a>
                {captionArr[i] && (
                  <figcaption className="px-5 py-3 text-sm text-gray-300 border-t border-white/10">
                    <span className={`font-bold mr-2 ${cfg.accentText}`}>{String(i + 1).padStart(2, '0')}</span>
                    {captionArr[i]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sectionsArr.map((section, i) => (
            <div
              key={i}
              className={`rounded-3xl p-6 lg:p-8 border ${cfg.accentBorder} backdrop-blur-xl`}
              style={{ background: 'linear-gradient(135deg, rgba(17,24,39,0.75) 0%, rgba(31,41,55,0.55) 100%)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${cfg.accentBg} border ${cfg.accentBorder}`}>
                  <Layers className={`w-5 h-5 ${cfg.accentText}`} />
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${cfg.accentText} mb-1`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white">{section.title}</h2>
                </div>
              </div>
              {section.description && (
                <p className="text-gray-300 leading-relaxed mb-5 lg:pl-[60px]">{section.description}</p>
              )}
              <ul className="space-y-3">
                {Array.isArray(section.items) && section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${cfg.accentText}`} />
                    <span className="text-gray-200 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default AtinoModuleDetail;
