export default function Portfolio() {
    const projects = [
        {
            title: "Neon Dashboard",
            category: "Web App",
            description: "A futuristic data visualization dashboard with real-time updates.",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            title: "Crypto Wallet",
            category: "Mobile Design",
            description: "Secure and sleek mobile wallet for managing digital assets.",
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            title: "Eco Tracker",
            category: "Sustainability",
            description: "Track your carbon footprint with beautiful charts and insights.",
            gradient: "from-emerald-400 to-cyan-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h1>
                <p className="text-gray-400 mb-12 text-lg">Check out some of my recent projects.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                            <div className="p-6">
                                <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">{project.category}</div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex items-center text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    View Case Study →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
