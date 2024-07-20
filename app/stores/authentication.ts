export const useAuthenticationStore = defineStore("authenticationStore", {
	state: () => ({
		accessToken: null as string | null,
	}),
	actions: {
		setAuthentication(accessToken: string): void {
			this.accessToken = accessToken;
			const cookie = useCookie("access-token");
			cookie.value = accessToken;
		},
		resetAuthentication() {
			this.$reset();
			const cookie = useCookie("access-token");
			cookie.value = null;
		},
	},
	persist: true,
});
