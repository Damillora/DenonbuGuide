<script>
	import { navigating } from '$app/stores';
	import Base from '@damillora/plachta/components/Base/Base.svelte';
	import Header from '@damillora/plachta/components/Header/Header.svelte';
	import Hero from '@damillora/plachta/components/Hero/Hero.svelte';
	import NavMenu from '@damillora/plachta/components/Nav/NavMenu.svelte';
	import NavDarkMode from '@damillora/plachta/components/Nav/NavDarkMode.svelte';
	import Footer from '@damillora/plachta/components/Footer/Footer.svelte';
	import NavigationLoading from '@damillora/plachta/components/NavigationLoading/NavigationLoading.svelte';

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

	<Footer>
		<p>Copyright (c) 2023 Damillora and contributors</p>
	</Footer>
</Base>

<style lang="scss" global>
</style>
