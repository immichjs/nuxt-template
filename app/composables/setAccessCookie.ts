import type { EPeriod } from "~/common/enums/period";

export const useDefineAccessCokie = (accessToken: string, period?: EPeriod) => {
	const cookie = useCookie("access_token", {
		maxAge: (period ||= undefined),
	});

	cookie.value = accessToken;
};
