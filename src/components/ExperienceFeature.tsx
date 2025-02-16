import { Link } from "@/components/ui/link";

type ExperienceConfig = {
    title: string;
    titleLink: string;
    companyType: string;
    subtitle: string;
    period: string;
    description: string;
    bullets: string[];
}
const EXPERIENCE_CONFIG: Record<string, ExperienceConfig> = {
    'loopio': {
        title: 'Loopio',
        titleLink: 'https://www.loopio.com',
        companyType: 'RFP Management Software',
        subtitle: 'Full Stack Software Developer | Integrations & Projects',
        period: '05/2018 - 08/2019, 06/2021 - 01/2022',
        description: 'Loopio is a Knowledge Management platform that assists in managing the RFP process and is based in Toronto, Canada. While at Loopio, I was able to work on meaningful features that made an impact on the business. The experience I gained was everything I could have asked for as I was given a broad range of responsibilities and had the opportunity to work with a very talented group of people.',
        bullets: [
            'Refactored Loopio build process to allow support for Typescript. Introduced Typescript to the engineering team through a Lunch & Learn presentation.',
            'Developed a new PDF import system for Loopio\'s Project Import feature.',
            'Developed a Chrome Extension to assist with importing content into the customer library from anywhere on the web. Installations surpassed competitor solution within 5 days of being on the Chrome Store.',
            'Implemented integrations with Slack & Microsoft Dynamics.',
            'Gained extensive End to End, Integration & Unit testing experience. 100% code coverage required on all newly created features. Active member on Loopio’s internal Testing Guild where we developed testing standards for the Engineering Team.',
            'Developed a bulk user import solution for large enterprise customers.',
            'Utilized: JavaScript, React, Redux, HTML/CSS, PHP, MySQL, Git.'
        ]
    },
    'lazer': {
        title: 'Lazer',
        titleLink: 'https://www.lazertechnologies.com',
        companyType: 'Software Agency',
        subtitle: 'Senior Software Engineering Consultant',
        period: '01/2023 - Present',
        description: '',
        bullets: [
            'Providing Software Engineering Consultant services across many stacks. Notable clients include Google, Humi,Argo, Electric Capital.',
        ]
    },
    'unmet': {
        title: 'Unmet',
        titleLink: 'https://www.unmet.ca',
        companyType: 'Software Agency',
        subtitle: 'Senior Software Engineering Consultant',
        period: '03/2023 - 10/2023',
        description: '',
        bullets: [
            'Providing Software Engineering Consultant services across many stacks. Notable clients include Medisca, IKO Global.',
        ]
    },
    'wealthagile': {
        title: 'WealthAgile',
        titleLink: 'https://www.wealthagile.com/',
        companyType: 'Crypto Portfolio Manager',
        subtitle: 'CTO',
        period: '11/2023 - Present',
        description: '',
        bullets: [
            'Refactored Loopio build process to allow support for Typescript. Introduced Typescript to the engineering team through a Lunch & Learn presentation.',
            'Developed a new PDF import system for Loopio\'s Project Import feature.',
            'Developed a Chrome Extension to assist with importing content into the customer library from anywhere on the web. Installations surpassed competitor solution within 5 days of being on the Chrome Store.',
            'Implemented integrations with Slack & Microsoft Dynamics.',
            'Gained extensive End to End, Integration & Unit testing experience. 100% code coverage required on all newly created features. Active member on Loopio’s internal Testing Guild where we developed testing standards for the Engineering Team.',
            'Developed a bulk user import solution for large enterprise customers.',
            'Utilized: JavaScript, React, Redux, HTML/CSS, PHP, MySQL, Git.'
        ]
    },
    'tablo': {
        title: 'Tablo Creative',
        titleLink: 'https://www.tablocreative.com/',
        companyType: 'Software Agency',
        subtitle: 'Full Stack Software Developer',
        period: '11/2021 - 09/2022',
        description: '',
        bullets: [
            'Implemented new design system for metabase.com. Complete overhaul of the entire site.',
            'Implemented internal Shopify Monogram app for trouvailleonline.com. Utilized Glitch for the backend. Try it by adding a Monogrammable item from the store, and navigating to the cart! Click “Add Complimentary Monogram” within the cart to view.',
            'Implemented custom discount indicator for futz.com on their collections pages for their Shopify store.',
            'Utilized: Jekyll, Liquid, JavaScript, HTML, CSS, NodeJS, Glitch, Webhooks.'
        ]
    },
    'bitbuy': {
        title: 'Bitbuy',
        titleLink: 'https://www.bitbuy.ca/',
        companyType: 'Crypto Exchange',
        subtitle: 'Software Developer | Treasury, Risk, Collateral & Marketplace Systems',
        period: '06/2022 - 12/2023',
        description: '',
        bullets: [
            'Worked directly with the Finance team to develop an internal daily reconciliation tool. This helped transition the company from a monthly reconciliation process to a daily one saving the team countless hours reconciling. Transactions, trades, balances, and FX conversions needed to be pulled from internal and third-party APIs and accurately reconciled into a variety of reports.',
            'Implemented EAS (Expo Application Services) into the mobile build process. Documented entire process to help other engineering teams across the business migrate to EAS.',
            'Reduced Web build time by ~25% (8 minutes).',
            'Increased both Web & Mobile releases to a minimum of 1 release per week by creating and modifying a variety of Github workflows, which included Slack notifications, to improve CI/CD pipeline.'
        ]
    }
}

