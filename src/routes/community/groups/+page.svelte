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
			<h1>Denonbu Groups</h1>
			<p>
				This page lists known groups with Denonbu as a main topic.
			</p>
			
			<h2>English</h2>
			<ul>
				<li>
					<a href="https://discord.gg/denonbu">English fan-made Denonbu Discord server</a>
				</li>
			</ul>
			<h2>
				Japanese
			</h2>
			<ul>
				<li>
					<a href="https://twitter.com/Den_On_Code">Den-on-code (a fan-made Denonbu Discord server)</a>
				</li>
			</ul>
		</Post>
	</Index>
</Container>
