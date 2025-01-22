//import { comment } from "postcss";
//import { title } from "process";

//import { title } from "process";

//import { title } from "process";

const serviceDataSet = [
    {service: "Web Design",
    img: "/assets/service-image-1.svg"
    }, 
    {service: "Content creation",
        img: "/assets/service-image-2.svg",
    }, 
    {service:"Web development",
        img: "/assets/service-image-3.svg",
    }, 
    {service:"App Design",
        img: "/assets/service-image-4.svg",
    }, 
    {service:"Visual Design",
        img: "/assets/service-image-5.svg",
    }, 
    {service:"Webflow",
        img: "/assets/service-image-6.svg",
    }, 
    {service:"Digital Marketing",
        img: "/assets/service-image-7.svg",
    }, 
    {service:"Branding",
        img: "/assets/service-image-8.svg",
    }, 
    {service:"E-commerce websites",
        img: "/assets/service-image-9.svg",
    },
    {service:"Software Development",
        img: "/assets/service-image-10.svg",
    },
    {service:"IT Consulting",
        img: "/assets/service-image-11.svg",
    },
    {service:"CRM and ERP Integration",
        img: "/assets/service-image-12.svg",
    },
];


const projetData = [
    {
        id: 1,
        img: "/assets/inayit-project-1.jpg",
        year: 2024,
        title: " Levelling up Inayit’s Digital Presence",
        client: " Inayit",
        tags: ["Branding", "Website", "SEO"],
        clasName: "",
        link: "https://www.inayit.com/",
    },
    {
        id: 2,
        video: "/assets/epyrockxx-project-2.mp4",
        year: 2025,
        title: "Transforming spaces with premium epoxy flooring.",
        client: "Epyrocxx",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[70px]",
        link: "https://epyrocxx.com",
    },
    {
        id: 3,
        img: "/assets/st-project-3.jpg",
        year: 2023 ,
        title: "Rebranding the Future of UAE Financial Solutions",
        client: "SandTGlobal",
        tags: ["BRanding", "Website", "SEO"],
        clasName: "md:relative md:top-[10px] ",
        link: "https://www.sandtglobal.co/",
    },
    {
        id: 4,
        img: "/assets/collins-project-4.jpeg",
        year: 2022,
        title: "Elevated the brand with human-centered design that challenges the ordinary ",
        client: "Collins",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[80px] ",
        link: "https://colllins.webflow.io/",
    },
    {
        id: 5,
        img: "/assets/dentalbay-project-5.jpg",
        year: 2022,
        title: "A new vision for shaping the Modern Dentistry",
        client: "DentalBay",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[10px] ",
        link: "https://dentalbay.webflow.io/",
    },
    {
        id: 6,
        img: "/assets/tailorspace-project-6.png",
        year: 2024 ,
        title: "Transformed the brand with innovative 3D tailored solutions that redefine the norm.",
        client: "TailorSpace",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[90px]  ",
        link: "https://3dtailorspace.vercel.app/",
    },
]

const testimonialData = [
    {
        id: 1,
        comment: "Omaeva completely transformed how we present ourselves online. Their team didn’t just understand our vision—they amplified it. The new digital presence feels modern, professional, and truly reflects who we are as a company. We couldn’t be happier!",
        avatar: "/assets/placeholder.svg",
        name: "Thayanithi",
        position: "CEO, Inayit",
    },
    {
        id: 2,
        comment: "We wanted something simple yet effective, and Omaeva delivered beyond our expectations. The digital platform they designed is clean, user-friendly, and helps us connect with patients like never before. It’s been a fantastic experience working with them.",
        avatar: "/assets/placeholder.svg",
        name: "Dr. Magesh",
        position: "Managing Director, Dental Bay",
    },
    {
        id: 3,
        comment: "Omaeva understood our goals and delivered a complete redesign and rebranding that perfectly reflects who we are today. The new look is sleek, modern, and professional, giving us the confidence to thrive in the global finance market. It’s been a transformative journey with their team.",
        avatar: "/assets/placeholder.svg",
        name: "Tajith",
        position: "CFO, SandT Global Finances",
    },
    {
        id: 5,
        comment: "Thrilled to announce the launch of our new e-commerce platform! Huge thanks to the amazing team at Omaeva for their creativity and dedication in bringing our vision to life.",
        avatar: "/assets/placeholder.svg",
        name: "Bavi",
        position: "Founder , AiDecor Ltd ",
    },
    {
        id: 6,
        comment: "Omaeva did an incredible job with our website. The new design is clean, modern, and so much easier for our customers to navigate. We’ve already noticed more inquiries coming through, and we couldn’t be happier with how it turned out!",
        avatar: "/assets/placeholder.svg",
        name: "Mark Collins",
        position: "Owner, Collins Plumbing",
    },
]

