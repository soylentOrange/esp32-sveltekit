<script lang="ts">
	import type { PageData } from './$types';
	import logo from '$lib/assets/logo.png';

	export let data: PageData;
</script>

<div class="hero bg-base-100 h-screen">
	<div class="card md:card-side bg-base-200 shadow-secondary shadow-2xl">
		<figure class="bg-base-200"><img src={logo} alt="Logo" class="h-auto w-64" /></figure>
		<div class="card-body w-80">
			<h2 class="card-title text-center text-2xl">ESP32 SvelteKit Lightswitch</h2>
			<p class="py-6 text-center">
				A simple, secure and extensible IoT project to control the onboard-LED of ESP32-boards.
				<br>
				Generated from from the great 
				<a	href="https://github.com/theelims/ESP32-sveltekit/"
					class="link"
					target="_blank"
					rel="noopener noreferrer">
					ESP32-sveltekit template
					</a>
				by
				<a 	href="https://github.com/theelims/" class="link" target="_blank" rel="noopener noreferrer">
					elims
				</a>.
			</p>
			<a
				class="btn btn-primary"
				href="/lights">
				get switchy
			</a>
		</div>
	</div>
</div>
