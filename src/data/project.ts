//images
import {
    EC,
    TaskManger,
    BlogPlatform,
    SpotifyDemo,
    StoreBackend,
    PhotographerWebsite
} from '../assets/images/index';

const projectData = [
    {
        type: 'clone',
        img: EC,
        imgText: 'Electronic Business Platform Demo',
        titleText: 'EC Demo',
        date: ['2024/03', '2024/07'],
        codeLink: 'https://github.com/Glem2003/Electronic-business-platform-Demo',
        webLink: 'https://glem2003.github.io/Electronic-business-platform-Demo/',
        features: [
            "User Registration / Login",
            "Product Categories & Search",
            "Shopping Cart Function",
            "Order Checkout & Management"
        ],
        lib: ['React', 'Sass', 'Redux', 'Antd', 'Javascript'],
        library: ["react-slick", 'slick-carousel', 'react-icons', 'react-router-dom']
    },
    {
        type: 'case',
        img: TaskManger,
        imgText: 'Task Management',
        titleText: 'Task Management',
        date: ['2024/07', '2024/08'],
        codeLink: 'https://github.com/Glem2003/Task-Management',
        webLink: 'https://glem2003.github.io/Task-Management/',
        features: [
            "Add Task",
            "Edit Task",
            "Modify Task",
            "Filter by Status"
        ],
        lib: ['React', 'Typescript'],
        library: ['uuid', 'react-icons']
    },
    {
        type: 'api',
        img: BlogPlatform,
        imgText: 'Blog Platform',
        titleText: 'Blog Platform',
        date: ['2024/12', '2025/01'],
        codeLink: 'https://github.com/Glem2003/blog-demo',
        webLink: 'https://glem2003.github.io/blog-demo/',
        features: [
            "Custom RESTful API",
            'Simple Backend Platform'
        ],
        lib: ['React', 'Typescript', 'Sass', 'Bootstrap'],
        library: ['axios', 'react-icons', 'dompurify', 'react-router-dom', 'react-bootstrap']
    },
    {
        type: 'clone',
        img: SpotifyDemo,
        imgText: 'Spotify Demo',
        titleText: 'Spotify Demo',
        date: ['2025/03'],
        codeLink: 'https://github.com/Glem2003/Spotify-Demo',
        webLink: 'https://glem2003.github.io/Spotify-Demo/',
        features: [
            "Internationalization Support",
        ],
        lib: ['React', 'Typescript', 'Sass'],
        library: ['clsx', 'react-icons', 'i18next', 'i18next-browser-languagedetector', 'i18next-http-backend']
    },
    {
        type: 'study',
        img: StoreBackend,
        imgText: 'Store Backend Demo',
        titleText: 'Store Backend Demo',
        date: ['2025/04', '2025/06'],
        codeLink: 'https://github.com/Glem2003/store-backend/',
        webLink: 'https://glem2003.github.io/store-backend/',
        features: [
            "Simulated User Login and Logout",
            "API Integration for Data",
            'Chart-based Data Visualization'
        ],
        lib: ['React', 'Javascript', 'Typescript', 'Sass', 'Mui'],
        library: ['json-serve', 'axios', 'react-hook-form', 'react-router-dom', 'i18next', 'i18next-browser-languagedetector', 'i18next-http-backend']
    },
    {
        type: 'simulation',
        img: PhotographerWebsite,
        imgText: 'Photographer Website',
        titleText: 'Photographer Website',
        date: ['2025/06', '2025/08'],
        codeLink: 'https://github.com/Glem2003/photographer-website',
        webLink: 'https://glem2003.github.io/photographer-website/',
        features: [
            "Implement section scroll effect using hooks useRef"
        ],
        lib: ['React', 'Typescript', 'Sass', 'Mui'],
        library: ['i18next', 'i18next-browser-languagedetector', 'i18next-http-backend']
    }
]

export default projectData