const featuredBlog = {
    img: "https://omaeva.s3.eu-north-1.amazonaws.com/1+(1).png",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
    author: "Radhakrishnan",
    publishedOn: "Jan 2025",
    title: "The Rise of Next.js: A Revolutionary Framework in 2024",
    content: "Building scalable, performant, and modern web applications has always been a challenge for developers. As we enter 2024, Next.js has emerged as a game-changer in the web development landscape, offering innovative solutions to age-old challenges. Recognized for its seamless developer experience and unique capabilities, Next.js is at the forefront of web development trends. Backed by findings from the 2024 Stack Overflow Developer Survey, Next.js is now widely adopted by developers and organizations alike, solidifying its position as a revolutionary framework that is reshaping the future of web development.",
    tag: "Design",
    articlePage: {
        title: "The Rise of Next.js: A Revolutionary Framework in 2024",
        mainImg: "/assets/featured/featured-img-1.jpg",
        author: "Radhakrishnan",
        publishedOn: "Jan 2025",
        intro: "Building scalable, performant, and modern web applications has always been a challenge for developers. As we enter 2024, Next.js has emerged as a game-changer in the web development landscape, offering innovative solutions to age-old challenges. Recognized for its seamless developer experience and unique capabilities, Next.js is at the forefront of web development trends. Backed by findings from the 2024 Stack Overflow Developer Survey, Next.js is now widely adopted by developers and organizations alike, solidifying its position as a revolutionary framework that is reshaping the future of web development.",
        
        mainContent: [
            {
                id: 1,
                keypointHeading: "The Surge in Next.js Adoption",
                para: "The 2024 Stack Overflow Developer Survey revealed a dramatic rise in the adoption of Next.js, with the framework now ranked as one of the most loved and widely used tools among professional developers. This shift is driven by its ability to simplify complex web development processes while enabling developers to deliver lightning-fast and SEO-friendly applications. A growing number of organizations are moving away from traditional frameworks to embrace Next.js for its advanced features like server-side rendering (SSR), hybrid rendering, and incremental static regeneration (ISR). Companies of all sizes are leveraging its potential to reduce development timelines while improving end-user experiences. From startups to tech giants like Netflix, Spotify, and Nike, the demand for Next.js expertise continues to grow, making it one of the most in-demand frameworks of 2024.",
            },
            {
                id: 2,
                keypointHeading: "Industry Adoption and Trust",
                para: "Next.js has seen remarkable adoption across industries, with major companies leading the way. Organizations such as Netflix, Spotify, Nike, and TikTok rely on Next.js to power their platforms due to its ability to handle complex business requirements while delivering exceptional performance. For smaller companies and startups, Next.js offers a competitive advantage by reducing development time and costs. In addition to its flexibility, Next.js is also influencing how teams approach collaborative development. Its integration with tools like Vercel makes it easier than ever to deploy, monitor, and scale applications. This end-to-end approach ensures that businesses can focus on innovation rather than operational complexities.",
            },
            {
                id: 3,
                keypointHeading: "The Future of Next.js",
                para: "Looking ahead, Next.js is poised to revolutionize the web development landscape even further. The framework’s roadmap includes advanced features like streaming SSR, better support for AI-driven applications, and enhanced analytics for monitoring user behavior. As businesses increasingly prioritize user-centric experiences and developer efficiency, Next.js is set to remain a top choice for creating cutting-edge applications. With its unmatched flexibility, scalability, and performance, Next.js has redefined what developers can achieve. As we move through 2024 and beyond, it’s clear that this framework is not just a tool for today but an investment in the future of web development.",
            },
            {
                id: 3,
                keypointHeading: "Conslusion",
                para: "Next.js has become a cornerstone of modern web development, empowering developers to build applications that are fast, scalable, and future-proof. Whether it’s through hybrid rendering, enhanced SEO, or robust scalability, Next.js is transforming how teams create digital experiences. As the framework continues to evolve and gain traction, its impact on the web development industry will only grow stronger, making it an indispensable tool for the years to come.",
            },
        ],
    }
}

