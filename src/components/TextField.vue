<template>
	<div class="field">
		<label class="label" v-if="label">{{ label }}</label>
		<p class="control" :class="{ 'has-icons-left' : icon }">
			<input
				class="input"
				:type="type"
				:placeholder="placeholder"
				:value="value"
				@input="input" 
			/>
			<pm-icon v-if="icon" class="is-small is-left" :name="icon"></pm-icon>
		</p>
	</div>
</template>

<script>
import pmIcon from './Icon';
export default {
	name: "pm-text-field",
	components: { pmIcon },
	props: {
		type: {
			type: String,
			label: String,
			default: "text",
			validator(val) {
				return ["text", "email", "password", "serch", "url"].includes(val);
			}
		},
		placeholder: String,
		value: String,
		icon: String
	},
	methods: {
		input(e) {
			if (e,target.value !== this.value) {
				thid.$emit("input", e.target.value);
			}
		}
	}
};
</script>

<style>

</style>