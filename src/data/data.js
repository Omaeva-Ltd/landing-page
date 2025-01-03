import { comment } from "postcss";

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
        img: "/assets/aidecor-project-2.jpg",
        year: 2023,
        title: "Crafting a personalised E-commerce  experience",
        client: "Aidecor",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[70px]",
        link: "https://www.ai-decor.co.uk/",
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
        title: "Coming Soon",
        client: "TailorSpace",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[90px]  ",
        link: "",
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

export {serviceDataSet, projetData, testimonialData};