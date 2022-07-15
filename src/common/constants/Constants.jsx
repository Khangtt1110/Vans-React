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
        price: '12.99',
        description: 'The Old Skool Stackform refreshes our iconic sidestripe silhouette with an even chunkier take on the platform aesthetic. Constructed with a 34 mm sidewall height, this platform shoe elevates a classic favorite while bringing a new “Off The Wall” style to your look. Along with traditional suede and canvas uppers, the Old Skool Stackform is finished with supportive padded collars and signature rubber waffle outsoles. Vans’ iconic sidestripe shoe Upgraded with a 34 mm platform height Sturdy suede and canvas uppers Lace-up closure Supportive padded collars Signature rubber waffle outsoles',
        amount: 0,
    },
    {
        id: 2,
        image: images.card2,
        title: 'Old <br /> Skool Shoes',
        price: '22.99',
        description: 'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Constructed with durable suede and canvas uppers in a range of fresh colorways, the Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. It also features re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.',
        amount: 0,
    },
    {
        id: 3,
        image: images.card3,
        title: 'Create Old Skool <br /> Reissue Dx Shoes',
        price: '33.99',
        description: 'First introduced in 1977, the Vans #98-now known as the Classic Slip-On—instantly became an icon in Southern California. Fast forward to today, and the Classic Slip-On is known worldwide for its comfortable silhouette, easy wearability, and beloved design. Made with sturdy low profile canvas uppers, the Classic Slip-On is an everyday essential with true “Off The Wall” style. This iconic slip-on shoe also includes supportive padded collars, elastic side accents, and signature rubber waffle outsoles.',
        amount: 0,
    },
    {
        id: 4,
        image: images.card4,
        title: 'Varsity Suede <br /> Old Skool Shoes',
        price: '44.99',
        description: 'The Classic Slip-On features sturdy low profile slip-on canvas uppers, padded collars, elastic side accents, and signature rubber waffle outsoles',
        amount: 0,
    },
    {
        id: 5,
        image: images.card5,
        title: 'SK9-HI <br /> MTE Shoes',
        price: '55.99',
        description: 'The Old Skool Stackform refreshes our iconic sidestripe silhouette with an even chunkier take on the platform aesthetic. Constructed with a 34 mm sidewall height, this platform shoe elevates a classic favorite while bringing a new “Off The Wall” style to your look. Along with traditional suede and canvas uppers, the Old Skool Stackform is finished with supportive padded collars and signature rubber waffle outsoles. Vans’ iconic sidestripe shoe Upgraded with a 34 mm platform height Sturdy suede and canvas uppers Lace-up closure Supportive padded collars Signature rubber waffle outsoles',
        amount: 0,
    },
];

export const bannerData = [
    {
        id: 1,
        title: "This <br /> Season's <br /> Must-haves",
        button: 'SHOW NOW',
        image: images.clothes,
        content: 'Vans dipped palm <br /> island youth t-shirt',
        price: 19.99,
        width: 9,
        active: true,
    },
    {
        id: 2,
        title: 'New <br /> Arrivals <br /> Pro Skate',
        button: 'DISCOVER MORE',
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
        button: 'DISCOVER MORE',
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
