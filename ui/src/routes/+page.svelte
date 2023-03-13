<script lang="ts">
	import { clsx } from 'clsx';
	import AddEndpoint from './add-endpoint.svelte';
	import Endpoint from './endpoint.svelte';

	const endpoints: string[] = [
		'/api/v1/{{var1}}/{{var2}}/{{var3}}/{{haha}}/path1',
		'/api/v1/{{var1}}/{{var2}}/{{var3}}/{{haha}}/path2',
		'/api/v1/{{var1}}/{{var2}}/{{var3}}/{{haha}}/path3'
	];

	const env = new Map<string, string>([
		['var1', 'user'],
		['var2', 'profile'],
		['var3', 'settings']
	]);
</script>

<div class="flex justify-center flex-1 flex-col items-center">
	<div class="form-control">
		<div class="input-group">
			<input type="text" placeholder="Search…" class="input bg-base-200" />
			<button
				class={clsx(
					'btn-square bg-base-200 pl-3 border-none !border-l-2 hover:bg-base-300 active:scale-110'
				)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
		</div>
	</div>

	<ul class="mt-10 w-full items-center flex flex-col px-[10%] gap-2 rounded">
		<AddEndpoint />
		{#each endpoints as endpoint}
			<Endpoint {endpoint} />
		{/each}
	</ul>
</div>
