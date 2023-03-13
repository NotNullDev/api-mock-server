<script lang="ts">
	import { clsx } from 'clsx';
	import { appEnv, selectedIndexes } from '../stores/store';
	import EyeOff from './eye-off.svelte';
	import EyeOn from './eye-on.svelte';

	export let endpoint = '';
	export let index: number;

	let show = false;

	$: {
		if (!show) {
			for (let [key, val] of $appEnv.entries()) {
				endpoint = endpoint.replaceAll(val, `{{${key}}}`);
			}
		} else {
			for (let [key, val] of $appEnv.entries()) {
				endpoint = endpoint.replaceAll(`{{${key}}}`, val);
			}
		}
	}

	let checkboxValue: boolean;
</script>

<div
	class={clsx(
		'flex gap-2 relative items-center'
		// 'p-4 shadow border-base-200 border rounded-xl flex gap-3 w-full items-center justify-center'
	)}
>
	<input
		type="checkbox"
		class="checkbox checkbox-lg checkbox-primary absolute -translate-x-[120%] border-slate-700"
		bind:checked={checkboxValue}
		on:click={() => {
			if (checkboxValue) {
				selectedIndexes.update((old) => {
					old = old.filter((v) => v != index);
					return old;
				});
			} else {
				selectedIndexes.update((old) => {
					old.push(index);
					return old;
				});
			}
		}}
	/>
	<div class="form-control">
		<div class="input-group">
			<div
				class="p-4 bg-base-200 focus:outline-none !w-[400px] focus:shadow-md  focus:shadow-indigo-800"
				contenteditable
				spellcheck={false}
				aria-multiline={false}
			>
				{endpoint}
			</div>
			<button
				class="p-4 bg-base-200 active:scale-110 hover:bg-base-300"
				on:click={() => (show = !show)}
			>
				{#if show}
					<EyeOff />
				{:else}
					<EyeOn />
				{/if}
			</button>
		</div>
	</div>
	<button class="active:scale-110 group ml-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="group-hover:text-indigo-200"
			width="28"
			height="28"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
				stroke-width="0"
				fill="currentColor"
			/>
			<path
				d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
				stroke-width="0"
				fill="currentColor"
			/>
		</svg>
	</button>
</div>
