export type EmailAssetMode = "local" | "cid";

export function getEmailAssetMode(): EmailAssetMode {
	const v = process.env.EMAIL_ASSET_MODE;
	return v === "cid" ? "cid" : "local";
}

export const safeParse = <T>(rawJson: string) => getEmailAssetMode() === "cid" ? [] : JSON.parse(rawJson) as T;