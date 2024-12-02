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
    }];


const projetData = [
    {
        id: 1,
        img: "/assets/project-1.png",
        year: 2024,
        title: "Reforming branding strategy",
        client: "InayIt",
        tags: ["Branding", "Website", "SEO"],
        clasName: "",
    },
    {
        id: 2,
        img: "/assets/project-2.png",
        year: 2024,
        title: "Omaeva's new digital presence",
        client: "Omaeva",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[100px] xl:top-[150px]",
    },
    {
        id: 3,
        img: "/assets/project-3.png",
        year: 2024,
        title: "Reforming branding strategy",
        client: "InayIt",
        tags: ["BRanding", "Website", "SEO"],
        clasName: "md:relative md:top-[40px] xl:top-[80px] ",
    },
    {
        id: 4,
        img: "/assets/project-4.png",
        year: 2024,
        title: "Omaeva's new digital presence",
        client: "Omaeva",
        tags: ["Design", "Website", "Animation"],
        clasName: "md:relative md:top-[150px] xl:top-[230px] ",
    },
]

const testimonialData = [
    {
        id: 1,
        comment: "Optimized designs and code for seamless performance and superior user engagement",
        avatar: "/assets/testimonial-image.svg",
        name: "Karla Lynn",
        position: "Head of Design at Inayit",
    },
    {
        id: 2,
        comment: "Optimized designs and code for seamless performance and superior user engagement",
        avatar: "/assets/testimonial-image.svg",
        name: "Karla Lynn",
        position: "Head of Design at Inayit",
    },
    {
        id: 3,
        comment: "Optimized designs and code for seamless performance and superior user engagement",
        avatar: "/assets/testimonial-image.svg",
        name: "Karla Lynn",
        position: "Head of Design at Inayit",
    }
]

export {serviceDataSet, projetData, testimonialData};