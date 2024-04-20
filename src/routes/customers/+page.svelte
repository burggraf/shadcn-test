<script lang="ts">
    import { CircleUser, LineChart, Package, 
            Home, ShoppingCart, Bell, 
            Menu, Package2, Search, Users } from "lucide-svelte";
    import { Badge, Button, Card, DropdownMenu, Input, Sheet } from "$lib";
    import MenuContents from '$components/MenuContents.svelte'
    import MenuFooter from '$components/MenuFooter.svelte'
  </script>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <!--MENU pane desktop-->
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="">Acme Inc</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div class="flex-1">
            <MenuContents />
        </div>
        <div class="mt-auto p-4">
            <MenuFooter />
        </div>
      </div>
      <!--end MENU pane desktop-->
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet.Root>
          <Sheet.Trigger asChild let:builder>
            <Button
              variant="outline"
              size="icon"
              class="shrink-0 md:hidden"
              builders={[builder]}
            >
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </Sheet.Trigger>
          <Sheet.Content side="left" class="px-0 flex flex-col">


            <div class="flex h-full max-h-screen flex-col gap-2">
                <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <a href="/" class="flex items-center gap-2 font-semibold">
                    <Package2 class="h-6 w-6" />
                    <span class="">Acme Inc</span>
                  </a>
                  <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                    <Bell class="h-4 w-4" />
                    <span class="sr-only">Toggle notifications</span>
                  </Button>
                </div>
                <div class="flex-1">
                    <MenuContents />
                </div>
                <div class="mt-auto p-4">
                    <MenuFooter />
                </div>
              </div>
            
          </Sheet.Content>
        </Sheet.Root>
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
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl">Customers</h1>
        </div>
        <div
          class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        >
          <div class="flex flex-col items-center gap-1 text-center">
            <h3 class="text-2xl font-bold tracking-tight">You have no customers</h3>
            <p class="text-sm text-muted-foreground">
              Nothing to see here.
            </p>
            <Button class="mt-4">Add Customer</Button>
          </div>
        </div>
      </main>
    </div>
  </div>
  