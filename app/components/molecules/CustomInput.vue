<script lang="ts" setup>
const model = defineModel<string>({ required: true });
const props = defineProps({
	type: { type: String, default: "text" },
	required: Boolean,
	maxlength: { type: Number },
	placeholder: { type: String },
	inputClass: { type: String },
	labelClass: { type: String },
	mask: { type: String },
	disabled: { type: Boolean },
});
</script>

<template>
	<div class="w-full relative text-zinc-700">
		<input
			class="appearance-none w-full px-3 h-12 border bg-transparent text-zinc-800 peer focus:border-zinc-800 focus:outline-none text-sm placeholder:font-normal font-medium bg-tranparent bg-white disabled:cursor-not-allowed rounded"
			autocomplete="off"
			:type="props.type"
			:class="inputClass"
			:placeholder="placeholder"
			:maxlength="maxlength"
			:required="required"
			:disabled="disabled"
			v-model="model"
			v-maska="mask"
		/>
		<Icon
			name="i-solar:lock-keyhole-minimalistic-linear"
			class="pointer-events-none absolute top-1/2 -translate-y-1/2 right-3 text-lg text-zinc-800"
			v-if="disabled"
		/>
	</div>
</template>
