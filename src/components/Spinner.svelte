<script lang="ts">
   import { Dialog, AlertDialog, Label, Table } from "$lib";
   import LoaderCircle from "lucide-svelte/icons/loader-circle"; 
   export let message = "Loading...";  
</script>

<!-- <Dialog.Root>
    <Dialog.Trigger id="spinnerTrigger"></Dialog.Trigger>
    <Dialog.Content class="dialog-content bg-transparen">
        <LoaderCircle class="animate-spin h-10 w-10 text-primary" />
    </Dialog.Content>
  </Dialog.Root> -->
  <AlertDialog.Root>
  <AlertDialog.Trigger id="spinnerTrigger"></AlertDialog.Trigger>
  <AlertDialog.Content class="text-center place-items-center">
    
    <Table.Root id="dialogItem">
        <Table.Body class="w-min min-w-width">
            <LoaderCircle class="ml-auto mr-auto animate-spin h-10 w-10 text-primary items-center" />
            <Label id="loadingMessage" class="text-center text-lg">{message}</Label>
        </Table.Body>
    </Table.Root>
    <!-- <AlertDialog.Header>
      <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer> -->
  </AlertDialog.Content>
</AlertDialog.Root>