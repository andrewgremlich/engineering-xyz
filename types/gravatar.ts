export type AccountShortName =
	| "github"
	| "stackoverflow"
	| "twitter"
	| "linkedin";

export type Account = {
	domain: string;
	display: string;
	url: string;
	iconUrl: string;
	username: string;
	verified: boolean;
	name: string;
	shortname: AccountShortName;
};

export type Email = {
	primary: string;
	value: string;
};

export type GravatarProfile = {
	displayName: string;
	thumbnailUrl: string;
	job_title: string;
	currentLocation: string;
	aboutMe: string;
	accounts: Account[];
	emails: Email[];
};

export type GravatarProfileResponse = {
	entry: GravatarProfile[];
};
