<template>
	<section class="hero is-primary">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">{{ title }}</h1>
			</div>
		</div> 
	</section>
</template>

<script>
export default {
	name: "pm-page-title",
	props: { title: String}
};
</script>

<style>

</style>