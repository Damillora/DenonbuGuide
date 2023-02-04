<script>
  import { page } from '$app/stores';
	import Container from '@damillora/plachta/components/Container/Container.svelte';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<Container>
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p>

	{#if $page.error.stack}
		<pre>{$page.error.stack}</pre>
	{/if}
</Container>

<style>
</style>
