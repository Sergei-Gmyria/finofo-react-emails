import { ASSETS } from "./consts";
import { getEmailAssetMode } from "./emailEnv";

export type AssetKey = keyof typeof ASSETS;

export const assetSrc = (key: AssetKey): string => {
	const mode = getEmailAssetMode();
	const v = ASSETS[key];
	if (mode === "cid") {
		if (v.cdn) {
			return v.cdn;
		}
		return `cid:${v.cid}`
	}
	return v.local;
};
