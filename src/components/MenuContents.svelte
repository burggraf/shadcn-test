<script lang="ts">
	import {
		LineChart,
		CircleUserRound,
		LogIn,
		LogOut,
		Package,
		Home,
		ShoppingCart,
		Users,
	} from 'lucide-svelte'
  // import { Separator } from "$lib/components/ui/separator/index.js";
	import { Badge, Separator } from '$lib'
	import { currentUser, signOut } from '$services/supabase.auth.service'
	const openLogin = () => {
		document.getElementById('loginTrigger')?.click()
	}
	const logout = () => {
		signOut()
	}
</script>

<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
	{#if $currentUser}
		<a
			class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			href="/profile"
		>
			<CircleUserRound class="h-4 w-4" />
			{$currentUser.email}
		</a>
		<a
			class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			on:click|preventDefault={logout}
			href="/"
		>
			<LogOut class="h-4 w-4" />
			Log Out
		</a>
    <Separator />
		<a
			href="/"
			class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
		>
			<Home class="h-4 w-4" />
			Dashboard
		</a>
		<a
			href="/orders"
			class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
		>
			<ShoppingCart class="h-4 w-4" />
			Orders
			<Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge
			>
		</a>
		<a
			href="/customers"
			class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
		>
			<Users class="h-4 w-4" />
			Customers
		</a>
	{:else}
		<a
			class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			on:click|preventDefault={openLogin}
			href="/"
		>
			<LogIn class="h-4 w-4" />
			Login
		</a>
    <Separator />
	{/if}
	<a
		href="/products"
		class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
	>
		<Package class="h-4 w-4" />
		Products
	</a>
</nav>
