<script lang="ts">
	import { Button, Card, Input, Label } from '$lib'
    import { signInWithEmail, currentUser } from '$services/supabase.auth.service'
    import { toast } from 'svelte-sonner'

	export let email: string = ''
	export let password: string = ''
    export let controller: any = {}

    import LoadingModal from '$components/LoadingModal.svelte'
	let loadingModalComponent: any

	export const signIn = async () => {
		loadingModalComponent.open('Signing in...')
		const { user, session, error } = await signInWithEmail(email, password)
		loadingModalComponent.close()
		console.log('user', user)
		console.log('session', session)
		console.log('error', error)
		if (error) {
			//AuthApiError
			toast.error('Sign In Error', {
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

<Card.Root class="border-none" id="signinCard">
	<Card.Header>
		<Card.Title class="text-2xl">Login</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input bind:value={email} id="signinemail" type="email" placeholder="m@example.com" required autocomplete="email"/>
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
						<span
							class="ml-auto inline-block text-sm underline cursor-pointer"
							on:click={() => {
								controller.setMode('passwordreset')
							}}
						>
							Forgot your password?
						</span>
					</div>
					<Input bind:value={password} id="signinpassword" type="password" required autocomplete="current-password"/>
				</div>
                <!-- Hidden input for username to improve accessibility -->
                <input type="hidden" name="username" aria-hidden="true">
				<Button on:click={signIn} type="submit" class="w-full">Login</Button>
				<Button variant="outline" class="w-full">Login with Google</Button>
			</div>
			<div class="mt-4 text-center text-sm">
				Don&apos;t have an account?
				<span
					on:click={() => {
						controller.setMode('signup')
					}}
					class="underline cursor-pointer"
				>
					Sign up
				</span>
			</div>
		</form>
	</Card.Content>
</Card.Root>
