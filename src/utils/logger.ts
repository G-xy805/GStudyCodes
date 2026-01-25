/**
 * 日志工具
 * 提供统一的日志接口，支持不同日志级别
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_LEVELS: Record<LogLevel, number> = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
};

const currentLevel = import.meta.env.DEV ? LOG_LEVELS.debug : LOG_LEVELS.info;

export const logger = {
	debug: (...args: any[]) => {
		if (currentLevel <= LOG_LEVELS.debug) {
			console.debug('[DEBUG]', ...args);
		}
	},
	info: (...args: any[]) => {
		if (currentLevel <= LOG_LEVELS.info) {
			console.info('[INFO]', ...args);
		}
	},
	warn: (...args: any[]) => {
		if (currentLevel <= LOG_LEVELS.warn) {
			console.warn('[WARN]', ...args);
		}
	},
	error: (...args: any[]) => {
		if (currentLevel <= LOG_LEVELS.error) {
			console.error('[ERROR]', ...args);
		}
	},
};
