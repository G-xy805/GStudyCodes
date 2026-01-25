import { writable, derived } from 'svelte/store';
import { LIGHT_MODE, DARK_MODE, WALLPAPER_BANNER, WALLPAPER_OVERLAY, WALLPAPER_NONE } from '@/constants/constants';
import type { LIGHT_DARK_MODE, WALLPAPER_MODE } from '@/types/config';

/**
 * 主题状态
 * 管理亮色/暗色主题
 */
export const theme = writable<LIGHT_DARK_MODE>(LIGHT_MODE);

/**
 * 壁纸模式状态
 * 管理 banner/overlay/none 壁纸模式
 */
export const wallpaperMode = writable<WALLPAPER_MODE>(WALLPAPER_BANNER);

/**
 * 布局状态
 * 管理 list/grid 布局
 */
export const layoutMode = writable<'list' | 'grid'>('list');

/**
 * 从 localStorage 初始化状态
 */
if (typeof localStorage !== 'undefined') {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		theme.set(savedTheme as LIGHT_DARK_MODE);
	}

	const savedWallpaperMode = localStorage.getItem('wallpaperMode');
	if (savedWallpaperMode) {
		wallpaperMode.set(savedWallpaperMode as WALLPAPER_MODE);
	}

	const savedLayout = localStorage.getItem('postListLayout');
	if (savedLayout && (savedLayout === 'list' || savedLayout === 'grid')) {
		layoutMode.set(savedLayout as 'list' | 'grid');
	}
}

/**
 * 订阅主题变化并保存到 localStorage
 */
theme.subscribe(value => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('theme', value);
	}
});

/**
 * 订阅壁纸模式变化并保存到 localStorage
 */
wallpaperMode.subscribe(value => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('wallpaperMode', value);
	}
});

/**
 * 订阅布局变化并保存到 localStorage
 */
layoutMode.subscribe(value => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('postListLayout', value);
	}
});
