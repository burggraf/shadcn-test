<script lang="ts">
    import { AlertDialog, Label, Table } from "$lib";
    import LoaderCircle from "lucide-svelte/icons/loader-circle"; 

    let message = 'Loading...';
    let dialogOpen = false; // State to control the dialog visibility

    // Function to open the dialog
    export const open = (loadingMessage?: string) => {
        if (loadingMessage) {
            message = loadingMessage;
        }
        dialogOpen = true;
    }

    // Function to close the dialog
    export const close = () => {
        dialogOpen = false;
    }
</script>

<AlertDialog.Root open={dialogOpen} onOpenChange={close}>
    <AlertDialog.Trigger id="spinnerTrigger"></AlertDialog.Trigger>
    <AlertDialog.Content class="text-center place-items-center">
        <Table.Root id="dialogItem">
            <Table.Body class="w-min min-w-width">
                <LoaderCircle class="ml-auto mr-auto animate-spin h-10 w-10 text-primary items-center" />
                <Label id="loadingMessage" class="text-center text-lg">{message}</Label>
            </Table.Body>
        </Table.Root>
    </AlertDialog.Content>
</AlertDialog.Root>