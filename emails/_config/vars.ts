import { VARS } from "./consts";
import { getEmailAssetMode } from "./emailEnv";

export type VarKey = keyof typeof VARS;
export const templateVar = (varKey: VarKey): string =>
	getEmailAssetMode() === "cid"
		? `{{ ${VARS[varKey].var} }}`
		: VARS[varKey].local;
