import images from '~/common/assets';

export const HeaderData = [
    {
        name: 'Rest of Europe',
        icon: 'chevron down',
        path: '/restOfEurope'
    },
    {
        name: 'Store Locator',
        icon: 'map marker alternate',
        path: '/storeLocator'
    },
    {
        name: 'Help',
        icon: 'help circle',
        path: '/help'
    },
    {
        name: 'Login',
        icon: 'lock',
        path: '/login',
    },
    {
        name: 'Register',
        icon: 'add user',
        path: '/register'
    },
];

export const ListHeaderData = [
    { content: 'Men', width: 2 },
    { content: 'Women', width: 2 },
    { content: 'Kids', width: 2 },
    { content: 'New Arrivals', width: 3 },
    { content: 'Skate', width: 1, position: 'end' },
    { content: 'Latest', width: 4, position: 'center' },
    { content: '#Houseofvans', width: 2, position: 'center' },
];

export const IntroduceData = {
    title: 'Vans is old skool',
    content: `Introduced in 1977, the style #36, now know as <br /> old skool, was the first vans shoe to <br />feature the iconic sidestripe`,
};


export const FeaturedProductData = {
    name: 'Featured Products',
    gender: ['Men', 'Women', 'Unisex'],
};

export const productsData = [
    {
        id: 1,
        image: images.card1,
        title: 'Mono Old <br /> Skool Shoes',
        price: '55.99',
        amount: 0,
    },
    {
        id: 2,
        image: images.card2,
        title: 'Old <br /> Skool Shoes',
        price: '55.99',
        amount: 0,
    },
    {
        id: 3,
        image: images.card3,
        title: 'Create Old Skool <br /> Reissue Dx Shoes',
        price: '55.99',
        amount: 0,
    },
    {
        id: 4,
        image: images.card4,
        title: 'Varsity Suede <br /> Old Skool Shoes',
        price: '55.99',
        amount: 0,
    },
    {
        id: 5,
        image: images.card5,
        title: 'SK9-HI <br /> MTE Shoes',
        price: '55.99',
        amount: 0,
    },
];

export const bannerData = [
    {
        id: 1,
        title: "This <br /> Season's <br /> Must-haves",
        button: 'show now',
        image: images.clothes,
        content: 'Vans dipped palm <br /> island youth t-shirt',
        price: 19.99,
        width: 9,
        active: true,
    },
    {
        id: 2,
        title: 'New <br /> Arrivals <br /> Pro Skate',
        button: 'Discover More',
        image: images.banner,
        width: 6,
        active: false,
    },
];

export const customCardData = [
    {
        id: 1,
        image: images.picture1,
        title: " Vans unveils fall '16 <br/> all weather MTE footrwear <br />and apparel collection</p>",
        readMore: true,
        date: '21/08/2016',
        like: 2,
    },
    {
        id: 2,
        image: images.picture2,
        title: " Vans releases world's <br />most customizable boot <br /> with the pat moore infuse",
        readMore: true,
        date: '21/08/2016',
        like: 12,
    },
    {
        id: 3,
        image: images.picture3,
        title: 'Vans shop <br/>riot finals <br />2016',
        readMore: true,
        date: '21/08/2016',
        like: 7,
    },
];

export const customBannerData = [
    {
        id: 3,
        title: 'Uniform <br /> Friendly <br /> Shoes',
        button: 'Discover More',
        image: images.banner2,
        width: 6,
        active: false,
    },
];

export const infoData = {
    title: 'Corporate Info',
    content: ['Careers', 'B2B', 'Privacy policy', 'Term & Condition', 'Cookies'],
};

export const serviceData = {
    title: 'Customer Service',
    content: ['FAQ', 'Contact Us', 'Sizing Charts'],
};

export const socialData = {
    title: 'Follow vans:',
    children: [
        { name: 'facebook', icon: 'facebook f' },
        { name: 'twitter', icon: 'twitter' },
        { name: 'instagram', icon: 'instagram' },
        { name: 'youtube', icon: 'youtube' },
    ],
};

export const newsletterData = {
    title: 'Sign up vans newsletter:',
    description: 'Subscribe to our newsletter to get latest news about our products, events and sales',
};
