// Translation object
const translations = {
    en: {
        "title": "Welcome to Reda's Protfolio",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-testimonials": "Testimonials",
        "nav-contact": "Contact",
        "home-greeting": "Hello, my name is",
        "home-intro": "And I'm a",
        "home-hire": "Hire me",
        "about-title": "About me",
        "about-intro": "I'm REDA and I'm a",
        "about-description": "Data-driven CRM Specialist and Business Analyst passionate about turning numbers into stories that boost customer loyalty. Fluent in English and French, I thrive on building smart, automated marketing workflows that save time and maximize impact. With hands-on experience in Power BI, Looker Studio, and Tableau, I love crafting insights that actually move the needle. From designing targeted CRM campaigns to audience segmentation and performance analysis, I bring a creative yet analytical touch. Naturally collaborative, I enjoy connecting data, creativity, and automation to deliver strategies that truly resonate.",
        "services-title": "My services",
        "services-data-title": "Data Analysis",
        "services-data-1": "Develop interactive dashboards (Power BI, Tableau)",
        "services-data-2": "Optimize data pipelines and ETL processes",
        "services-data-3": "KPIs analysis to extract exploitable insights",
        "services-data-4": "Identify key trends and business opportunities",
        "services-automation-title": "Process Automation",
        "services-automation-1": "Identify inefficiencies and optimize workflows",
        "services-automation-2": "Automate repetitive business processes",
        "services-automation-3": "Automate data reporting and visualization",
        "services-automation-4": "Integrate API solutions for seamless data exchange",
        "services-crm-title": "CRM Optimization",
        "services-crm-1": "Optimize CRM tools (Salesforce, HubSpot, Zoho)",
        "services-crm-2": "Integrate CRM with analytics tools (GA4, Looker Studio)",
        "services-crm-3": "Enhance the user experience UX by optimizing the customer journey",
        "services-crm-4": "Perform A/B testing for marketing insights",
        "skills-title": "My skills",
        "skills-expert-title": "Data & Automation Expert",
        "skills-expert-description": "Skilled in advanced analytics using Python, SQL, and visualization tools like Power BI and Tableau to transform complex data into actionable insights. Proficient in CRM optimization, API integration, and AI-driven automation to streamline workflows and enhance efficiency. Leverage AI agents and automation to accelerate data analysis, optimize processes, and deliver high-impact business solutions in less time.",
        "skills-analytics-title": "Data Analytics",
        "skills-analytics-desc": "Power BI, Tableau, Advanced Analytics",
        "skills-management-title": "Data Management",
        "skills-management-desc": "ETL, Data Pipeline Optimization",
        "skills-automation-title": "Automation",
        "skills-automation-desc": "Process and Workflow Automation",
        "skills-pm-title": "Project Management",
        "skills-pm-desc": "Agile, Team Coordination",
        "skills-bi-title": "Business Intelligence",
        "skills-bi-desc": "KPI Analysis, Reporting",
        "skills-crm-title": "CRM",
        "skills-crm-desc": "Salesforce, HubSpot, Zoho",
        "projects-title": "My Projects",
        "project-1-title": "Link-Keywords Integration",
        "project-1-desc": "I was responsible for writing content for artists pages on See Tickets ticketing website. Initially, I manually added links to keywords in the text. To automize this process, I developed a Python application, boosting SEO and driving more traffic to concert listings. I kept the keywords list up to date by analyzing the most searched terms and queries using Google Analytics. Additionally, I deployed Semrush for insights to guide the selection process and improve user navigation.",
        "project-2-title": "Spotify iFrame API",
        "project-2-desc": "I optimized musicians pages on See Tickets website by integrating the Spotify iframe API. This allowed for an easy playback of music directly on the page, enriching the user experience. Following approval from senior marketing executives, the API was rolled out across all website pages, ensuring consistency and maximizing engagement with a variety of content options.",
        "project-3-title": "Sales Dashboard Power BI",
        "project-3-desc-1": "Designed Power BI dashboards to analyze sales performance across multiple regions and product lines.",
        "project-3-desc-2": "Created dynamic KPI visualizations with drill-down capabilities.",
        "project-3-desc-3": "Implemented DAX measures for advanced calculations and custom aggregations.",
        "project-3-desc-4": "Set up automated data refresh using Power BI Gateway, ensuring real-time insights from multiple data sources including SQL Server and Excel files.",
        "project-4-title": "Web Scrapping Data",
        "project-4-desc-1": "Using Selenium libray, I wrote a python script that collects Data from online insights reports and websites.",
        "project-4-desc-2": "I placed the Data in a PowerPoint file using Microsoft python API",
        "project-4-desc-3": "When the script is launched it sends automatic communication emails through outlook including a PDF/PowerPoint file with daily Data",
        "project-5-title": "REST API to SQL Pipeline",
        "project-5-desc-1": "Developed an ETL pipeline using Python to automate data extraction from multiple REST APIs.",
        "project-5-desc-2": "Engineered data transformation logic using Pandas to clean, normalize, and structure the API response data, ensuring data quality and consistency.",
        "project-5-desc-3": "Implemented an efficient SQL database schema and used SQLAlchemy ORM to handle automated data loading and updates.",
        "project-5-desc-4": "Improved data accuracy by eliminating human error in data entry.",
        "testimonials-title": "What People Say",
        "testimonial-1": "\"It was a pleasure to work with Reda. His commitment, autonomy and ability to adapt to any situation make him a valuable asset. He's always looking to improve and is interested in all aspects of e-commerce and the web in general. He is also bilingual and has a broad general knowledge, enabling him to integrate quickly into any environment.\"",
        "testimonial-2": "\"Reda is a young man full of talent, adaptable, a source of new ideas. I recommend .\"",
        "testimonial-3": "\"Reda proved to be a talented and passionate professional. He has a perfect command of digital marketing strategies and tools, and his innovative ideas have always been invaluable in our projects. Reda is also an excellent communicator, able to work effectively in a team. I highly recommend Reda for any digital marketing opportunity.\"",
        "testimonial-4": "\" Reda is a serious and dedicated young man. He has great communication and professional skills in his field of work and I would highly recommend him.\"",
        "testimonial-5": "\"I highly recommend Reda !!.\"",
        "contact-title": "Contact me",
        "contact-getintouch": "Get in Touch",
        "contact-description": "Whether you're interested in working with me or just want to say hello. Please use the form below or send an email to",
        "contact-name": "Name",
        "contact-address": "Address",
        "contact-email": "Email",
        "contact-message": "Message me",
        "contact-form-name": "Name",
        "contact-form-email": "Email",
        "contact-form-subject": "Subject",
        "contact-form-message": "Message..",
        "contact-send": "Send message",
        "resume-fr": "Download Resume (FR)",
        "resume-en": "Download Resume (EN)",
        "footer-text-1": "Created By",
        "footer-text-2": "All rights reserved."
    },
    fr: {
        "title": "Bienvenue sur le Portfolio de Reda",
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-services": "Services",
        "nav-skills": "Compétences",
        "nav-projects": "Projets",
        "nav-testimonials": "Témoignages",
        "nav-contact": "Contact",
        "home-greeting": "Bonjour, je m'appelle",
        "home-intro": "Et je suis",
        "home-hire": "Contactez-moi",
        "about-title": "À propos de moi",
        "about-intro": "Je suis REDA et je suis",
        "about-description": "Spécialisé en CRM, Data et Transformation Digitale, je conçois et optimise des parcours utilisateurs, modélise des processus métier et pilote des projets agiles pour améliorer la performance commerciale et opérationnelle. Bilingue en anglais et en français, j'excelle dans la création de flux de travail marketing intelligents et automatisés qui font gagner du temps et maximisent l'impact. Fort d'une expérience pratique avec Power BI, Looker Studio et Tableau, j'aime créer des insights qui font vraiment la différence. De la conception de campagnes CRM ciblées à la segmentation d'audience et à l'analyse de performance, j'apporte une touche créative et analytique. Naturellement collaboratif, j'aime connecter les données, la créativité et l'automatisation pour livrer des stratégies qui résonnent vraiment.",
        "services-title": "Mes services",
        "services-data-title": "Analyse de données",
        "services-data-1": "Développer des tableaux de bord interactifs (Power BI, Tableau)",
        "services-data-2": "Optimiser les pipelines de données et les processus ETL",
        "services-data-3": "Analyse des KPI pour extraire des insights exploitables",
        "services-data-4": "Identifier les tendances clés et les opportunités commerciales",
        "services-automation-title": "Automatisation de processus",
        "services-automation-1": "Identifier les inefficacités et optimiser les flux de travail",
        "services-automation-2": "Automatiser les processus métier répétitifs",
        "services-automation-3": "Automatiser le reporting et la visualisation des données",
        "services-automation-4": "Intégrer des solutions API pour un échange de données transparent",
        "services-crm-title": "Optimisation CRM",
        "services-crm-1": "Optimiser les outils CRM (Salesforce, HubSpot, Zoho)",
        "services-crm-2": "Intégrer le CRM avec les outils d'analyse (GA4, Looker Studio)",
        "services-crm-3": "Améliorer l'expérience utilisateur UX en optimisant le parcours client",
        "services-crm-4": "Effectuer des tests A/B pour des insights marketing",
        "skills-title": "Mes compétences",
        "skills-expert-title": "Expert en Données et Automatisation",
        "skills-expert-description": "Compétent en analyse avancée utilisant Python, SQL et des outils de visualisation comme Power BI et Tableau pour transformer des données complexes en insights exploitables. Maîtrise de l'optimisation CRM, de l'intégration API et de l'automatisation basée sur l'IA pour rationaliser les flux de travail et améliorer l'efficacité. Exploiter les agents IA et l'automatisation pour accélérer l'analyse de données, optimiser les processus et livrer des solutions business à fort impact en moins de temps.",
        "skills-analytics-title": "Analyse de données",
        "skills-analytics-desc": "Power BI, Tableau, Analyse avancée",
        "skills-management-title": "Gestion de données",
        "skills-management-desc": "ETL, Optimisation des pipelines de données",
        "skills-automation-title": "Automatisation",
        "skills-automation-desc": "Automatisation des processus et flux de travail",
        "skills-pm-title": "Gestion de projet",
        "skills-pm-desc": "Agile, Coordination d'équipe",
        "skills-bi-title": "Business Intelligence",
        "skills-bi-desc": "Analyse KPI, Reporting",
        "skills-crm-title": "CRM",
        "skills-crm-desc": "Salesforce, HubSpot, Zoho",
        "projects-title": "Mes projets",
        "project-1-title": "Intégration de liens-mots-clés",
        "project-1-desc": "J'étais responsable de la rédaction de contenu pour les pages d'artistes sur le site de billetterie See Tickets. Initialement, j'ajoutais manuellement des liens aux mots-clés dans le texte. Pour automatiser ce processus, j'ai développé une application Python, améliorant le SEO et générant plus de trafic vers les listes de concerts. J'ai maintenu la liste des mots-clés à jour en analysant les termes et requêtes les plus recherchés avec Google Analytics. De plus, j'ai déployé Semrush pour des insights afin de guider le processus de sélection et améliorer la navigation utilisateur.",
        "project-2-title": "API Spotify iFrame",
        "project-2-desc": "J'ai optimisé les pages de musiciens sur le site See Tickets en intégrant l'API Spotify iframe. Cela a permis une lecture facile de la musique directement sur la page, enrichissant l'expérience utilisateur. Suite à l'approbation des dirigeants marketing, l'API a été déployée sur toutes les pages du site, assurant la cohérence et maximisant l'engagement avec une variété d'options de contenu.",
        "project-3-title": "Tableau de bord des ventes Power BI",
        "project-3-desc-1": "Conçu des tableaux de bord Power BI pour analyser les performances de vente dans plusieurs régions et lignes de produits.",
        "project-3-desc-2": "Créé des visualisations KPI dynamiques avec capacités de drill-down.",
        "project-3-desc-3": "Implémenté des mesures DAX pour des calculs avancés et des agrégations personnalisées.",
        "project-3-desc-4": "Configuré l'actualisation automatique des données avec Power BI Gateway, assurant des insights en temps réel à partir de multiples sources de données incluant SQL Server et fichiers Excel.",
        "project-4-title": "Web Scraping de données",
        "project-4-desc-1": "En utilisant la bibliothèque Selenium, j'ai écrit un script Python qui collecte des données à partir de rapports d'insights en ligne et de sites web.",
        "project-4-desc-2": "J'ai placé les données dans un fichier PowerPoint en utilisant l'API Python Microsoft",
        "project-4-desc-3": "Lorsque le script est lancé, il envoie automatiquement des emails de communication via Outlook incluant un fichier PDF/PowerPoint avec les données quotidiennes",
        "project-5-title": "Pipeline REST API vers SQL",
        "project-5-desc-1": "Développé un pipeline ETL utilisant Python pour automatiser l'extraction de données à partir de multiples API REST.",
        "project-5-desc-2": "Conçu une logique de transformation de données utilisant Pandas pour nettoyer, normaliser et structurer les données de réponse API, assurant la qualité et la cohérence des données.",
        "project-5-desc-3": "Implémenté un schéma de base de données SQL efficace et utilisé SQLAlchemy ORM pour gérer le chargement et les mises à jour automatisés des données.",
        "project-5-desc-4": "Amélioré la précision des données en éliminant les erreurs humaines dans la saisie de données.",
        "testimonials-title": "Ce que les gens disent",
        "testimonial-1": "\"Ce fut un plaisir de travailler avec Reda. Son engagement, son autonomie et sa capacité à s'adapter à toute situation en font un atout précieux. Il cherche toujours à s'améliorer et s'intéresse à tous les aspects de l'e-commerce et du web en général. Il est également bilingue et possède une vaste culture générale, lui permettant de s'intégrer rapidement dans tout environnement.\"",
        "testimonial-2": "\"Reda est un jeune homme plein de talent, adaptable, une source de nouvelles idées. Je recommande .\"",
        "testimonial-3": "\"Reda s'est avéré être un professionnel talentueux et passionné. Il maîtrise parfaitement les stratégies et outils de marketing digital, et ses idées innovantes ont toujours été inestimables dans nos projets. Reda est également un excellent communicateur, capable de travailler efficacement en équipe. Je recommande vivement Reda pour toute opportunité de marketing digital.\"",
        "testimonial-4": "\" Reda est un jeune homme sérieux et dévoué. Il possède de grandes compétences en communication et professionnelles dans son domaine de travail et je le recommanderais vivement.\"",
        "testimonial-5": "\"Je recommande vivement Reda !!.\"",
        "contact-title": "Contactez-moi",
        "contact-getintouch": "Entrer en contact",
        "contact-description": "Que vous soyez intéressé par une collaboration ou que vous souhaitiez simplement dire bonjour. Veuillez utiliser le formulaire ci-dessous ou envoyer un email à",
        "contact-name": "Nom",
        "contact-address": "Adresse",
        "contact-email": "Email",
        "contact-message": "Écrivez-moi",
        "contact-form-name": "Nom",
        "contact-form-email": "Email",
        "contact-form-subject": "Sujet",
        "contact-form-message": "Message..",
        "contact-send": "Envoyer le message",
        "resume-fr": "Télécharger CV (FR)",
        "resume-en": "Télécharger CV (EN)",
        "footer-text-1": "Créé par",
        "footer-text-2": "Tous droits réservés."
    }
};

