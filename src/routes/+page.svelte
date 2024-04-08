<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import * as Accordion from "$lib/components/ui/accordion"
    import * as Sheet from "$lib/components/ui/sheet"
    import MenuIcon from "lucide-svelte/icons/menu";
    import * as Card from "$lib/components/ui/card";
 	  import { goto } from "$app/navigation"
    const dashboards = [
      {name: 'Dashboard 01', path: '/dashboard01'},
      {name: 'Dashboard 02', path: '/dashboard02'},
      {name: 'Dashboard 03', path: '/dashboard03'},
      {name: 'Dashboard 04', path: '/dashboard04'},
      {name: 'Dashboard 05', path: '/dashboard05'},
      {name: 'Dashboard 06', path: '/dashboard06'},
      {name: 'Dashboard 07', path: '/dashboard07'},
    ]
    const authentications = [ 
      {name: 'Authentication 01', path: '/authentication01'},
      {name: 'Authentication 02', path: '/authentication02'},
      {name: 'Authentication 03', path: '/authentication03'},
      {name: 'Authentication 04', path: '/authentication04'},
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


  <!-- <div class="grid h-16 place-items-center">
    <div class="p-4">
      <Card.Root class="w-[380px]">
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
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
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card.Root>    
    </div>
  </div> -->


</Sheet.Root>