<script setup lang="ts">
import { loginSchema } from "~/common/schemas";

const { $toast, $api } = useNuxtApp();
const { validateSchema } = useValidateSchema();

const form = ref({
	email: "",
	password: "",
});

const loading = ref(false);

const onSubmit = () => {
	loading.value = true;
	const { valid, error } = validateSchema(loginSchema, form.value);

	if (!valid) {
		$toast(error, {
			hideProgressBar: true,
			pauseOnHover: false,
		});

		loading.value = false;
		return;
	}
};
</script>

<template>
	<form class="flex flex-col gap-3 mt-8" @submit.prevent="onSubmit()">
		<CustomInput
			type="email"
			placeholder="Digite seu e-mail"
			required
			v-model="form.email"
		/>

		<CustomInput
			type="password"
			placeholder="Digite sua senha"
			required
			v-model="form.password"
		/>

		<CustomButton
			label="Entrar"
			label-loading="Aguarde..."
			:loading="loading"
		/>
	</form>
</template>
