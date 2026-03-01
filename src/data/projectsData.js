import dental_bridge from '../../public/assets/project_photos/GPO_1.jpg';
import dental_bridge_2 from '../../public/assets/project_photos/GPO_2.jpg';
import asap_fabric from '../../public/assets/project_photos/ASAP_1.png';
import asap_fabric_2 from '../../public/assets/project_photos/ASAP_2.png';
import rankers_erp from '../../public/assets/project_photos/Rankers_1.jpg';
import rankers_erp_2 from '../../public/assets/project_photos/Rankers_2.jpg';

const projectsData = [
    {
        id: 1,
        category: "Project 1",
        title: "DentalBridge GPO",
        description: `Implemented subscription functionality, including paid and free plans for doctors and vendors.

➤ Worked on group chat features, enabling real-time communication within the medical community.

➤ Developed a community feed, allowing users to create posts, like, and share content to drive engagement.

➤ Collaborated with backend APIs to manage subscriptions, content, and community interactions efficiently.`,
        images: [dental_bridge, dental_bridge_2],
        badge: "LIVE",
        badgeColor: "brand-green"
    },
    {
        id: 2,
        category: "Project 2",
        title: "ASAP Fabric",
        description: `This project is a premium Fabric Customization Platform focused on traditional and modern menswear like Kurta, Koti, Jodhpuri, Indo-Western, Pants, Suits, and Shirts..

 ➤ It allows users to fully personalize their outfits with advanced customization options.
Customers can select fabric, colors, and styles according to their preference.

➤ The platform includes detailed customization features such as lapel style, back design view, pocket style, sleeve buttons, and lining color selection.

➤ The system enhances user experience with interactive design selection and real-time updates.

➤ Button customization is also available, including style, placement, and contrast options.`,
        images: [asap_fabric_2, asap_fabric],
        layout: "reverse",
        badge: "NEW",
        badgeColor: "brand-yellow"
    },
    {
        id: 3,
        category: "Project 3",
        title: "Rankers ERP",
        description: `Rankers ERP is a comprehensive Salt Management System designed to streamline and manage the complete salt business lifecycle.

                        ➤ The platform tracks salt supply from one location to another, including truck dispatch and delivery monitoring

                        ➤ It manages detailed records of raw salt, washed salt, and different salt grades. The system records truck capacity, how much salt is loaded per truck, and delivery status in real time.

                        ➤ The ERP maintains supplier details, location tracking, truck information, and selected delivery points. Inventory modules monitor total stock, available quantity, and in-process salt.

                        ➤ The platform also tracks salt filtering processes and maintenance records. Overall, the system provides centralized control, transparency, and efficient management of the entire salt supply chain business.


                        `,
        images: [rankers_erp, rankers_erp_2],
        badge: "LIVE",
        badgeColor: "brand-green"
    }
];

export default projectsData;
