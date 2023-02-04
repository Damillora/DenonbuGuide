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
			<h1>Contributing to This Guide</h1>
			<p>
				The source of this guide is available <a href="https://github.com/Damillora/DenonbuGuide">on GitHub</a>. Contributions to the contents of the guide
				is always welcome!
			</p>
			<h2>How to contribute</h2>
			<h3>Issues</h3>
			<p>
				If you find any problems or have any requests for the guide, open an issue on GitHub and
				outline the problem or suggestion you have. To create an issue, follow <a
					href="https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue"
					>GitHub's documentation</a
				> on creating an issue.
			</p>
			<h3>Contributing content</h3>
			<p>
				If you want to add content to this guide, open a Pull Request with the changes you are
				making. You can follow <a
					href="https://docs.github.com/en/get-started/quickstart/contributing-to-projects"
					>GitHub's guide</a
				>  on contributing to projects.
			</p>
			<h2>Local development setup</h2>
			<p>This guide is built with SvelteKit. To run it locally, perform the following steps:</p>
			<pre>
				git clone https://github.com/Damillora/DenonbuGuide
				pnpm install
				pnpm run dev</pre>
		</Post>
	</Index>
</Container>
