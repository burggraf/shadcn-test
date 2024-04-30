 <script lang="ts">
	// import { Search } from 'lucide-svelte'
	// import { Button, Input } from '$lib'
	import UserMenu from '$components/UserMenu.svelte'
    import MenuFull from '$components/MenuFull.svelte'
	import MenuSidebar from '$components/MenuSidebar.svelte'
    import Login from "./Login.svelte";

</script>
<main>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div class="hidden border-r bg-muted/40 md:block">
            <MenuFull />
        </div>
        <!--MAIN page-->
        <div class="flex flex-col">
            <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <MenuSidebar />
                <!-- HEADER LEFT -->
                <div class="shrink-0">
                    <slot name="header-left"></slot>
                </div>
                <!-- HEADER CENTER -->
                <div class="flex-1 text-center">
                    <slot name="header-center"></slot>
                </div>
                <!-- HEADER RIGHT -->
                <div class="shrink-0 text-right">
                    <slot name="header-right">
                        <UserMenu />
                    </slot>
                </div>
            </header>
            <!--MAIN CONTENTS-->
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <slot name="main-content" />
            </main>
            <!--end MAIN CONTENTS-->
        </div>
        <!--end MAIN page-->
        <Login />
    </div>
</main>