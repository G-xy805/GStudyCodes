// 字体配置
import type { FontConfig } from "@/types/config";

export const fontConfig: FontConfig = {
	enable: true, // 启用自定义字体功能
	preload: true, // 启用字体预加载
	selected: ["inter"], // 使用Inter字体作为主要字体
	fonts: {
		// 系统字体
		system: {
			id: "system",
			name: "系统字体",
			src: "", // 系统字体无需 src
			family:
				"system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
		},
		// Inter字体 - 现代无衬线字体，适合技术博客
		inter: {
			id: "inter",
			name: "Inter",
			src: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
			family:
				"'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
			display: "swap", // 优化字体加载，使用交换模式
		},
	},
	fallback: [
		"system-ui",
		"-apple-system",
		"BlinkMacSystemFont",
		"Segoe UI",
		"Roboto",
		"sans-serif",
	], // 全局字体回退
};
