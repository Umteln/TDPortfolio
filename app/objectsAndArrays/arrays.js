// mural imgs
import park from '../assets/park1.png';
import flower from '../assets/flowerMural.jpg';

// logo imgs
import spice from '../assets/spiceLogo.jpg';
import pizza from '../assets/pizzaLogo2.png';
import health from '../assets/HealthLogo.png';
//art
import album from '../assets/albumCover.gif';
import comic from '../assets/comic.jpg';
import fashion from '../assets/fashionEvent.jpg';
import heart from '../assets/heartPainting.png';
import musician from '../assets/painting1.jpeg';

//slides
import park1 from '../assets/park1.png';
import bcLogo from '../assets/BCLogo.png';
import medusa from '../assets/medusa.jpg';

export const slides = [
    {
        name: 'Mural',
        img: park1,
    },
    {
        name: 'Logo',
        img: spice,
    },
    {
        name: 'Art',
        img: medusa,
    },
    {
        name: 'Graphic',
        img: bcLogo,
    },
];

export const services = [
    {
        name: 'Mural Design & Installation',
        desc: 'Beautifully-crafted and powerful designs and installations ',
        img: 'https://images.unsplash.com/photo-1590477331415-ec493bfa6414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        page: 'murals',
    },
    {
        name: 'Project Mangement',
        desc: 'Planning, organizing, and efficiently moving towards project completion.',
        img: 'https://images.unsplash.com/photo-1676113421666-172e5520b7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        page: 'management',
    },
    {
        name: 'Artwort, Animations & Illustrations',
        desc: 'Character design, book illustrations, gaming assets, and more',
        img: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        page: 'art',
    },
    {
        name: 'Graphic Design',
        desc: 'Vibrant visual elements and user interface design for applications ',
        img: 'https://images.unsplash.com/photo-1676113421666-172e5520b7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        page: 'graphics',
    },
];

export const projects = [
    // murals
    {
        name: 'Austin Park ',
        img: park,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'mural',
        tools: [''],
    },
    {
        name: 'Garden Mural',
        img: flower,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'mural',
        tools: [],
    },
    // logos & graphic
    {
        name: 'Spice Logo',
        img: spice,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'graphic',
        tools: ['Adobe PhotoShop', 'Adobe Illustrator'],
    },
    {
        name: 'Health Logo',
        img: health,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'graphic',
        tools: ['Adobe PhotoShop', 'Adobe Illustrator'],
    },
    {
        name: 'Pizza Logo',
        img: pizza,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'graphic',
        tools: ['Adobe PhotoShop', 'Adobe Illustrator'],
    },
    //art, illustrations, animations
    {
        name: 'Album Cover',
        img: album,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'art',
        tools: '',
    },
    {
        name: 'Comic Sequence',
        img: comic,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'art',
        tools: '',
    },
    {
        name: 'Fashion Art Event',
        img: fashion,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'art',
        tools: '',
    },
    {
        name: 'Painting',
        img: heart,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'art',
        tools: '',
    },
    {
        name: 'Album Cover',
        img: musician,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'art',
        tools: '',
    },
];
