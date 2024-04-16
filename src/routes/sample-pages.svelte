<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import * as Accordion from "$lib/components/ui/accordion"
    import * as Sheet from "$lib/components/ui/sheet"
    import MenuIcon from "lucide-svelte/icons/menu";
    const dashboards = [
      {name: 'Dashboard 01', path: '/sample-pages/dashboard01'},
      {name: 'Dashboard 02', path: '/sample-pages/dashboard02'},
      {name: 'Dashboard 03', path: '/sample-pages/dashboard03'},
      {name: 'Dashboard 04', path: '/sample-pages/dashboard04'},
      {name: 'Dashboard 05', path: '/sample-pages/dashboard05'},
      {name: 'Dashboard 06', path: '/sample-pages/dashboard06'},
      {name: 'Dashboard 07', path: '/sample-pages/dashboard07'},
    ]
    const authentications = [ 
      {name: 'Authentication 01', path: '/sample-pages/authentication01'},
      {name: 'Authentication 02', path: '/sample-pages/authentication02'},
      {name: 'Authentication 03', path: '/sample-pages/authentication03'},
      {name: 'Authentication 04', path: '/sample-pages/authentication04'},
    ]
</script>

<!-- <Button>Button</Button> -->
<Sheet.Root>
  <Sheet.Trigger>
    <Button variant="ghost" size="icon">
        <MenuIcon class="h-6 w-6" />
      </Button>
  </Sheet.Trigger>
  <Sheet.Content side="left" on:onOutsideClick={(e)=>{console.log('outsideClick', e)}}>
    <Sheet.Header>
      <Sheet.Title>Menu</Sheet.Title>
      <Sheet.Description>
        Sample Screens
      </Sheet.Description>
    </Sheet.Header>
    <Accordion.Root>
      <Accordion.Item value="item-dashboards">
        <Accordion.Trigger>Dashboards</Accordion.Trigger>
        <Accordion.Content>
          {#each dashboards as dashboard}
            <Button class="w-full mb-1" href={dashboard.path}>{dashboard.name}</Button>
          {/each}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-authentications">
        <Accordion.Trigger>Authentications</Accordion.Trigger>
        <Accordion.Content>
          {#each authentications as authentication}
            <Button class="w-full mb-1" href={authentication.path}>{authentication.name}</Button>
          {/each}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>   

  </Sheet.Content>

</Sheet.Root>