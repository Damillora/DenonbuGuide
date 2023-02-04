<script>
	import Container from '@damillora/plachta/components/Container/Container.svelte';
	import Index from '@damillora/plachta/components/PageTypes/Index.svelte';
	import Post from '@damillora/plachta/components/PageTypes/Post.svelte';
</script>

<svelte:head>
	<title>Damillora's Guide to Denonbu</title>
</svelte:head>

<Container>
	<Index>
		<Post>
			<h1>Welcome to Damillora's Guide to Denonbu</h1>
			<p>
				This website is a very much <strong>still-in-progress guide</strong> to Denonbu for English-speaking
				audiences!
			</p>
		</Post>
	</Index>
</Container>
