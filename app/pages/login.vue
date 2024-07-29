<template>
	<main
		class="h-screen bg-[url('~/assets/images/bg-1.jpg')] bg-cover bg-center flex justify-center items-center"
	>
		<section class="bg-white rounded w-96 px-6 py-8 shadow">
			<Logo />
			<p class="text-sm text-zinc-400">Entre com suas credênciais</p>

			<LoginForm />

			<div class="flex justify-between mt-6">
				<p class="text-sm text-zinc-500">
					Não tem uma conta? <br />
					<NuxtLink class="text-zinc-800 underline" to="/register"
						>Criar agora</NuxtLink
					>
				</p>

				<p class="text-end text-sm text-zinc-500">
					Não consegue acessar? <br />
					<NuxtLink class="text-zinc-800 underline" to="/reset"
						>Clique aqui</NuxtLink
					>
				</p>
			</div>
		</section>
	</main>
</template>
