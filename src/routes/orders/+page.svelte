<script lang="ts">
    import { CircleUser, LineChart, Package, Settings, LifeBuoy, LogOut,
            Home, ShoppingCart, Menu as MenuIcon, Package2, Search, Users } from "lucide-svelte";
    import { Badge, Button, Card, DropdownMenu, Input, Sheet } from "$lib";
  </script>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <div class="flex justify-between w-full">
          <!-- Left-justified section -->
          <div class="flex items-center">
            <MenuIcon class="h-5 w-5" />
            <!-- Add more content here if needed -->
          </div>
      
          <!-- Centered section -->
          <div class="flex items-center justify-center">
            Orders
          </div>
      
          <!-- Right-justified section -->
          <div class="flex items-center justify-end">
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
          </div>
        </div>
      </header>      
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl">Orders</h1>
        </div>
        <div
          class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        >
          <div class="flex flex-col items-center gap-1 text-center">
            <h3 class="text-2xl font-bold tracking-tight">You have no orders</h3>
            <p class="text-sm text-muted-foreground">
              Nothing to do here.
            </p>
            <Button class="mt-4">Add Product</Button>
          </div>
        </div>
      </main>
    </div>
