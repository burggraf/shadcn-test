<script lang="ts">
    import { Package2, Bell, Menu } from "lucide-svelte";
    import { Button, Sheet } from "$lib";
    import MenuContents from "$components/MenuContents.svelte";
    import MenuFooter from "$components/MenuFooter.svelte";
    const app_version = __APP_VERSION__;
</script>
<Sheet.Root>
    <Sheet.Trigger asChild let:builder>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
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
                <div class="text-center">v.{app_version}</div>
            </div>
        </div>
    </Sheet.Content>
</Sheet.Root>
