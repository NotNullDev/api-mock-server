import { writable } from 'svelte/store';

export const endpoints = writable<string[]>([
	'/api/v1/{{var1}}/{{var2}}/{{var3}}/{{haha}}/path1',
	'/api/v1/{{var1}}/{{var2}}/{{var3}}/{{haha}}/path2',
	'/api/v1/{{var1}}/{{var2}}/{{var3}}/{{haha}}/path3'
]);

export const selectedIndexes = writable<number[]>([]);

export const appEnv = writable<Map<string, string>>(
	new Map<string, string>([
		['var1', 'user'],
		['var2', 'profile'],
		['var3', 'settings']
	])
);
