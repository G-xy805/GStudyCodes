/**
 * 切换动画 Hook
 * 用于主题切换、布局切换等需要防抖的场景
 */

import { onDestroy } from 'svelte';

export function useSwitchAnimation(
	callback: () => void,
	duration: number = 500
) {
	let isSwitching = false;

	function switch() {
		if (isSwitching) return;
		isSwitching = true;
		callback();

		setTimeout(() => {
			isSwitching = false;
		}, duration);
	}

	onDestroy(() => {
		isSwitching = false;
	});

	return {
		switch,
		get isSwitching() {
			return isSwitching;
		}
	};
}
