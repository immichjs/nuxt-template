<script setup lang="ts">
const props = defineProps({
	label: String,
	labelLoading: String,
	loading: Boolean,
});

const dynamicLabel = computed(() =>
	props.loading ? props.labelLoading : props.label
);
</script>

<template>
	<button
		class="flex justify-center items-center gap-2 bg-zinc-900 disabled:bg-zinc-900/90 disabled:text-zinc-200/90 text-zinc-200 font-medium h-12 rounded text-sm"
	>
		<span :class="{ 'animate-pulse': loading }">{{ dynamicLabel }}</span>
		<Loading v-if="loading" />
	</button>
</template>
