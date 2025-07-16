import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'علی زیبایی - Backend Developer | متخصص PHP/Laravel',
    description: 'علی زیبایی، توسعه‌دهنده Backend متخصص PHP/Laravel با 13 ماه تجربه کاری در پارک فناوری پردیس. متخصص در طراحی API، بهینه‌سازی پرفورمنس و معماری Clean Code.',
    keywords: 'علی زیبایی, Backend Developer, PHP, Laravel, API Development, Clean Architecture, Performance Optimization, Database Design, MySQL, Redis',
    authors: [{ name: 'علی زیبایی', url: 'https://github.com/AliZibaie' }],
    creator: 'علی زیبایی',
    publisher: 'علی زیبایی',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://alizibaie.dev'),
    alternates: {
        canonical: '/',
        languages: {
            'fa-IR': '/fa',
            'en-US': '/en',
        },
    },
    openGraph: {
        title: 'علی زیبایی - Backend Developer | متخصص PHP/Laravel',
        description: 'علی زیبایی، توسعه‌دهنده Backend متخصص PHP/Laravel با 13 ماه تجربه کاری در پارک فناوری پردیس',
        url: 'https://alizibaie.dev',
        siteName: 'علی زیبایی - Backend Developer',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'علی زیبایی - Backend Developer Portfolio',
            },
        ],
        locale: 'fa_IR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'علی زیبایی - Backend Developer | متخصص PHP/Laravel',
        description: 'علی زیبایی، توسعه‌دهنده Backend متخصص PHP/Laravel',
        images: ['/images/twitter-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'علی زیبایی',
    jobTitle: 'Backend Developer',
    description: 'متخصص PHP/Laravel با 13 ماه تجربه کاری در پارک فناوری پردیس',
    url: 'https://alizibaie.dev',
    email: 'alizibaie1380@gmail.com',
    telephone: '+989190728073',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'کرج',
        addressRegion: 'البرز',
        addressCountry: 'Iran',
    },
    sameAs: [
        'https://github.com/AliZibaie',
        'https://linkedin.com/in/AliZibaie',
    ],
    knowsAbout: [
        'PHP',
        'Laravel',
        'MySQL',
        'Redis',
        'RESTful API',
        'Clean Architecture',
        'Performance Optimization',
        'Database Design',
    ],
    alumniOf: {
        '@type': 'Organization',
        name: 'دانشگاه بین‌المللی امام خمینی',
    },
    worksFor: {
        '@type': 'Organization',
        name: 'پارک فناوری پردیس',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fa" dir="rtl">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
