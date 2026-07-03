import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ali Zibaie - Backend Developer | PHP/Laravel Specialist',
    description: 'Ali Zibaie, Backend Developer specializing in PHP/Laravel with 13 months of work experience at Pardis Technology Park. Expert in API design, performance optimization, and Clean Architecture.',
    keywords: 'Ali Zibaie, Backend Developer, PHP, Laravel, API Development, Clean Architecture, Performance Optimization, Database Design, MySQL, Redis',
    authors: [{ name: 'Ali Zibaie', url: 'https://github.com/AliZibaie' }],
    creator: 'Ali Zibaie',
    publisher: 'Ali Zibaie',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://alizibaie.dev'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'fa-IR': '/fa',
        },
    },
    openGraph: {
        title: 'Ali Zibaie - Backend Developer | PHP/Laravel Specialist',
        description: 'Ali Zibaie, Backend Developer specializing in PHP/Laravel with 13 months of work experience at Pardis Technology Park.',
        url: 'https://alizibaie.dev',
        siteName: 'Ali Zibaie - Backend Developer',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Ali Zibaie - Backend Developer Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ali Zibaie - Backend Developer | PHP/Laravel Specialist',
        description: 'Ali Zibaie, Backend Developer specializing in PHP/Laravel.',
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
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23FBBF24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'/%3E%3C/svg%3E",
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
    name: 'Ali Zibaie',
    jobTitle: 'Backend Developer',
    description: 'PHP/Laravel specialist with 13 months of work experience at Pardis Technology Park',
    url: 'https://alizibaie.dev',
    email: 'alizibaie1380@gmail.com',
    telephone: '+989190728073',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karaj',
        addressRegion: 'Alborz',
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
        name: 'Imam Khomeini International University',
    },
    worksFor: {
        '@type': 'Organization',
        name: 'Pardis Technology Park',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" dir="ltr">
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