<script lang="ts">
	import { clsx } from 'clsx';
	import toast from 'svelte-french-toast';
	import { endpoints } from '../stores/store';

	let pathValue = '';
</script>

<div
	class={clsx(
		'flex gap-2 items-center'
		// 'p-4 shadow border-base-200 border rounded-xl flex gap-3 w-full items-center justify-center'
	)}
>
	<div class="form-control">
		<div class="input-group">
			<div
				class="p-4 bg-base-200 focus:outline-none !w-[400px] focus:shadow-md  focus:shadow-indigo-800"
				contenteditable
				spellcheck={false}
				aria-multiline={false}
				bind:textContent={pathValue}
			/>
			<button
				class="p-4 bg-base-200 active:scale-110 hover:bg-base-300"
				on:click={() => {
					pathValue = '';
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-square-x"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
					/>
					<path d="M10 10l4 4m0 -4l-4 4" />
				</svg>
			</button>
		</div>
	</div>
	<button
		class="active:scale-110 group ml-2"
		on:click={() => {
			toast(pathValue, {
				icon: '👏',
				style: 'border-radius: 200px; background: #333; color: #fff;'
			});
			endpoints.update((old) => {
				old.unshift(pathValue);
				return old;
			});
			pathValue = '';
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-plus"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="4"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 5l0 14" />
			<path d="M5 12l14 0" />
		</svg>
	</button>
</div>
