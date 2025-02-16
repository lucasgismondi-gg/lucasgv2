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
    'unmet': {
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
    'wealthagile': {
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
    'tablo': {
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
    'bitbuy': {
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
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-background fade-in" style={{ animationDuration: '0.2s' }}>
        <div className="max-w-6xl mx-auto border-r border-border border-l h-full box-content">
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
                    {clickedExperience && <button onClick={onClose}>Close</button>}
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

export default ExperienceFeature;