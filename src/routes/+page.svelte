<script lang="ts">
	import PageMaster from '$components/PageMaster.svelte';
	import { Search } from 'lucide-svelte'
	import { Button, Input } from '$lib'
	import UserMenu from '$components/UserMenu.svelte'
    import MenuFull from '$components/MenuFull.svelte'
	import MenuSidebar from '$components/MenuSidebar.svelte'
	import { closeDialog } from '$services/utils.service';
	// import { closeDialog } from '$services/utils.service';
</script>
<PageMaster>
	<div slot="header-center">
		Dashboard
	</div>
	<!-- <div slot="header-right">
		rt
	</div> -->

	<div slot="main-content">
		<div class="flex">
			<h1 class="text-lg font-semibold md:text-2xl">Dashboard</h1>
		</div>
		<div>
			dashboard content
		</div>
	</div>


</PageMaster>