export const useValidateAccessCookie = () => {
	const authenticationStore = useAuthenticationStore();
	const cookieAccess = useAccessCookie();

	if (!cookieAccess || authenticationStore.accessToken) return;

	authenticationStore.accessToken = cookieAccess;
};
