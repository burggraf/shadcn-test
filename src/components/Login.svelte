<script lang="ts">
	import { Dialog } from '$lib'
	import LoadingModal from '$components/LoadingModal.svelte'
  import Login_signin from '$components/Login_signin.svelte'
  import Login_signup from '$components/Login_signup.svelte'
  import Login_requestpasswordreset from '$components/Login_requestpasswordreset.svelte'
  import Login_resetpassword from '$components/Login_resetpassword.svelte'
	import { onMount } from 'svelte'
  import { currentUser } from '$services/supabase.auth.service'
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
        document.getElementById('resetPasswordCard')?.classList.add('hidden')
			} else if (mode === 'signin') {
				document.getElementById('signupCard')?.classList.add('hidden')
				document.getElementById('signinCard')?.classList.remove('hidden')
				document.getElementById('requestPasswordResetCard')?.classList.add('hidden')
        document.getElementById('resetPasswordCard')?.classList.add('hidden')
			} else if (mode === 'resetpassword') {
				document.getElementById('signupCard')?.classList.add('hidden')
				document.getElementById('signinCard')?.classList.add('hidden')
				document.getElementById('requestPasswordResetCard')?.classList.add('hidden')
        document.getElementById('resetPasswordCard')?.classList.remove('hidden')
      } else {
				// requestPasswordReset
				document.getElementById('signupCard')?.classList.add('hidden')
				document.getElementById('signinCard')?.classList.add('hidden')
				document.getElementById('requestPasswordResetCard')?.classList.remove('hidden')
        document.getElementById('resetPasswordCard')?.classList.add('hidden')
			}
		},
	}
  const checkHash = () => {
		const hash = window.location.hash
    if (hash && hash.substring(0, 1) === '#') {
			const tokens = hash.substring(1).split('&')
			const entryPayload: any = {}
			tokens.map((token) => {
				const pair = (token + '=').split('=')
				entryPayload[pair[0]] = pair[1]
			})
			if (entryPayload?.type === 'recovery') {
				token = entryPayload.access_token
        document.getElementById("loginTrigger")?.click();
        controller.setMode('resetpassword')        
				setTimeout(() => {
          controller.setMode('resetpassword')        
				}, 500)
			}
		}
 }
 onMount(() => {
    checkHash()
  })

	let email = ''
	let password = ''
	let firstname = ''
	let lastname = ''
  let token = ''
</script>

<Dialog.Root>
	<Dialog.Trigger id="loginTrigger"></Dialog.Trigger>
	<Dialog.Content>
		<LoadingModal bind:this={loadingModalComponent} />

    <Login_signin {controller} {email} {password} />

    <Login_signup {controller} {email} {password} {firstname} {lastname} />

    <Login_requestpasswordreset {controller} {email} />

    <Login_resetpassword {controller} {password} />

	</Dialog.Content>
</Dialog.Root>
