<script>
	import Container from '@damillora/plachta/components/Container/Container.svelte';
	import Index from '@damillora/plachta/components/PageTypes/Index.svelte';
	import Post from '@damillora/plachta/components/PageTypes/Post.svelte';
</script>

<svelte:head>
	<title>Denonbu Community - Damillora's Guide to Denonbu</title>
</svelte:head>

<Container>
	<Index>
		<Post>
			<h1>Denonbu Community</h1>
			<p>
				Denonbu is heavily focused on its communities, allowing Denonbu fans to share and create
				Denonbu content. This sections contains community resources regarding Denonbu.
			</p>

			<h2>Index</h2>
			<ul>
				<li>
					<a href="/community/groups">Denonbu Groups</a>
				</li>
				<li>
					<a href="/community/circles"> Denonbu Circles</a>
				</li>
				<li>
                    <a href="/community/fanmade-content">Fan-made Denonbu Content</a>
                </li>
				<li>
                    <a href="/community/translations">Denonbu Translations</a>
                </li>
				<li>
                    <a href="/community/resources">Denonbu Resources</a>
                </li>
			</ul>
		</Post>
	</Index>
</Container>
