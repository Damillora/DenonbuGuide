<script>
  import { page } from '$app/stores';
	import { Container } from '@damillora/plachta';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<Container>
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p>
</Container>

<style>
</style>
