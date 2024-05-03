<script lang="ts">
	import { Dialog, Button, Card, Input, Label } from '$lib'
	import { toast } from 'svelte-sonner'
	import { signUpWithEmail, signInWithEmail, currentUser } from '$services/supabase.auth.service'
	import { closeDialog } from '$services/utils.service'
	import LoadingModal from '$components/LoadingModal.svelte'
	let loadingModalComponent: any
	const setMode = (mode: string) => {
		if (mode === 'signup') {
			document.getElementById('signupCard')?.classList.remove('hidden')
			document.getElementById('signinCard')?.classList.add('hidden')
			document.getElementById('requestPasswordResetCard')?.classList.add('hidden')
		} else if (mode === 'signin') {
			document.getElementById('signupCard')?.classList.add('hidden')
			document.getElementById('signinCard')?.classList.remove('hidden')
			document.getElementById('requestPasswordResetCard')?.classList.add('hidden')
		} else {
			// passwordreset
			document.getElementById('signupCard')?.classList.add('hidden')
			document.getElementById('signinCard')?.classList.add('hidden')
			document.getElementById('requestPasswordResetCard')?.classList.remove('hidden')
		}
	}
	let email = ''
	let password = ''
	let firstname = ''
	let lastname = ''
	export const signUp = async () => {
		const { user, session, error } = await signUpWithEmail(email, password)
		console.log('user', user)
		console.log('session', session)
		console.log('error', error)
	}
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
			})
		}
		closeDialog()
	}
</script>

<Dialog.Root>
	<Dialog.Trigger id="loginTrigger"></Dialog.Trigger>
	<Dialog.Content>
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
							<Input
								bind:value={email}
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div class="grid gap-2">
							<div class="flex items-center">
								<Label for="password">Password</Label>
								<span
									class="ml-auto inline-block text-sm underline cursor-pointer"
									on:click={() => {
										setMode('passwordreset')
									}}
								>
									Forgot your password?
								</span>
							</div>
							<Input bind:value={password} id="password" type="password" required />
						</div>
						<Button on:click={signIn} type="submit" class="w-full">Login</Button>
						<Button variant="outline" class="w-full">Login with Google</Button>
					</div>
					<div class="mt-4 text-center text-sm">
						Don&apos;t have an account?
						<span
							on:click={() => {
								setMode('signup')
							}}
							class="underline cursor-pointer"
						>
							Sign up
						</span>
					</div>
				</form>
			</Card.Content>
		</Card.Root>

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
								setMode('signin')
							}}
							class="underline cursor-pointer"
						>
							Sign in
						</span>
					</div>
				</form>
			</Card.Content>
		</Card.Root>

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
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<!-- <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a href="/authentication02" class="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="signin_password" type="password" required />
            </div> -->
						<Button type="submit" class="w-full">Request Password Reset</Button>
					</div>
					<div class="mt-4 text-center text-sm">
						Return to sign in
						<span
							on:click={() => {
								setMode('signin')
							}}
							class="underline cursor-pointer"
						>
							Sign in
						</span>
					</div>
				</form>
			</Card.Content>
		</Card.Root>
	</Dialog.Content>
</Dialog.Root>
