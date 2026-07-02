'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
    ChevronDownIcon,
    CircleStackIcon ,
    CogIcon  ,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    CalendarDaysIcon,
    UserIcon,
    CheckIcon ,
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

    const projects = [
        {
            title: 'Snapfood',
            description: 'نمونه‌کار برای Laravel/PHP',
            technologies: ['Laravel', 'PHP'],
            link: 'https://github.com/AliZibaie/snapfood'
        },
        {
            title: 'Refrigeration Cycles Calculator',
            description: 'وب‌اپلیکیشن Django برای محاسبه چرخه‌های تبرید و تحلیل COP',
            technologies: ['Django', 'Python'],
            link: 'https://github.com/AliZibaie/refrigeration'
        },
        {
            title: 'DesignPardaz',
            description: 'استارتر تمپلیت وب با 4 پنل مدیریتی و درگاه پرداخت',
            technologies: ['Django', 'Next.js', 'MySQL'],
            link: 'https://github.com/AliZibaie/dp-starter'
        },
        {
            title: 'Air Pollution Forecasting',
            description: 'پیش‌بینی آلودگی هوا با مدل‌های LSTM و GRU',
            technologies: ['Deep Learning', 'TensorFlow', 'Python'],
            link: 'https://github.com/AliZibaie/ADV_AI_project'
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
                            <a href="#projects" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">پروژه‌ها</a>
                            <a href="#education" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">تحصیلات</a>
                            <a href="#certificates" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">مدارک</a>
                            <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 px-8">تماس</a>
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
                                <a href="#projects" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>پروژه‌ها</a>
                                <a href="#education" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>تحصیلات</a>
                                <a href="#certificates" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>مدارک</a>
                                <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>تماس</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
                <div className="animated-bg absolute inset-0"></div>
                <div className="floating-elements">
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                </div>
                <div className="golden-particles"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="relative inline-block">
                                <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gold-400 shadow-2xl animate-pulse-gold">
                                    <Image
                                        src="/images/me.jpg"
                                        alt="علی زیبایی - Backend Developer"
                                        width={224}
                                        height={224}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                                    <CodeBracketIcon className="h-8 w-8 text-white" />
                                </div>
                            </div>
                        </div>

                        <h1 className="heading-1 text-white mb-4 animate-fade-in-up">
                            <span className="text-shimmer">علی زیبایی</span>
                        </h1>

                        <div className="text-xl md:text-2xl lg:text-3xl text-gold-400 mb-4 font-semibold animate-fade-in-up">
                            کارآموز هوش مصنوعی
                        </div>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                            توسعه‌دهنده Backend با <span className="text-gold-400 font-bold">PHP/Laravel</span> و
                            <span className="text-gold-400 font-bold"> +13 ماه تجربه کاری</span> در پروژه‌های متنوع.
                            <br />
                            علاقه‌مند به <span className="text-gold-400">یادگیری</span> و
                            <span className="text-gold-400"> بهبود مستمر</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up">
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 hover-glow"
                            >
                                <PhoneIcon className="h-5 w-5" />
                                تماس با من
                            </a>
                            <button
                                onClick={() => window.print()}
                                className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3"
                            >
                                <DocumentArrowDownIcon className="h-5 w-5" />
                                دانلود رزومه (PDF)
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up">
                            <div className="glass-effect rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-gold-400">13+</div>
                                <div className="text-sm text-gray-300">ماه تجربه</div>
                            </div>
                            <div className="glass-effect rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-gold-400">7+</div>
                                <div className="text-sm text-gray-300">پروژه تکمیل شده</div>
                            </div>
                            <div className="glass-effect rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-gold-400">32</div>
                                <div className="text-sm text-gray-300">ماژول توسعه یافته</div>
                            </div>
                            <div className="glass-effect rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-gold-400">400+</div>
                                <div className="text-sm text-gray-300">ساعت آموزش</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Section */}
            {/* About Section - Honest & Professional */}
            <section id="about" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 text-white mb-6">درباره من</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold text-gold-400 mb-4">کارآموز هوش مصنوعی</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        با 13 ماه تجربه کاری در پارک فناوری پردیس، مسیر توسعه backend را با
                                        <span className="text-gold-400 font-semibold"> PHP/Laravel</span> آغاز کرده‌ام.
                                        علاقه‌مند به یادگیری تکنولوژی‌های جدید و بهبود مستمر مهارت‌هایم.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-gold-400 font-bold text-lg">13+</div>
                                            <div className="text-sm text-gray-300">ماه تجربه</div>
                                        </div>
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-gold-400 font-bold text-lg">Laravel</div>
                                            <div className="text-sm text-gray-300">تخصص اصلی</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {['PHP/Laravel', 'MySQL', 'RESTful API', 'Git', 'Clean Code'].map((skill) => (
                                            <span key={skill} className="bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full text-sm border border-gold-500/30">
                  {skill}
                </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold text-gold-400 mb-6">دستاوردها و تجربیات</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">32 ماژول در فن بازار ملی</div>
                                                <div className="text-gray-300 text-sm">توسعه و تست ماژول‌های مختلف</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">یادگیری Clean Architecture</div>
                                                <div className="text-gray-300 text-sm">اصول Service Pattern و Repository</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">تسلط بر Laravel Ecosystem</div>
                                                <div className="text-gray-300 text-sm">Eloquent, Migrations, Artisan</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">مدرک تخصصی Laravel</div>
                                                <div className="text-gray-300 text-sm">مکتب شریف - 400+ ساعت</div>
                                            </div>
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

                        <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 mb-12 max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Backend Developer</h3>
                            <p className="text-gray-300">
                                <span className="text-gold-400">پارک فناوری پردیس</span> — <span className="text-gold-400">13 ماه</span> سابقه کاری
                            </p>
                        </div>

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
            {/* Skills Section - Junior Level */}
            <section id="skills" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 text-white mb-6">مهارت‌ها</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Backend Skills */}
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 card-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                                        <ServerIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gold-400">Backend</h3>
                                        <p className="text-gray-300 text-sm">تخصص اصلی</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">PHP</span>
                                            <span className="text-gold-400 text-sm">Good</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Laravel</span>
                                            <span className="text-gold-400 text-sm">Good</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full" style={{width: '80%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">RESTful API</span>
                                            <span className="text-gold-400 text-sm">Intermediate</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full" style={{width: '70%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">OOP</span>
                                            <span className="text-gold-400 text-sm">Intermediate</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full" style={{width: '65%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Database */}
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 card-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <CircleStackIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-400">Database</h3>
                                        <p className="text-gray-300 text-sm">پایگاه داده</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">MySQL</span>
                                            <span className="text-blue-400 text-sm">Good</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Eloquent ORM</span>
                                            <span className="text-blue-400 text-sm">Good</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Database Design</span>
                                            <span className="text-blue-400 text-sm">Intermediate</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Query Optimization</span>
                                            <span className="text-blue-400 text-sm">Beginner</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tools & Others */}
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 card-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <CogIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-green-400">Tools & Others</h3>
                                        <p className="text-gray-300 text-sm">ابزارها</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Git</span>
                                            <span className="text-green-400 text-sm">Good</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Postman</span>
                                            <span className="text-green-400 text-sm">Good</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Docker</span>
                                            <span className="text-green-400 text-sm">Beginner</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '40%'}}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-semibold">Linux</span>
                                            <span className="text-green-400 text-sm">Beginner</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 text-white mb-6">پروژه‌ها</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-effect rounded-2xl p-6 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:scale-105 card-hover block"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                            <CodeBracketIcon className="h-6 w-6 text-gold-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    </div>

                                    <p className="text-gray-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-sm border border-gold-500/30"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </a>
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
                                        <span className="text-gold-400">وضعیت:</span>تمام شده
                                    </p>
                                </div>
                            </div>

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">کارشناسی ارشد مهندسی مکانیک</h3>
                                        <p className="text-gray-300">دانشگاه خواجه نصیرالدین طوسی</p>
                                    </div>
                                </div>
                                <div className="text-gray-300">
                                    <p className="mb-2">
                                        <span className="text-gold-400">گرایش:</span> طراحی کاربردی
                                    </p>
                                    <p className="mb-2">
                                        <span className="text-gold-400">گروه آموزشی:</span> دینامیک، ارتعاشات و کنترل
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">مدارک</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Supervised Machine Learning</h3>
                                        <p className="text-gray-300">DeepLearning.AI & Stanford University - Coursera</p>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-6">
                                    <p className="mb-2">
                                        <span className="text-gold-400">تاریخ:</span> Mar 16, 2025
                                    </p>
                                </div>
                                <a
                                    href="https://coursera.org/verify/J12WOOJE8W9T"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    مشاهده مدرک
                                </a>
                            </div>

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Algorithms: Divide and Conquer, Sorting, Searching & Randomized Algorithms</h3>
                                        <p className="text-gray-300">Stanford University - Coursera</p>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-6">
                                    <p className="mb-2">
                                        <span className="text-gold-400">تاریخ:</span> Apr 2, 2025
                                    </p>
                                </div>
                                <a
                                    href="https://coursera.org/verify/9K7Q2QXR2XM7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    مشاهده مدرک
                                </a>
                            </div>

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Machine Learning with Python</h3>
                                        <p className="text-gray-300">freeCodeCamp</p>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-6">
                                    <a
                                        href="https://github.com/AliZibaie/freeCodeCamp-Machine-Learning-with-Python-Projects"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gold-400 hover:underline"
                                    >
                                        مشاهده پروژه‌ها در GitHub
                                    </a>
                                </div>
                                <a
                                    href="https://www.freecodecamp.org/certification/alizibaie/machine-learning-with-python-v7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    مشاهده مدرک
                                </a>
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
                                    <button
                                        onClick={() => {
                                            // اول چک کنیم فایل PDF موجوده یا نه
                                            fetch('/cv.pdf')
                                                .then(response => {
                                                    if (response.ok) {
                                                        // اگه فایل PDF موجود باشه، دانلود کنه
                                                        const link = document.createElement('a');
                                                        link.href = '/cv.pdf';
                                                        link.download = 'ali-zibaei-resume.pdf';
                                                        link.click();
                                                    } else {
                                                        // اگه فایل PDF نباشه، پرینت کنه
                                                        window.print();
                                                    }
                                                })
                                                .catch(() => {
                                                    // در صورت خطا، پرینت کنه
                                                    window.print();
                                                });
                                        }}
                                        className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3"
                                    >
                                        <DocumentArrowDownIcon className="h-5 w-5" />
                                        دانلود رزومه (PDF)
                                    </button>
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
                                className="text-gray-400 hover:text-gold-400 transition-colors duration-200 px-6"
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