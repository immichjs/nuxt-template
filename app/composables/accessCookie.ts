export const useAccessCookie = () => {
	const cookie = useCookie<string>("access_token");
	return cookie.value;
};
