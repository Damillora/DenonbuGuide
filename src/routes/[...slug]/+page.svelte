<script>
	import { Container, Index, Post, Notice } from '@damillora/plachta';

	export let data;
</script>

<svelte:head>
	<title>{data.isIndex ? '' : data.title + ' - '}Damillora's Guide to Denonbu</title>
</svelte:head>

<Container>
	<Index>
		<Post>
			<h1>
				{data.title}
			</h1>
			{#if data.workInProgress}
				<Notice>
					This page is a <strong>work-in-progress</strong>. Contributions are welcome!
				</Notice>
			{/if}

			{@html data.document}
		</Post>
	</Index>
</Container>
