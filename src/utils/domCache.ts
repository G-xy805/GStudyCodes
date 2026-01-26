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
	 * 优先尝试 ID 查询，如果失败则尝试 querySelector
	 */
	get(selector: string): HTMLElement | null {
		if (!this.cache.has(selector)) {
			let element = document.getElementById(selector);

			// 如果 ID 查询失败，且字符串看起来像选择器（包含 . # [ : 等），尝试 querySelector
			if (!element && /[.#[:]/.test(selector)) {
				try {
					element = document.querySelector(selector) as HTMLElement;
				} catch (_e) {
					// 忽略无效的选择器错误
					console.warn(`[DOMCache] Invalid selector: ${selector}`);
				}
			}

			if (element) {
				this.cache.set(selector, element);
			}
		}
		return this.cache.get(selector) || null;
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
