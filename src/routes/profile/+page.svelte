<script lang="ts">
	import PageMaster from '$components/PageMaster.svelte'
	import { Input, Label, Button } from '$lib'
	let formData = {
		name: '',
		email: '',
	}

	function handleSubmit() {
		// Handle form submission logic here
		console.log(formData)
	}
</script>

<PageMaster>
	<div slot="header-center">Profile</div>
	<!-- <div slot="header-right">
		rt
	</div> -->

	<div slot="main-content">
		<div class="flex">
			<h1 class="text-lg font-semibold md:text-2xl">Profile Page</h1>
		</div>
		<div>
			<form on:submit|preventDefault={handleSubmit}>
				<div>
				  <Label for="name">Name</Label>
				  <Input id="name" bind:value={formData.name} required />
				</div>
			  
				<div>
				  <Label for="email">Email</Label>
				  <Input id="email" type="email" bind:value={formData.email} required />
				</div>
				<div>
					<br/>
					<Button type="submit">Submit</Button>

				</div>
			  </form>			
		</div>
	</div>
</PageMaster>
