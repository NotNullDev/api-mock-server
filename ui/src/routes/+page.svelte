<script lang="ts">
	import { clsx } from 'clsx';
	import { Toaster } from 'svelte-french-toast';
	import { fly } from 'svelte/transition';
	import { endpoints, selectedIndexes } from '../stores/store';
	import AddEndpoint from './add-endpoint.svelte';
	import Endpoint from './endpoint.svelte';
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
		{#each $endpoints as endpoint, idx}
			<Endpoint {endpoint} index={idx} />
		{/each}
	</ul>
</div>

<Toaster />

{#if $selectedIndexes.length > 0}
	<button
		in:fly={{ y: 50 }}
		out:fly={{ y: 50 }}
		class="absolute top-1/3 left-1/2 -translate-x-1/2 z-50 p-4 bg-error rounded-xl text-error-content"
		>Delete {$selectedIndexes.length} item(s)</button
	>
{/if}