// Language management
let currentLang = 'en';
try {
    if (typeof(Storage) !== "undefined") {
        currentLang = localStorage.getItem('language') || 'en';
    }
} catch(e) {
    currentLang = 'en';
}
let typedInstance1 = null;
let typedInstance2 = null;

// Function to translate text
function translatePage(lang) {
    try {
        currentLang = lang;
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('language', lang);
        }
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('lang', lang);
        
        // Update title
        const titleEl = document.querySelector('title[data-translate="title"]');
        if (titleEl && translations[lang] && translations[lang].title) {
            titleEl.textContent = translations[lang].title;
        }
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    // For regular text elements, just replace the content
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-placeholder-translate]').forEach(element => {
            const key = element.getAttribute('data-placeholder-translate');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update typing animations - only if Typed is available
        if (typeof Typed !== 'undefined') {
            const typingStrings = lang === 'fr' 
                ? ["Analyste Business", "Spécialiste CRM", "Chef de projet"]
                : ["Business Analyst", "CRM Specialist", "Project Manager"];
            
            if (typedInstance1) {
                try {
                    typedInstance1.destroy();
                } catch(e) {}
                typedInstance1 = null;
            }
            if (typedInstance2) {
                try {
                    typedInstance2.destroy();
                } catch(e) {}
                typedInstance2 = null;
            }
            
            // Wait a bit to ensure DOM is ready
            setTimeout(function() {
                const typingEl1 = document.querySelector(".typing");
                const typingEl2 = document.querySelector(".typing-2");
                
                if (typingEl1) {
                    typedInstance1 = new Typed(".typing", {
                        strings: typingStrings,
                        typeSpeed: 100,
                        backSpeed: 60,
                        loop: true
                    });
                }
                
                if (typingEl2) {
                    typedInstance2 = new Typed(".typing-2", {
                        strings: typingStrings,
                        typeSpeed: 100,
                        backSpeed: 60,
                        loop: true
                    });
                }
            }, 100);
        }
    } catch(error) {
        console.error('Translation error:', error);
    }
}

