import { IconArrowUpRight, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

import classes from './Contact.module.css';
import page from './Page.module.css';

type Tone = 'inverse' | 'accent' | 'muted';

const CardContent = ({
    icon,
    title,
    description,
    external = false
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    external?: boolean;
}) => (
    <>
        <span className={classes.icon} aria-hidden="true">
            {icon}
        </span>
        <span className={classes.text}>
            <span className={classes.cardTitle}>{title}</span>
            <span className={classes.cardDescription}>{description}</span>
        </span>
        {external && <IconArrowUpRight size={20} className={classes.arrow} aria-hidden="true" />}
    </>
);

const LINKS: { href: string; tone: Tone; icon: React.ReactNode; title: string; description: string }[] = [
    {
        href: 'https://www.instagram.com/n_dewangan7469?lqvp=ZHlheTFocWI0NHZw',
        tone: 'inverse',
        icon: <IconBrandInstagram size={24} />,
        title: 'Follow me on Instagram',
        description: '@APNA_USERNAME'
    },
    {
        href: 'https://github.com/dewangannitin858-create/your_dashbot/issues',
        tone: 'muted',
        icon: <IconBrandGithub size={24} />,
        title: 'Report a bug',
        description: 'Open an issue on GitHub'
    }
];

const Contact = () => {
    const t = useTranslations();
    const title = `${t('nav.contact')} | Your Dashbot`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={t('contact.description')} />
            </Head>

            <div className={page.header}>
                <div className={page.intro}>
                    <p className={page.eyebrow}>{t('nav.contact')}</p>
                    <h1 className={page.title}>{t('contact.title')}</h1>
                    <p className={page.lead}>{t('contact.description')}</p>
                </div>
            </div>

            <ul className={classes.cards}>
                {LINKS.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.card}
                            data-tone={item.tone}
                        >
                            <CardContent
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                external
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Contact;
