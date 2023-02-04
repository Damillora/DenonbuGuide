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
			<h1>Denonbu Fan-made Creations</h1>
			<p>
				Denonbu encourages fans to create art and content based on Denonbu. This page lists all
				Denonbu creations and compilations alongside creators making Denonbu content.
			</p>

			<h2>Art</h2>
			<ul>
				<li>
					<a
						href="https://twitter.com/search?q=%20%23%E9%9B%BB%E9%9F%B3%E9%83%A8%E7%BE%8E%E8%A1%93%E9%83%A8"
						>Official Denonbu fanart Twitter hashtag ( #電音部美術部)</a
					>
				</li>
			</ul>
			<h2>Music</h2>
			<ul>
				<li>
					<a href="https://soundcloud.com/search?q=%E9%9B%BB%E9%9F%B3%E9%83%A8"
						>Search for Denonbu (電音部) in SoundCloud</a
					>
				</li>
				<li>
					<a href="https://den-on-bu-aniv.tumblr.com/">Denonbu First Anniversary REMIX EP</a>
				</li>
				<li>
					<a href="https://den-on-bu-aniv2.tumblr.com/">Denonbu Second Anniversary REMIX EP</a>
				</li>
				<li>
					<a href="https://idfrp22.tumblr.com"
						>IDFRP22 (Denonbu fan-remix project by Indonesian producers)</a
					>
				</li>
			</ul>
		</Post>
	</Index>
</Container>