// Wait for both jQuery and Typed.js to be loaded
function initializeTranslations() {
    // Ensure translations object is available
    if (typeof translations === 'undefined') {
        console.error('Translations object not found');
        return;
    }
    
    // Initialize page with saved language
    if (typeof currentLang === 'undefined') {
        try {
            currentLang = localStorage.getItem('language') || 'en';
        } catch(e) {
            currentLang = 'en';
        }
    }
    
    // Small delay to ensure DOM is ready
    setTimeout(function() {
        translatePage(currentLang);
    }, 100);
}

// Initialize when DOM is ready (with or without jQuery)
if (typeof jQuery !== 'undefined') {
    $(document).ready(function(){
        // Initialize translations
        initializeTranslations();
        
        // Language selector click handlers
        $('.lang-btn').click(function(){
            const lang = $(this).data('lang');
            if (lang) {
                translatePage(lang);
            }
        });
        
        $(window).scroll(function(){
            // sticky navbar on scroll script
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
            
            // scroll-up button show/hide script
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });

        // slide-up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            // removing smooth scroll on slide-up button click
            $('html').css("scrollBehavior", "auto");
        });

        $('.navbar .menu li a').click(function(){
            // applying again smooth scroll on menu items click
            $('html').css("scrollBehavior", "smooth");
        });

        // toggle menu/navbar script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

        // owl carousel script
        var carousel = $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000, // Faster autoplay (2 seconds)
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });

        // Manual navigation
        $('.next-btn').click(function() {
            carousel.trigger('next.owl.carousel');
        });

        $('.prev-btn').click(function() {
            carousel.trigger('prev.owl.carousel');
        });

        // testimonials carousel script
        var testimonialsCarousel = $('.testimonials-carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000, // 3 seconds for testimonials
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });

        // Manual navigation for testimonials
        $('.testimonials-next-btn').click(function() {
            testimonialsCarousel.trigger('next.owl.carousel');
        });

        $('.testimonials-prev-btn').click(function() {
            testimonialsCarousel.trigger('prev.owl.carousel');
        });
    });
} else {
    // Fallback if jQuery is not loaded - use vanilla JS
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTranslations);
    } else {
        initializeTranslations();
    }
    
    // Language selector click handlers (vanilla JS)
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                if (lang) {
                    translatePage(lang);
                }
            });
        });
    });
}

// Additional fallback: ensure translations run even if jQuery/DOMContentLoaded fires early
window.addEventListener('load', function() {
    // Double-check translations are applied (in case they weren't applied earlier)
    if (typeof translations !== 'undefined' && typeof currentLang !== 'undefined') {
        // Only re-apply if needed (check if page is still in default language)
        const firstTranslatable = document.querySelector('[data-translate]');
        if (firstTranslatable) {
            const key = firstTranslatable.getAttribute('data-translate');
            const currentText = firstTranslatable.textContent.trim();
            const defaultText = translations['en'][key];
            // If text still matches default English and we want French (or vice versa)
            if (currentLang !== 'en' && currentText === defaultText) {
                translatePage(currentLang);
            }
        }
    }
});
