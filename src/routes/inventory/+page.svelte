<script lang="ts">
    import { CircleUser, LineChart, Package, Settings, LifeBuoy, LogOut,
            Home, ShoppingCart, Menu as MenuIcon, Package2, Search, Users } from "lucide-svelte";
    import { Badge, Button, Card, DropdownMenu, Input, Sheet } from "$lib";
    import Menu from "$components/Menu.svelte";
  </script>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <!-- <Menu /> -->
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button
              builders={[builder]}
              variant="secondary"
              size="icon"
              class="rounded-full"
            >
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item><Settings class="h-4 w-4 mr-3" />Settings</DropdownMenu.Item>
            <DropdownMenu.Item><LifeBuoy class="h-4 w-4 mr-3" />Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item><LogOut class="h-4 w-4 mr-3" />Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl">Inventory</h1>
        </div>
        <div
          class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        >
          <div class="flex flex-col items-center gap-1 text-center">
            <h3 class="text-2xl font-bold tracking-tight">You have no products</h3>
            <p class="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <Button class="mt-4">Add Product</Button>
          </div>
        </div>
      </main>
    </div>
