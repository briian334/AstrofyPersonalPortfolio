import fs from "fs/promises";
import path from "path";

export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	links: {
		demo?: string;
		github?: string;
		live?: string;
	};
	startDate: string; // formato: 'YYYY-MM-DD'
	badge?: string;
}
export const projects: Project[] = [
	{
		id: 1,
		title: "E-commerce con Vue",
		description:
			"Aplicación completa de comercio electrónico con carrito de compras, autenticación de usuarios y pasarela de pagos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		technologies: ["Vue.js", "Tailwind CSS", "DaisyUI", "Vite"],
		image: "/vuejs.webp",
		links: {
			demo: "https://mi-ecommerce-demo.com",
			github: "https://github.com/usuario/ecommerce-app",
		},
		startDate: "2024-01-15",
		badge: "Destacado",
	},
	{
		id: 2,
		title: "Dashboard Analytics",
		description:
			"Dashboard interactivo para visualización de datos con gráficos dinámicos y filtros avanzados.",
		technologies: ["Vue.js", "Chart.js", "Tailwind CSS"],
		image: "/images/projects/dashboard.jpg",
		links: {
			demo: "https://analytics-dashboard-demo.com",
			github: "https://github.com/usuario/analytics-dashboard",
		},
		startDate: "2023-11-01",
	},
	{
		id: 3,
		title: "API REST con FastAPI",
		description:
			"API robusta para gestión de usuarios con documentación automática y autenticación JWT.",
		technologies: ["Python", "FastAPI", "PostgreSQL"],
		image: "/images/projects/api.jpg",
		links: {
			github: "https://github.com/usuario/fastapi-project",
		},
		startDate: "2023-09-01",
	},
	{
		id: 4,
		title: "App Mobile Tracker",
		description:
			"Aplicación móvil para tracking de hábitos con notificaciones push y análisis de progreso.",
		technologies: ["React Native", "Expo", "Firebase"],
		image: "/images/projects/mobile-app.jpg",
		links: {
			github: "https://github.com/usuario/habits-tracker",
		},
		startDate: "2024-02-01",
		badge: "En desarrollo",
	},
];

// Helper para obtener proyectos más recientes
export const getRecentProjects = (limit: number = 3): Project[] => {
	return projects
		.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
		.slice(0, limit);
};

// Helper para obtener proyecto por ID
export const getProjectById = (id: number): Project | undefined => {
	return projects.find((project) => project.id === id);
};

// Helper para obtener clase de badge
export const getBadgeClass = (badge?: string): string => {
	switch (badge) {
		case "Destacado":
			return "badge-success"; // verde
		case "En desarrollo":
			return "badge-warning"; // amarillo
		case "Importante":
			return "badge-error"; // rojo
		default:
			return "badge-secondary"; // gris
	}
};

export async function getProjectDescription(slug: string): Promise<string> {
	const filePath = path.join(import.meta.dirname, "../content", `${slug}.md`);
	try {
		const content = await fs.readFile(filePath, "utf-8");
		return content;
	} catch (error) {
		console.warn(`No se pudo cargar la descripción para ${slug}:`, error);
		return "";
	}
}
