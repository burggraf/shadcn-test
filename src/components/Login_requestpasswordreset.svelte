<script lang="ts">
	import { Button, Card, Input, Label } from '$lib'
    import { resetPassword, currentUser } from '$services/supabase.auth.service'
    import { toast } from 'svelte-sonner'

	export let email: string = ''
    export let controller: any = {}

    import LoadingModal from '$components/LoadingModal.svelte'
	let loadingModalComponent: any

	export const requestPasswordReset = async () => {
		loadingModalComponent.open('Requesting password reset...')
		const { error } = await resetPassword(email)
		loadingModalComponent.close()
		console.log('error', error)
		if (error) {
			//AuthApiError
			toast.error('Request Password Reset Error', {
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

<Card.Root class="hidden border-none" id="requestPasswordResetCard">
    <Card.Header>
        <Card.Title class="text-2xl">Request Password Reset</Card.Title>
        <Card.Description>Enter your email below to request a password reset</Card.Description>
    </Card.Header>
    <Card.Content>
        <form>
            <div class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input
                        bind:value={email}
                        id="requestpasswordresetemail"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>

                <Button on:click={requestPasswordReset} type="submit" class="w-full">Request Password Reset</Button>
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