type ExperienceFeatureProps = {
  clickedExperience: string | null;
  hoveredExperience: string | null;
  onClose: () => void;
}

function ExperienceFeature({ clickedExperience, hoveredExperience, onClose }: ExperienceFeatureProps) {

  if (!clickedExperience && !hoveredExperience) return null;

  const experience = clickedExperience || hoveredExperience;

  const experienceConfig = EXPERIENCE_CONFIG[experience as keyof typeof EXPERIENCE_CONFIG];

  return (
    <div className="bg-background grow" style={{ animationDuration: '0.2s' }}>
        <div className="max-w-6xl mx-auto h-full box-content">
            <div className="p-2 gap-3 flex flex-col">
                <div className="flex flex-row justify-between items-start bg-background">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <h2 className="text-sm md:text-xl font-bold"><Link href={experienceConfig.titleLink}>{experienceConfig.title}</Link></h2>
                            <span className="text-sm md:text-xl">|</span>
                            <span className="text-sm md:text-xl font-bold">{experienceConfig.companyType}</span>
                        </div>
                        <span className="text-xs md:text-sm text-slate-500">{experienceConfig.subtitle}</span>
                        <span className="text-xs md:text-sm text-slate-500">{experienceConfig.period}</span>
                    </div>
                    {clickedExperience && <button onClick={onClose}><CloseIcon /></button>}
                </div>
                <ul className="flex flex-col gap-1 text-sm text-slate-300 ml-6">
                    {experienceConfig.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

function CloseIcon() {
    return (
        <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.2855 3.95197C17.6273 3.61026 17.6273 3.05624 17.2855 2.71453C16.9438 2.37282 16.3898 2.37282 16.0481 2.71453L10.0002 8.76248L3.95221 2.71453C3.61051 2.37282 3.05649 2.37282 2.71478 2.71453C2.37307 3.05624 2.37307 3.61026 2.71478 3.95197L8.76273 9.99992L2.71478 16.0479C2.37307 16.3896 2.37307 16.9436 2.71478 17.2853C3.05649 17.627 3.61051 17.627 3.95221 17.2853L10.0002 11.2374L16.0481 17.2853C16.3898 17.627 16.9438 17.627 17.2855 17.2853C17.6273 16.9436 17.6273 16.3896 17.2855 16.0479L11.2376 9.99992L17.2855 3.95197Z'
                fill="white"
            />
        </svg>
    )
}

export default ExperienceFeature;