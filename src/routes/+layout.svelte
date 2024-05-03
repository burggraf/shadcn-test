<script lang="ts">
    import "../app.pcss";
    import { CircleUser, LineChart, Package, 
            Home, ShoppingCart, Bell, Menu as MenuIcon, Package2, Search, Users } from "lucide-svelte";
    import { Badge, Button, Card, DropdownMenu, Input, Sheet } from "$lib";
    import { ModeWatcher } from "mode-watcher";
    import { Toaster } from "$lib/components/ui/sonner";
  </script>
  <ModeWatcher />
  <Toaster />
  <slot />
