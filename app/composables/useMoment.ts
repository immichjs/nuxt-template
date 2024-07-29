import moment from "moment-timezone";

export const useMoment = (
	inp?: moment.MomentInput,
	strict?: boolean
): moment.Moment => {
	return moment(inp, strict);
};
