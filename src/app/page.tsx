'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
    ChevronDownIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    CalendarDaysIcon,
    UserIcon,
    CodeBracketIcon,
    ServerIcon,
    CpuChipIcon,
    CloudIcon,
    CommandLineIcon,
    DocumentArrowDownIcon,
    EyeIcon,
    XMarkIcon,
    CheckCircleIcon,
    StarIcon,
    BuildingOfficeIcon,
    GlobeAltIcon,
    BookOpenIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon,
    RocketLaunchIcon,
    CubeIcon,
    Bars3Icon,
    XMarkIcon as XMarkIconMobile,
} from '@heroicons/react/24/outline'

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const skills = {
        'PHP Core': [
            'Autoloading', 'Authentication', 'Functional Programming', 'Error Handling',
            'Validation', 'File System', 'Session Management', 'Cookie', 'PDO',
            'OOP', 'MVC', 'Regex', 'Trait', 'Enum'
        ],
        'Laravel Ecosystem': [
            'RESTful API Development', 'Eloquent ORM', 'Query Builder', 'Validation',
            'Middleware', 'Gate & Policy', 'Collection', 'Permission', 'Authentication (Sanctum)',
            'Factory', 'Migration', 'Seeder', 'Blade', 'Job & Queue'
        ],
        'Database': [
            'MySQL (Complex Queries, ERD Design, Indexing)', 'Redis (Caching)'
        ],
        'Design Patterns': [
            'SOLID', 'Facade', 'Builder', 'Singleton', 'Observer',
            'Chain of Responsibility', 'Repository Pattern'
        ],
        'Tools & Others': [
            'Git (GitHub & GitLab)', 'Performance Optimization', 'Clean Architecture',
            'Modular Architecture', 'Code Quality'
        ]
    }

    const experiences = [
        {
            title: 'سامانه شتابدهی',
            description: 'پلتفرم مدیریت شتابدهنده‌ها و استارتاپ‌ها',
            technologies: ['Laravel', 'MySQL', 'Redis', 'API Development']
        },
        {
            title: 'سامانه جذب و پذیرش',
            description: 'مدیریت درخواست‌های عضویت و فرآیند پذیرش',
            technologies: ['Laravel', 'Queue System', 'Validation', 'Authentication']
        },
        {
            title: 'سامانه شرکت من',
            description: 'پلتفرم معافیت مالیاتی و مدیریت شرکت‌ها',
            technologies: ['Laravel', 'Complex Queries', 'Performance Optimization']
        },
        {
            title: 'سامانه فن بازار ملی',
            description: '32 ماژول مختلف با کدبیس مشترک',
            technologies: ['Modular Architecture', 'Clean Code', 'SOLID Principles']
        },
        {
            title: 'سامانه واسط',
            description: 'میان‌افزار اتصال بین سیستم‌های مختلف',
            technologies: ['API Integration', 'Middleware', 'Error Handling']
        },
        {
            title: 'پروژه دبیرخانه',
            description: 'بهبود پرفورمنس، دیباگ و توسعه فیچرهای جدید',
            technologies: ['Performance Tuning', 'Debugging', 'Code Refactoring']
        }
    ]

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="floating-elements">
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                </div>
                <div className="golden-particles"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-xl font-bold text-gold-400">علی زیبایی</div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
                            <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">درباره من</a>
                            <a href="#experience" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">تجربه</a>
                            <a href="#skills" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">مهارت‌ها</a>
                            <a href="#education" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">تحصیلات</a>
                            <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">تماس</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-300 hover:text-gold-400 hover:bg-slate-800 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <XMarkIconMobile className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-slate-700">
                            <div className="flex flex-col space-y-4">
                                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>درباره من</a>
                                <a href="#experience" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>تجربه</a>
                                <a href="#skills" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>مهارت‌ها</a>
                                <a href="#education" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>تحصیلات</a>
                                <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>تماس</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 animated-bg">
                <div className="container mx-auto text-center">
                    <div className="animate-fade-in-up">
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full animate-pulse-gold"></div>
                                <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                                    <UserIcon className="h-16 w-16 text-gold-400" />
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                <span className="text-shimmer">علی زیبایی</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-2">Backend Developer</p>
                            <p className="text-lg text-gold-400 mb-8">متخصص PHP/Laravel</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <a
                                href="#contact"
                                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover-glow"
                            >
                                تماس با من
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                            >
                                <DocumentArrowDownIcon className="h-5 w-5" />
                                دانلود رزومه
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDownIcon className="h-8 w-8 text-gold-400" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section-padding animated-bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">درباره من</h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-4 text-gold-400">پروفایل شخصی</h3>
                                    <div className="space-y-3 text-gray-300">
                                        <div className="flex items-center gap-3">
                                            <CalendarDaysIcon className="h-5 w-5 text-gold-400" />
                                            <span>تاریخ تولد: 1380</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <UserIcon className="h-5 w-5 text-gold-400" />
                                            <span>وضعیت تأهل: مجرد</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ShieldCheckIcon className="h-5 w-5 text-gold-400" />
                                            <span>خدمت نظامی: معافیت تحصیلی (تا 2025)</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPinIcon className="h-5 w-5 text-gold-400" />
                                            <span>محل سکونت: البرز، کرج</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-4 text-gold-400">تجربه کاری</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <BuildingOfficeIcon className="h-6 w-6 text-gold-400" />
                                            <div>
                                                <h4 className="font-semibold text-white">Backend Developer</h4>
                                                <p className="text-gray-300">پارک فناوری پردیس</p>
                                                <p className="text-sm text-gold-400">13 ماه تجربه</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-4 text-gold-400">مهارت‌های کلیدی</h3>
                                    <div className="space-y-2 text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <RocketLaunchIcon className="h-4 w-4 text-gold-400" />
                                            <span>Performance Optimization</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CubeIcon className="h-4 w-4 text-gold-400" />
                                            <span>Modular Architecture</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <WrenchScrewdriverIcon className="h-4 w-4 text-gold-400" />
                                            <span>Clean Architecture</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircleIcon className="h-4 w-4 text-gold-400" />
                                            <span>Code Quality & SOLID</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">تجربه کاری</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {experiences.map((experience, index) => (
                                <div
                                    key={index}
                                    className="glass-effect rounded-2xl p-6 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:scale-105 card-hover"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                            <BriefcaseIcon className="h-6 w-6 text-gold-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                                    </div>

                                    <p className="text-gray-300 mb-4">{experience.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-sm border border-gold-500/30"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section-padding animated-bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">مهارت‌های فنی</h2>

                        <div className="grid gap-8">
                            {Object.entries(skills).map(([category, skillList], index) => (
                                <div
                                    key={index}
                                    className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                            {category === 'PHP Core' && <CodeBracketIcon className="h-6 w-6 text-gold-400" />}
                                            {category === 'Laravel Ecosystem' && <ServerIcon className="h-6 w-6 text-gold-400" />}
                                            {category === 'Database' && <ServerIcon  className="h-6 w-6 text-gold-400" />}
                                            {category === 'Design Patterns' && <CpuChipIcon className="h-6 w-6 text-gold-400" />}
                                            {category === 'Tools & Others' && <CommandLineIcon className="h-6 w-6 text-gold-400" />}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{category}</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {skillList.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-gold-500/10 hover:border-gold-500/30 transition-all duration-200"
                                            >
                                                <StarIcon className="h-4 w-4 text-gold-400" />
                                                <span className="text-gray-300">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">تحصیلات</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">مهندسی مکانیک</h3>
                                        <p className="text-gray-300">دانشگاه بین‌المللی امام خمینی</p>
                                    </div>
                                </div>
                                <div className="text-gray-300">
                                    <p className="mb-2">
                                        <span className="text-gold-400">دوره تحصیل:</span> 2020-2025
                                    </p>
                                    <p className="mb-2">
                                        <span className="text-gold-400">وضعیت:</span> در حال تحصیل
                                    </p>
                                </div>
                            </div>

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <BookOpenIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">بوت‌کمپ برنامه‌نویسی</h3>
                                        <p className="text-gray-300">مکتب شریف</p>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-6">
                                    <p className="mb-2">
                                        <span className="text-gold-400">مدت آموزش:</span> +400 ساعت
                                    </p>
                                    <p className="mb-2">
                                        <span className="text-gold-400">تخصص:</span> PHP/Laravel
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    مشاهده مدرک
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding animated-bg">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">تماس با من</h2>

                        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-6 text-gold-400">اطلاعات تماس</h3>
                                    <div className="space-y-4">
                                        <a
                                            href="mailto:alizibaie1380@gmail.com"
                                            className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-200 border border-gold-500/10 hover:border-gold-500/30"
                                        >
                                            <EnvelopeIcon className="h-6 w-6 text-gold-400" />
                                            <div>
                                                <p className="font-semibold text-white">ایمیل</p>
                                                <p className="text-gray-300">alizibaie1380@gmail.com</p>
                                            </div>
                                        </a>

                                        <a
                                            href="tel:+989190728073"
                                            className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-200 border border-gold-500/10 hover:border-gold-500/30"
                                        >
                                            <PhoneIcon className="h-6 w-6 text-gold-400" />
                                            <div>
                                                <p className="font-semibold text-white">تلفن</p>
                                                <p className="text-gray-300">09190728073</p>
                                            </div>
                                        </a>

                                        <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-gold-500/10">
                                            <MapPinIcon className="h-6 w-6 text-gold-400" />
                                            <div>
                                                <p className="font-semibold text-white">آدرس</p>
                                                <p className="text-gray-300">البرز، کرج</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-6 text-gold-400">شبکه‌های اجتماعی</h3>
                                    <div className="space-y-4">
                                        <a
                                            href="https://github.com/AliZibaie"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-200 border border-gold-500/10 hover:border-gold-500/30 group"
                                        >
                                            <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-colors duration-200">
                                                <CodeBracketIcon className="h-5 w-5 text-gold-400" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white">GitHub</p>
                                                <p className="text-gray-300">github.com/AliZibaie</p>
                                            </div>
                                        </a>

                                        <a
                                            href="https://linkedin.com/in/AliZibaie"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-200 border border-gold-500/10 hover:border-gold-500/30 group"
                                        >
                                            <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-colors duration-200">
                                                <GlobeAltIcon className="h-5 w-5 text-gold-400" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white">LinkedIn</p>
                                                <p className="text-gray-300">linkedin.com/in/AliZibaie</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-6 text-gold-400">دانلود رزومه</h3>
                                    <a
                                        href="/cv.pdf"
                                        download
                                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                                    >
                                        <DocumentArrowDownIcon className="h-6 w-6" />
                                        دانلود رزومه PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-800/80 border-t border-slate-700 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-gray-400 mb-4">
                            © 2025 علی زیبایی - Backend Developer. تمام حقوق محفوظ است.
                        </p>
                        <div className="flex justify-center space-x-6 space-x-reverse">
                            <a
                                href="https://github.com/AliZibaie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/AliZibaie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:alizibaie1380@gmail.com"
                                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Certificate Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="glass-effect bg-slate-900/95 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gold-500/30">
                        <div className="flex items-center justify-between p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-gold-400">مدرک بوت‌کمپ برنامه‌نویسی - مکتب شریف</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-slate-800 rounded-full transition-colors duration-200 text-gray-400 hover:text-white"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="relative mb-6">
                                <Image
                                    src="/images/certificate.jpg"
                                    alt="مدرک بوت‌کمپ برنامه‌نویسی علی زیبایی - مکتب شریف"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-lg shadow-lg border border-gold-500/20"
                                    priority
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-gray-300 mb-6">
                                    مدرک تکمیل بوت‌کمپ برنامه‌نویسی PHP/Laravel - بیش از 400 ساعت آموزش عملی
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    بستن
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
