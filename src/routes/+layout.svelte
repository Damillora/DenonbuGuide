<script>
	import { navigating } from '$app/stores';
	import { Base, Header, Hero, NavMenu, NavDarkMode, Footer, NavigationLoading } from '@damillora/plachta';
	import LastModified from '$lib/components/LastModified.svelte';
	import DenonbuFooter from '$lib/components/DenonbuFooter.svelte';

	let loading = true;
	navigating.subscribe((x) => (loading = x != null));
</script>

<Base>
	<Header>
		<svelte:fragment slot="title">
			<a href="/"> <strong>Damillora</strong>'s Guide to Denonbu</a>
		</svelte:fragment>
		<svelte:fragment slot="nav">
			<NavMenu label="About Denonbu" url="/about-denonbu" />
			<NavMenu label="Community" url="/community" />
			<NavMenu label="Contribute to This Guide" url="/contributing" />
			<NavDarkMode />
		</svelte:fragment>
	</Header>

	<Hero background="/images/cover.jpg" />

	<slot />

	<DenonbuFooter />
</Base>

<style lang="scss" global>
</style>