const topBlog = [
    {
        id: 1,
        cardImg: "/assets/topblog/topblog-img-1.png",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Sept 2024",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/topblog/topblog-img-1.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 2,
        cardImg: "/assets/topblog/topblog-img-2.png",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Sept 2024",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/topblog/topblog-img-2.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 3,
        cardImg: "/assets/topblog/topblog-img-3.png",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Sept 2024",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/topblog/topblog-img-3.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 4,
        cardImg: "/assets/topblog/topblog-img-4.png",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Sept 2024",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/topblog/topblog-img-4.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
]

const latestBlog = [
    {
        id: 1,
        cardImg: "/assets/latestblog/latestblog-img-1.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-1.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 2,
        cardImg: "/assets/latestblog/latestblog-img-2.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-2.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 3,
        cardImg: "/assets/latestblog/latestblog-img-3.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-3.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 4,
        cardImg: "/assets/latestblog/latestblog-img-4.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-4.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 5,
        cardImg: "/assets/latestblog/latestblog-img-5.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-5.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 6,
        cardImg: "/assets/latestblog/latestblog-img-6.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-6.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 7,
        cardImg: "/assets/latestblog/latestblog-img-7.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-7.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
    {
        id: 8,
        cardImg: "/assets/latestblog/latestblog-img-8.png",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFCjaxZQRoKNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715786850057?e=1743033600&v=beta&t=t5SjBL-IYPcg13VSrfHJk_MBvEe5_c7EenfFLru80yI",
        author: "Radhakrishnan",
        publishedOn: "Dec 2025",
        title: "Innovate with Seamless IT Solutions",
        content: "Empowering businesses with cutting-edge IT and design development solutions. From web and app development to transformative IT strategies, Omaeva creates digital.....",
        articlePage: {
            title: "Building The Financial Control Center For Companies",
            mainImg: "/assets/latestblog/latestblog-img-8.png",
            author: "Radhakrishnan",
            publishedOn: "Dec 2025",
            intro: "Building a great company is no easy feat. From developing a business idea to securing funding and managing day-to-day operations, there are endless difficulties entrepreneurs are faced with. But one all-too-common challenge for companies at every stage is effectively managing corporate finances. From understanding cash flow to selecting the right tools and vendors, it can be difficult to know how to maximize every dollar saved and spent. That’s because finance has gotten a lot more complicated. Today, even a seemingly simple concept like deciding where to store your cash now demands due diligence. ",
            
            mainContent: [
                {
                    id: 1,
                    keypointHeading: "Money is losing value, fast",
                    para: "Most companies keep their cash in a traditional business checking or savings account. But here’s the unfortunate reality: the cash you have in checking accounts is likely losing it's value. With the average checking account rate in the US sitting at near zero levels and sky-high inflation, idle cash is losing value faster than almost ever before. Large enterprises dedicate entire teams to this problem and invest strategically into stable assets like Treasury Bills and Money Market Funds to maximize liquidity and yield. But most startups and small businesses don’t have this luxury, and don’t have access either.",
                },
                {
                    id: 2,
                    keypointHeading: "Financial data is scattered",
                    para: "Financial data is scattered across systems like bank portals, accounting software, and planning tools. Many times business owners are forced to play analyst just to answer basic questions about what happened last month. In larger organizations, executives can wait weeks for finance teams to consolidate monthly financials and share reports and dashboards that quickly become stale. But the second order questions are far more important and also the toughest to answer. ",
                },
                {
                    id: 3,
                    keypointHeading: "Earn more and burn less with Vesto",
                    para: "But few businesses are operating at their full potential. Traditional financial services and software providers have burdened small businesses for too long with clunky interfaces, disparate data, and manual cash management that make it near impossible to get a clear picture of financial health. The early team at Vesto saw an incredible opportunity to bridge the divide between software and services and build something truly disruptive for modern businesses.",
                },
            ],
        },
    },
]

export {serviceDataSet, projetData, testimonialData, featuredBlog, topBlog, latestBlog};