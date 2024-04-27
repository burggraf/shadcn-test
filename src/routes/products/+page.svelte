<script lang="ts">
	import PageMaster from '$components/PageMaster.svelte';
	import { Search } from 'lucide-svelte'
	import { Button, Input } from '$lib'
	import UserMenu from '$components/UserMenu.svelte'
    import MenuFull from '$components/MenuFull.svelte'
	import MenuSidebar from '$components/MenuSidebar.svelte'
</script>
<PageMaster>
	<div slot="header-center">
		Products
	</div>
	<!-- <div slot="header-right">
		rt
	</div> -->

	<div slot="main-content">
		<div class="flex">
			<h1 class="text-lg font-semibold md:text-2xl">Products</h1>
		</div>
		<div>
			products content
		</div>
	</div>


</PageMaster>