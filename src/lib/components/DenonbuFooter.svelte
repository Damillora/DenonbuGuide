<script>
	import { Footer } from '@damillora/plachta';

	import LastModified from './LastModified.svelte';
</script>

<Footer>
	<div class="denonbu-footer">
		<div class="denonbu-footer__contents">
			<p>Copyright (c) 2023 Damillora and contributors.</p>
		</div>
		<div class="denonbu-footer__contents last-modified">
			<LastModified />
		</div>
	</div>
</Footer>

<style lang="scss">
	@import '@damillora/plachta/dist/styles/global';

	.denonbu-footer {
        width: 100%;
		display: flex;
		flex-direction: column;

		@include screen(md) {
			flex-direction: row;
		}

		&__contents {
			:global(p) {
				@include my(0.25rem);
			}
		}
	}

    .last-modified {
        @include screen(md) {
            margin-left: auto;
        }
    }
</style>
