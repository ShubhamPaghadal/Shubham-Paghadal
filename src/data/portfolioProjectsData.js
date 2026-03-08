import portfolio_1 from '../../public/assets/portfolio_projects/portfolio_1.jpg';
import portfolio_2 from '../../public/assets/portfolio_projects/portfolio_2.jpg';
import portfolio_3 from '../../public/assets/portfolio_projects/portfolio_3.jpg';
import portfolio_4 from '../../public/assets/portfolio_projects/portfolio_4.jpg';
import portfolio_5 from '../../public/assets/portfolio_projects/portfolio_5.jpg';
import portfolio_6 from '../../public/assets/portfolio_projects/portfolio_6.jpg';

const portfolioProjectsData = [
    {
        id: 4,
        slug: "ShopEase-Ecommerce",
        category: "Project 4",
        title: "ShopEase E-Commerce",
        description: `ShopEase is a modern full-stack e-commerce platform designed for seamless online shopping experiences.

➤ Built with a responsive product catalog featuring advanced filtering, search, and sorting capabilities.

➤ Integrated secure payment gateway with Stripe for smooth checkout and order management.

➤ Includes a real-time inventory management dashboard for store admins with analytics and sales tracking.

➤ Implemented user authentication, wishlist, cart management, and order tracking with email notifications.`,
        images: [portfolio_1, portfolio_2],
        layout: "reverse",
        badge: "LIVE",
        badgeColor: "brand-green",
        liveLink: "#",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"]
    },
    {
        id: 5,
        slug: "TaskFlow-Manager",
        category: "Project 5",
        title: "TaskFlow Manager",
        description: `TaskFlow is a collaborative project management tool designed for teams to streamline their workflows.

➤ Features drag-and-drop Kanban boards with real-time updates using WebSockets for team collaboration.

➤ Includes task assignment, priority levels, due date tracking, and automated email reminders.

➤ Built-in time tracking module with detailed reports and productivity analytics per team member.

➤ Supports role-based access control, file attachments, and integration with Slack and Google Calendar.`,
        images: [portfolio_3, portfolio_4],
        badge: "NEW",
        badgeColor: "brand-yellow",
        liveLink: "#",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "PostgreSQL"]
    },
    {
        id: 6,
        slug: "MediConnect-Portal",
        category: "Project 6",
        title: "MediConnect Portal",
        description: `MediConnect is an integrated healthcare platform connecting patients and doctors through a streamlined digital portal.

➤ Developed appointment scheduling with real-time availability checking, video consultation support, and prescription management.

➤ Built patient health record dashboard with secure document uploads, medical history tracking, and lab result viewing.

➤ Implemented doctor's panel for managing appointments, patient records, consultation notes, and billing.

➤ Integrated notification system for appointment reminders, prescription refills, and health tips via SMS and email.`,
        images: [portfolio_5, portfolio_6],
        layout: "reverse",
        badge: "LIVE",
        badgeColor: "brand-green",
        liveLink: "#",
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Firebase", "REST API"]
    }
];

export default portfolioProjectsData;
