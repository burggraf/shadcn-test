<script lang="ts">
	import { Dialog } from '$lib'
	import LoadingModal from '$components/LoadingModal.svelte'
  import Login_signin from '$components/Login_signin.svelte'
  import Login_signup from '$components/Login_signup.svelte'
  import Login_requestpasswordreset from '$components/Login_requestpasswordreset.svelte'
	let loadingModalComponent: any
	const controller = {
		close: () => {
			const closeButton: any = document.querySelector('button[data-dialog-close]')
			if (closeButton) {
				closeButton.click()
			} else {
				console.error('closeDialog: Close button not found!')
			}
		},
		setMode: (mode: string) => {
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
		},
	}
	let email = ''
	let password = ''
	let firstname = ''
	let lastname = ''
</script>

<Dialog.Root>
	<Dialog.Trigger id="loginTrigger"></Dialog.Trigger>
	<Dialog.Content>
		<LoadingModal bind:this={loadingModalComponent} />

    <Login_signin {controller} {email} {password} />

    <Login_signup {controller} {email} {password} {firstname} {lastname} />

    <Login_requestpasswordreset {controller} {email} />

	</Dialog.Content>
</Dialog.Root>
