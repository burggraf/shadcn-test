<script lang="ts">
    import { LineChart, LogIn, Package, 
            Home, ShoppingCart, Users } from "lucide-svelte";
    import { Badge } from "$lib";
    import Login from "./Login.svelte";
    const openLogin = () => {
      const loginTrigger = document.getElementById("loginTrigger");
      console.log('loginTrigger',loginTrigger)
      loginTrigger?.click();
    }
</script>
<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
  <a class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    on:click|preventDefault={openLogin}
    href="/">
    <LogIn class="h-4 w-4" />
    Login
  </a>
  <Login />

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
      <Badge
        class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
      >
        6
      </Badge>
    </a>
    <a
      href="/products"
      class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
    >
      <Package class="h-4 w-4" />
      Products
    </a>
    <a
      href="/customers"
      class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <Users class="h-4 w-4" />
      Customers
    </a>
  </nav>
