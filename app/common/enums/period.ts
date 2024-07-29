export enum EPeriod {
	ONE_DAY = 60 * 60 * 24,
	ONE_WEEK = EPeriod.ONE_DAY * 7,
	ONE_MONTH = EPeriod.ONE_WEEK * 4 + EPeriod.ONE_DAY * 2,
	ONE_YEAR = EPeriod.ONE_MONTH * 12,
	FIVE_YEAR = EPeriod.ONE_YEAR * 5,
}
