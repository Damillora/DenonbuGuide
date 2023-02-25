<script>
	import Container from '@damillora/plachta/components/Container/Container.svelte';
	import Index from '@damillora/plachta/components/PageTypes/Index.svelte';
	import Post from '@damillora/plachta/components/PageTypes/Post.svelte';
</script>

<svelte:head>
	<title>About Denonbu - Damillora's Guide to Denonbu</title>
</svelte:head>

<Container>
	<Index>
		<Post>
			<h1>About Denonbu</h1>
			<p>This section explains Denonbu itself, and its contents.</p>

			<h2>Index</h2>
			<ul>
				<li>What is Denonbu?</li>
				<li>
					<a href="/about-denonbu/contents"> Denonbu Contents</a>
				</li>
			</ul>
		</Post>
	</Index>
</Container>
