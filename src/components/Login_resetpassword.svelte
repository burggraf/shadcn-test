<script lang="ts">
	import { Button, Card, Input, Label } from '$lib'
    import { currentUser, updatePassword } from '$services/supabase.auth.service'
    import { toast } from 'svelte-sonner'

	export let password: string = ''
    export let controller: any = {}

    import LoadingModal from '$components/LoadingModal.svelte'
	let loadingModalComponent: any

	export const submitPasswordChange = async () => {
		loadingModalComponent.open('Requesting password reset...')
		const { error } = await updatePassword(password)
		loadingModalComponent.close()
		console.log('error', error)
		if (error) {
			//AuthApiError
			toast.error('Error updating password', {
				description: error.message,
				action: {
					label: 'Help',
					onClick: () => console.info('help was clicked'),
				},
				duration: 5000,
			})
		} else {
			// closeDialog()
			controller.close()
		}
	}
</script>
<LoadingModal bind:this={loadingModalComponent} />

<Card.Root class="hidden border-none" id="resetPasswordCard">
    <Card.Header>
        <Card.Title class="text-2xl">Set New Password</Card.Title>
        <Card.Description>Enter your new password below</Card.Description>
    </Card.Header>
    <Card.Content>
        <form>
            <div class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="email">New Password</Label>
                    <Input
                        bind:value={password}
                        id="newpassword"
                        type="password"
                        placeholder="************"
                        required
                    />
                </div>

                <Button on:click={submitPasswordChange} type="submit" class="w-full">Change Password</Button>
            </div>
            <div class="mt-4 text-center text-sm">
                Return to sign in
                <span
                    on:click={() => {
                        controller.setMode('signin')
                    }}
                    class="underline cursor-pointer"
                >
                    Sign in
                </span>
            </div>
        </form>
    </Card.Content>
</Card.Root>
