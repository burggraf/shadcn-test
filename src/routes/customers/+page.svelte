<script lang="ts">
	import { Search } from 'lucide-svelte'
	import { Button, Input } from '$lib'
	import UserMenu from '$components/UserMenu.svelte'
    import MenuFull from '$components/MenuFull.svelte'
	import MenuSidebar from '$components/MenuSidebar.svelte'
</script>

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	<div class="hidden border-r bg-muted/40 md:block">
        <MenuFull />
	</div>
	<!--MAIN page-->
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <MenuSidebar />
            <div class="w-full flex-1">
				<form on:submit={()=>{console.log('submit')}}>
					<div class="relative">
						<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search customers..."
							class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
						/>
					</div>
				</form>
			</div>
			<UserMenu />
		</header>
        <!--MAIN CONTENTS-->
		<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div class="flex items-center">
				<h1 class="text-lg font-semibold md:text-2xl">Customers</h1>
			</div>
			<div
				class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
			>
				<div class="flex flex-col items-center gap-1 text-center">
					<h3 class="text-2xl font-bold tracking-tight">You have no customers</h3>
					<p class="text-sm text-muted-foreground">Nothing to see here.</p>
					<Button class="mt-4">Add Customer</Button>
				</div>
			</div>
		</main>
        <!--end MAIN CONTENTS-->
	</div>
    <!--end MAIN page-->
</div>
