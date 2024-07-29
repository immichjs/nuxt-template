export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const api = $fetch.create({
		baseURL: config.public.baseURL,
	});

	return {
		provide: {
			api,
		},
	};
});
