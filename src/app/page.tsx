'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
    ChevronDownIcon,
    CircleStackIcon,
    CogIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    CalendarDaysIcon,
    UserIcon,
    CheckIcon,
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
        ],
        'AI & Machine Learning': [
            'Supervised & Unsupervised Learning',
            'Fine-tuning Pre-trained Models (SAM3, YOLO, ResNet)',
            'Deep Neural Networks: MLP, CNN, RNN, LSTM, GRU',
            'Unsupervised & Classical Algorithms: SOM, K-Means, Gaussian Mixture Models, EM Clustering',
            'Statistical Analysis (t-test, ANOVA, Chi-square, Mann-Whitney U, Kruskal-Wallis, Wilcoxon, Friedman, Iman-Davenport, McNemar)',
            'Data Preprocessing (Normalization, Standardization, PCA, t-SNE, LDA, Feature Selection, Encoding, Missing Value Imputation, Outlier Detection, Handling Imbalanced Data, Data Augmentation)',
            'Model Evaluation (Confusion Matrix, ROC-AUC, Precision-Recall, F1-Score, Sensitivity, Specificity, Accuracy, Kappa, Log Loss)',
            'Machine Learning Algorithms: SVM, KNN, Ensemble Learning (Random Forest, Gradient Boosting, AdaBoost, XGBoost, Stacking, Bagging)',
            'Python Ecosystem: NumPy, Pandas, Scikit-learn, TensorFlow, Statsmodels, SciPy, Matplotlib, Seaborn, Imbalanced-learn, XGBoost, LightGBM, CatBoost'
        ]
    }

    const experiences = [
        {
            title: 'Acceleration',
            description: 'Platform for managing accelerators and startups',
            technologies: ['Laravel', 'MySQL', 'Redis', 'API Development']
        },
        {
            title: 'membership',
            description: 'Managing membership requests and admission process',
            technologies: ['Laravel', 'Queue System', 'Validation', 'Authentication']
        },
        {
            title: 'My Company(MyCo) System',
            description: 'Tax exemption platform and company management',
            technologies: ['Laravel', 'Complex Queries', 'Performance Optimization']
        },
        {
            title: 'Fanbazar Meli',
            description: '32 different modules with shared codebase',
            technologies: ['Modular Architecture', 'Clean Code', 'SOLID Principles']
        },
        {
            title: 'Interface System',
            description: 'Middleware connecting different systems',
            technologies: ['API Integration', 'Middleware', 'Error Handling']
        },
        {
            title: 'DabirKhane',
            description: 'Performance improvement, debugging, and new feature development',
            technologies: ['Performance Tuning', 'Debugging', 'Code Refactoring']
        }
    ]

    const projects = [
        {
            title: 'Snapfood',
            description: 'A full-featured clone of the popular food delivery platform Snapfood, built with Laravel. Includes user authentication, restaurant browsing, shopping cart, order management, and payment integration.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'RESTful API'],
            link: 'https://github.com/AliZibaie/snapfood'
        },
        {
            title: 'Refrigeration Cycles Calculator',
            description: 'Django web app for refrigeration cycle calculation and COP analysis',
            technologies: ['Django', 'Python'],
            link: 'https://github.com/AliZibaie/refrigeration'
        },
        {
            title: 'DesignPardaz',
            description: 'Web template starter with 4 admin panels and payment gateway',
            technologies: ['Django', 'Next.js', 'MySQL'],
            link: 'https://github.com/AliZibaie/dp-starter'
        },
        {
            title: 'Air Pollution Forecasting',
            description: 'Air pollution forecasting using LSTM and GRU models',
            technologies: ['Deep Learning', 'TensorFlow', 'Python'],
            link: 'https://github.com/AliZibaie/ADV_AI_project'
        }
    ]

    return (
        <div className="min-h-screen bg-slate-900 text-white">
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

            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-xl font-bold text-gold-400">Ali Zibaie</div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">About</a>
                            <a href="#experience" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">Experience</a>
                            <a href="#skills" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">Skills</a>
                            <a href="#projects" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">Projects</a>
                            <a href="#education" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">Education</a>
                            <a href="#certificates" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">Certificates</a>
                            <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 px-8">Contact</a>
                        </div>

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

                    {isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-slate-700">
                            <div className="flex flex-col space-y-4">
                                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                                <a href="#experience" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
                                <a href="#skills" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                                <a href="#projects" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                                <a href="#education" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
                                <a href="#certificates" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Certificates</a>
                                <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

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
                    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                        <div className="flex-1 text-center md:text-left order-2 md:order-1">
                            <h1 className="heading-1 text-white mb-4 animate-fade-in-up">
                                <span className="text-shimmer">Ali Zibaie</span>
                            </h1>

                            <div className="text-xl md:text-2xl lg:text-3xl text-gold-400 mb-4 font-semibold animate-fade-in-up">
                                AI Intern
                            </div>

                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed animate-fade-in-up mx-auto md:mx-0">
                                Backend Developer with <span className="text-gold-400 font-bold">PHP/Laravel</span> and
                                <span className="text-gold-400 font-bold"> +13 months of work experience</span> in various projects.
                                <br />
                                Passionate about <span className="text-gold-400">learning</span> and
                                <span className="text-gold-400"> continuous improvement</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 animate-fade-in-up">
                                <a
                                    href="#contact"
                                    className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 hover-glow"
                                >
                                    <PhoneIcon className="h-5 w-5" />
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                            <div className="relative inline-block">
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold-400 shadow-2xl animate-pulse-gold">
                                    <Image
                                        src="/images/me.jpg"
                                        alt="Ali Zibaie - Backend Developer"
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
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 animate-fade-in-up">
                        <div className="glass-effect rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-gold-400">+13</div>
                            <div className="text-sm text-gray-300">Months Experience</div>
                        </div>
                        <div className="glass-effect rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-gold-400">+7</div>
                            <div className="text-sm text-gray-300">Projects Completed</div>
                        </div>
                        <div className="glass-effect rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-gold-400">32</div>
                            <div className="text-sm text-gray-300">Modules Developed</div>
                        </div>
                        <div className="glass-effect rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-gold-400">+400</div>
                            <div className="text-sm text-gray-300">Hours of Training</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 text-white mb-6">About Me</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold text-gold-400 mb-4">AI Intern</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        With 13 months of work experience in Pardis Technology Park, I started my backend development journey with
                                        <span className="text-gold-400 font-semibold"> PHP/Laravel</span>.
                                        I am passionate about learning new technologies and continuously improving my skills.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-gold-400 font-bold text-lg">13+</div>
                                            <div className="text-sm text-gray-300">Months Experience</div>
                                        </div>
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-gold-400 font-bold text-lg">Laravel</div>
                                            <div className="text-sm text-gray-300">Core Specialization</div>
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
                                    <h3 className="text-2xl font-bold text-gold-400 mb-6">Achievements &amp; Experiences</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">32 Modules in National Tech Market</div>
                                                <div className="text-gray-300 text-sm">Development and testing of various modules</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">Learning Clean Architecture</div>
                                                <div className="text-gray-300 text-sm">Service Pattern and Repository principles</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">Mastery of Laravel Ecosystem</div>
                                                <div className="text-gray-300 text-sm">Eloquent, Migrations, Artisan</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckIcon className="h-4 w-4 text-gold-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">Laravel Specialization Certificate</div>
                                                <div className="text-gray-300 text-sm">Maktab Sharif - 400+ hours</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">Work Experience</h2>

                        <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 mb-12 max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Backend Developer</h3>
                            <p className="text-gray-300">
                                <span className="text-gold-400">Pardis Technology Park</span> — <span className="text-gold-400">13 months</span> of experience
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

            <section id="skills" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 text-white mb-6">Skills</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 card-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                                        <ServerIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gold-400">Backend</h3>
                                        <p className="text-gray-300 text-sm">Core Specialization</p>
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

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 card-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <CircleStackIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-400">Database</h3>
                                        <p className="text-gray-300 text-sm">Data Management</p>
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

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 card-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <CogIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-green-400">Tools &amp; Others</h3>
                                        <p className="text-gray-300 text-sm">Utilities</p>
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

                            {/* Enhanced AI & Machine Learning Card */}
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 card-hover col-span-1 lg:col-span-3">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <CpuChipIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-purple-400">AI &amp; Machine Learning</h3>
                                        <p className="text-gray-300 text-sm">Emerging Specialization</p>
                                    </div>
                                </div>

                                {/* Detailed categories */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Learning Paradigms</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Supervised Learning</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Unsupervised Learning</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Statistical Analysis</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">t‑test</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">ANOVA</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Chi‑square</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Mann‑Whitney U</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Kruskal‑Wallis</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Wilcoxon</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Friedman</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Iman‑Davenport</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">McNemar</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Deep Neural Networks</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">MLP</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">CNN</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">RNN</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">LSTM</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">GRU</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Unsupervised &amp; Classical Algorithms</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">SOM</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">K‑Means</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Gaussian Mixture Models</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">EM Clustering</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Machine Learning Algorithms</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">SVM</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">KNN</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Random Forest</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Gradient Boosting</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">AdaBoost</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">XGBoost</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Stacking</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Bagging</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Dimensionality Reduction</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">PCA</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">t‑SNE</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">LDA</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Fine‑tuning &amp; Pre‑trained Models</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">SAM3</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">YOLO</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">ResNet</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Data Preprocessing</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Normalization</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Standardization</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Feature Selection</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Encoding</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Missing Value Imputation</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Outlier Detection</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Handling Imbalanced Data</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Data Augmentation</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Model Evaluation</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Confusion Matrix</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">ROC‑AUC</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Precision‑Recall</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">F1‑Score</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Sensitivity</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Specificity</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Accuracy</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Kappa</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Log Loss</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Python Ecosystem</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">NumPy</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Pandas</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Scikit‑learn</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">TensorFlow</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Statsmodels</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">SciPy</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Matplotlib</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Seaborn</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Imbalanced‑learn</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">XGBoost</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">LightGBM</span>
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">CatBoost</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 text-white mb-6">Projects</h2>
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

            <section id="education" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">Education</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Mechanical Engineering</h3>
                                        <p className="text-gray-300">Imam Khomeini International University</p>
                                    </div>
                                </div>
                                <div className="text-gray-300">
                                    <p className="mb-2">
                                        <span className="text-gold-400">Duration:</span> 2020-2025
                                    </p>
                                    <p className="mb-2">
                                        <span className="text-gold-400">Status:</span> Completed
                                    </p>
                                </div>
                            </div>

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Master of Mechanical Engineering</h3>
                                        <p className="text-gray-300">K. N. Toosi University of Technology</p>
                                    </div>
                                </div>
                                <div className="text-gray-300">
                                    <p className="mb-2">
                                        <span className="text-gold-400">Major:</span> Applied Design
                                    </p>
                                    <p className="mb-2">
                                        <span className="text-gold-400">Department:</span> Dynamics, Vibrations and Control
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="certificates" className="section-padding bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">Certificates</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <BookOpenIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Programming Bootcamp</h3>
                                        <p className="text-gray-300">Maktab Sharif</p>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-6">
                                    <p className="mb-2">
                                        <span className="text-gold-400">Training Duration:</span> +400 hours
                                    </p>
                                    <p className="mb-2">
                                        <span className="text-gold-400">Specialization:</span> PHP/Laravel
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    View Certificate
                                </button>
                            </div>

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Supervised Machine Learning</h3>
                                        <p className="text-gray-300">DeepLearning.AI &amp; Stanford University - Coursera</p>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-6">
                                    <p className="mb-2">
                                        <span className="text-gold-400">Date:</span> Mar 16, 2025
                                    </p>
                                </div>
                                <a
                                    href="https://coursera.org/verify/J12WOOJE8W9T"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    View Certificate
                                </a>
                            </div>

                            <div className="glass-effect rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Algorithms: Divide and Conquer, Sorting, Searching &amp; Randomized Algorithms</h3>
                                        <p className="text-gray-300">Stanford University - Coursera</p>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-6">
                                    <p className="mb-2">
                                        <span className="text-gold-400">Date:</span> Apr 2, 2025
                                    </p>
                                </div>
                                <a
                                    href="https://coursera.org/verify/9K7Q2QXR2XM7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    View Certificate
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
                                        View Projects on GitHub
                                    </a>
                                </div>
                                <a
                                    href="https://www.freecodecamp.org/certification/alizibaie/machine-learning-with-python-v7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <EyeIcon className="h-5 w-5" />
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section-padding animated-bg">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold-400">Contact Me</h2>

                        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-6 text-gold-400">Contact Information</h3>
                                    <div className="space-y-4">
                                        <a
                                            href="mailto:alizibaie1380@gmail.com"
                                            className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-200 border border-gold-500/10 hover:border-gold-500/30"
                                        >
                                            <EnvelopeIcon className="h-6 w-6 text-gold-400" />
                                            <div>
                                                <p className="font-semibold text-white">Email</p>
                                                <p className="text-gray-300">alizibaie1380@gmail.com</p>
                                            </div>
                                        </a>

                                        <a
                                            href="tel:+989190728073"
                                            className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-200 border border-gold-500/10 hover:border-gold-500/30"
                                        >
                                            <PhoneIcon className="h-6 w-6 text-gold-400" />
                                            <div>
                                                <p className="font-semibold text-white">Phone</p>
                                                <p className="text-gray-300">+98 919 072 8073</p>
                                            </div>
                                        </a>

                                        <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-gold-500/10">
                                            <MapPinIcon className="h-6 w-6 text-gold-400" />
                                            <div>
                                                <p className="font-semibold text-white">Address</p>
                                                <p className="text-gray-300">Alborz, Karaj</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="glass-effect rounded-2xl p-8 border border-gold-500/20">
                                    <h3 className="text-2xl font-bold mb-6 text-gold-400">Social Networks</h3>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-800/80 border-t border-slate-700 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-gray-400 mb-4">
                            &copy; 2025 Ali Zibaie - Backend Developer. All rights reserved.
                        </p>
                        <div className="flex justify-center space-x-6">
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

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="glass-effect bg-slate-900/95 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gold-500/30">
                        <div className="flex items-center justify-between p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-gold-400">Programming Bootcamp Certificate - Maktab Sharif</h3>
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
                                    alt="Ali Zibaie Programming Bootcamp Certificate - Maktab Sharif"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-lg shadow-lg border border-gold-500/20"
                                    priority
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-gray-300 mb-6">
                                    Completion certificate of PHP/Laravel programming bootcamp - over 400 hours of practical training
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}