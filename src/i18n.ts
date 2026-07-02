import profileEn from './data/profile.en.json';
import profileZh from './data/profile.zh.json';
import resumeEn from './data/resume.en.json';
import resumeZh from './data/resume.zh.json';

export type Lang = 'en' | 'zh';

export const ui = {
  en: {
    'site.title': 'Seamus Chang',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.switchLang': '中文',
    'home.featured': 'Featured Projects',
    'home.viewAll': 'View all projects',
    'home.contact': 'Get in touch',
    'projects.title': 'Projects',
    'projects.intro': 'Things I have built — coursework, internships, and side projects.',
    'projects.back': '← All projects',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewDemo': 'Live demo',
    'resume.title': 'Resume',
    'resume.download': 'Download PDF',
    'resume.education': 'Education',
    'resume.skills': 'Skills',
    'resume.experience': 'Experience',
    'resume.leadership': 'Projects & Leadership',
    'footer.rights': 'Built with Astro. Deployed on GitHub Pages.',
  },
  zh: {
    'site.title': 'Seamus Chang',
    'nav.home': '首頁',
    'nav.projects': '專案',
    'nav.resume': '履歷',
    'nav.switchLang': 'EN',
    'home.featured': '精選專案',
    'home.viewAll': '查看所有專案',
    'home.contact': '與我聯絡',
    'projects.title': '專案',
    'projects.intro': '我做過的東西——課程專案、實習與個人專案。',
    'projects.back': '← 所有專案',
    'projects.viewGithub': '在 GitHub 查看',
    'projects.viewDemo': '線上展示',
    'resume.title': '履歷',
    'resume.download': '下載 PDF',
    'resume.education': '學歷',
    'resume.skills': '技能',
    'resume.experience': '經歷',
    'resume.leadership': '專案與領導經驗',
    'footer.rights': '以 Astro 建置，部署於 GitHub Pages。',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

export const profiles = { en: profileEn, zh: profileZh };
export const resumes = { en: resumeEn, zh: resumeZh };

/** Prefix a root-relative path with the locale segment when needed. */
export function localePath(lang: Lang, path: string): string {
  return lang === 'en' ? path : `/zh${path === '/' ? '/' : path}`;
}

/** The same page in the other language, for the navbar switcher. */
export function altLangPath(lang: Lang, pathname: string): string {
  if (lang === 'en') {
    return `/zh${pathname}`;
  }
  const stripped = pathname.replace(/^\/zh/, '');
  return stripped === '' ? '/' : stripped;
}
