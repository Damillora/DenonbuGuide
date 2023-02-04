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
			<h1>Denonbu Translations</h1>
			<p>
				Denonbu is officially available in Japanese. However, several fans have taken the effort to translate some of the available content into English!
				This page contains all translation efforts from various groups and people.
			</p>

			<h2>English</h2>
			<h3>Music</h3>
			<ul>
				<li>
					<a href="https://denonbu.fandom.com">DENONBU Wiki</a> contains translations of Denonbu lyrics
				</li>
				<li>
					<a href="https://www.youtube.com/@RedrumXVII">[Youtube]Red's channel</a> contains translated music and videos from Denonbu
				</li>
			</ul>

			<h3>4koma</h3>
			<ul>
				<li>
					<a href="https://twitter.com/denonbu_eng/media">4koma translations by [Twitter]@Denonbu_ENG</a>
				</li>
			</ul>
			<h3>Novel</h3>
			<ul>
				<li>
					<a href="https://linktr.ee/denonbunovels">Denonbu Novel English translations by [Twitter]@syrupsealpha</a>
				</li>
			</ul>
		</Post>
	</Index>
</Container>
