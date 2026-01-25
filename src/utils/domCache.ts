/**
 * DOM 缓存工具
 * 用于缓存 DOM 元素，减少重复查询，提升性能
 */

export class DOMCache {
	private cache: Map<string, HTMLElement>;

	constructor() {
		this.cache = new Map();
	}

	/**
	 * 获取元素并缓存
	 */
	get(id: string): HTMLElement | null {
		if (!this.cache.has(id)) {
			const element = document.getElementById(id);
			if (element) {
				this.cache.set(id, element);
			}
		}
		return this.cache.get(id) || null;
	}

	/**
	 * 手动设置缓存
	 */
	set(id: string, element: HTMLElement): void {
		this.cache.set(id, element);
	}

	/**
	 * 检查元素是否已缓存
	 */
	has(id: string): boolean {
		return this.cache.has(id);
	}

	/**
	 * 清除指定元素的缓存
	 */
	delete(id: string): void {
		this.cache.delete(id);
	}

	/**
	 * 清除所有缓存
	 */
	clear(): void {
		this.cache.clear();
	}

	/**
	 * 获取缓存大小
	 */
	get size(): number {
		return this.cache.size;
	}
}

export const domCache = new DOMCache();
