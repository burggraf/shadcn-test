<script lang="ts">
	import PageMaster from '$components/PageMaster.svelte';
	import { Search } from 'lucide-svelte'
	import { Button, Input } from '$lib'
	import UserMenu from '$components/UserMenu.svelte'
    import MenuFull from '$components/MenuFull.svelte'
	import MenuSidebar from '$components/MenuSidebar.svelte'
</script>
<PageMaster>
	<!-- <div slot="header-left">
		<form on:submit={()=>{console.log('submit', document.getElementById('search_input')?.value)}}>
			<div class="relative">
				<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					id="search_input"
					type="search"
					placeholder="Search customers..."
					class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
				/>
			</div>
		</form>
	</div> -->
	<div slot="header-center">
		Customers
	</div>
	<!-- <div slot="header-right">
		rt
	</div> -->

	<div slot="main-content">
		<div class="flex">
			<h1 class="text-lg font-semibold md:text-2xl">Customers</h1>
		</div>
		<div>
			customer content
		</div>
	</div>


</PageMaster>