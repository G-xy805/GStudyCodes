/**
 * 布局常量
 * 统一管理布局相关的常量，避免硬编码
 */

export const BREAKPOINTS = {
	MOBILE: 768,
	TABLET: 1024,
	DESKTOP: 1200,
} as const;

export const ANIMATION_DURATION = {
	FAST: 150,
	NORMAL: 300,
	SLOW: 500,
} as const;

export const SCROLL_OFFSET = 80;

export const BANNER_HEIGHT = {
	NORMAL: 'var(--banner-height)',
	EXTENDED: 'var(--banner-height-extend)',
	HOME: 'var(--banner-height-home)',
} as const;

export const TOC_MAX_LEVEL = 3;

export const TOC_MIN_DEPTH = 10;
