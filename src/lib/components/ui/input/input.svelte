<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import type { InputEvents } from "./index.js";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLInputAttributes;
	type $$Events = InputEvents;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };
</script>

<input
	class={cn(
		"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	bind:value
	on:blur|passive
	on:change|passive
	on:click|passive
	on:focus|passive
	on:focusin|passive
	on:focusout|passive
	on:keydown|passive
	on:keypress|passive
	on:keyup|passive
	on:mouseover|passive
	on:mouseenter|passive
	on:mouseleave|passive
	on:paste|passive
	on:input|passive
	{...$$restProps}
/>
