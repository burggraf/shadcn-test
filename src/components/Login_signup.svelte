<script lang="ts">
	import { Button, Card, Input, Label } from '$lib'
    import { signUpWithEmail, currentUser } from '$services/supabase.auth.service'
    import { toast } from 'svelte-sonner'

	export let email: string = ''
	export let password: string = ''
    export let firstname: string = ''
    export let lastname: string = ''
    export let controller: any = {}

    import LoadingModal from '$components/LoadingModal.svelte'
	let loadingModalComponent: any

	export const signUp = async () => {
		loadingModalComponent.open('Signing in...')
		const { user, session, error } = await signUpWithEmail(email, password)
		loadingModalComponent.close()
		console.log('user', user)
		console.log('session', session)
		console.log('error', error)
		if (error) {
			//AuthApiError
			toast.error('Sign Up Error', {
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


<Card.Root class="hidden border-none" id="signupCard">
    <Card.Header>
        <Card.Title class="text-2xl">Sign Up</Card.Title>
        <Card.Description>Enter your information to create an account</Card.Description>
    </Card.Header>
    <Card.Content>
        <form>
            <div class="grid gap-4">
                <div class="grid grid-cols-2 gap-4">
                    <div class="grid gap-2">
                        <Label for="first-name">First name</Label>
                        <Input bind:value={firstname} id="firstname" placeholder="Max" required />
                    </div>
                    <div class="grid gap-2">
                        <Label for="last-name">Last name</Label>
                        <Input bind:value={lastname} id="lastname" placeholder="Robinson" required />
                    </div>
                </div>
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input
                        bind:value={email}
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>
                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Input bind:value={password} id="password" type="password" />
                </div>
                <Button on:click={signUp} type="submit" class="w-full">Create an account</Button>
                <Button variant="outline" class="w-full">Sign up with Google</Button>
            </div>
            <div class="mt-4 text-center text-sm">
                Already have an account?
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
