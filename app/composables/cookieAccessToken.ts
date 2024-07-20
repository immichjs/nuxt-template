export const useCookieAccessToken = () => {
	return useCookie<string>("access_token").value;
};
