<script lang="ts">
    import "../app.pcss";
    import { CircleUser, LineChart, Package, 
            Home, ShoppingCart, Bell, Menu as MenuIcon, Package2, Search, Users } from "lucide-svelte";
    import { Badge, Button, Card, DropdownMenu, Input, Sheet } from "$lib";
    import Menu from "./Menu.svelte";
  </script>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <Menu />
    </div>
    <!--main content starts here-->
    <slot />
    <!--main content ends here-->
  </div>
  