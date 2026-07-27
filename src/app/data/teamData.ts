export interface TeamMember {
    slug: string;
    img: string;
    name: string;
    content: string;
    linkedin: string;
    description?: string;
}

export const teamContent: TeamMember[] = [
    {
        slug: 'Anuradha',
        img: '/assets/img/teamimg/anu.jpg',
        name: 'Anuradha',
        content: 'SEO',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Anuradha manages our SEO strategies, helping businesses increase organic traffic, improve keyword rankings, and achieve sustainable online growth with result-oriented optimization techniques.'
    },
    {
        slug: 'Dipen',
        img: '/assets/img/teamimg/dipen.jpg',
        name: 'Dipen',
        content: 'Digital Marketing',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Dipen specializes in planning and executing multi-channel digital campaigns, leveraging social media, paid advertising, email marketing, and analytics to deliver meaningful customer engagement and business growth.'
    },
    {
        slug: 'Vanshita',
        img: '/assets/img/teamimg/vanshita.png',
        name: 'Vanshita',
        content: 'Sr. BDE',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Vanshita drives business expansion by connecting with potential clients, understanding their unique requirements, and delivering customized solutions that create long-term value.'
    },
    {
        slug: 'Kirti',
        img: '/assets/img/teamimg/kirti.jpeg',
        name: 'Kirti',
        content: 'Jr. BDE',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Kirti is passionate about building strong client relationships, identifying growth opportunities, and helping businesses discover digital solutions that align with their goals.'
    },
    {
        slug: 'Mansi',
        img: '/assets/img/teamimg/mansi.png',
        name: 'Mansi',
        content: 'Jr. BDE',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Mansi specializes in connecting businesses with the right digital services, ensuring every client receives personalized guidance and a seamless experience from inquiry to onboarding.'
    },
    {
        slug: 'Yash',
        img: '/assets/img/teamimg/yash.jpg',
        name: 'Yash',
        content: 'Full-stack Developer',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Yash is a Full Stack Developer who builds scalable, high-performance web applications by seamlessly integrating modern front-end technologies with robust back-end solutions to deliver secure and user-friendly digital experiences.'
    },
    {
        slug: 'nikhil',
        img: '/assets/img/teamimg/nikhil.png',
        name: 'Nikhil',
        content: 'Frontend Developer',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Nikhil is a Frontend Developer passionate about creating stunning, responsive user interfaces with clean code and modern web technologies.'
    },
    {
        slug: 'jinal',
        img: '/assets/img/teamimg/jinal.png',
        name: 'Jinal',
        content: 'HR',
        linkedin: 'https://www.linkedin.com/in/the-crystal-engage-undefined-26b9993a9/',
        description: 'Jinal manages our human resources with dedication, fostering a positive work culture and ensuring smooth operations across all HR functions.'
    },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
    return teamContent.find(member => member.slug === slug);
}
