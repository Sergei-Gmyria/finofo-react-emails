import React = require("react");
import { getEmailAssetMode } from "../_config";

export const Liquid = ({ children }: { children: string }) => (
	<span
		// biome-ignore lint/security/noDangerouslySetInnerHtml: Liquid tags must not be escaped
		dangerouslySetInnerHTML={{ __html: children }}
	/>
);

export const LiquidIf: React.FC<{
	liquid: string;
	js: () => boolean;
	children: React.ReactNode;
	else?: React.ReactNode;
}> = ({ liquid, children, else: elseClause, js }) => {
	const mode = getEmailAssetMode();
	if (mode === "cid") {
		return (
			<>
				<Liquid>{`{% if ${liquid} %}`}</Liquid>
				{children}
				{elseClause && (
					<>
						<Liquid>{`{% else %}`}</Liquid>
						{elseClause}
					</>
				)}
				<Liquid>{`{% endif %}`}</Liquid>
			</>
		);
	}
	if (js()) {
		return children;
	} else if (elseClause) {
		return elseClause;
	}
	return null;
};

export const LiquidFor = <T,>(props: {
	liquid: string;
	array: Array<T>;
	renderArray: (elm: T) => React.ReactNode;
	renderLiquid: () => React.ReactNode;
}) => {
	const { liquid, array, renderArray, renderLiquid } = props;
	const mode = getEmailAssetMode();
	if (mode === "cid") {
		return (
			<React.Fragment>
				<Liquid>{`{% for ${liquid} %}`}</Liquid>
				<React.Fragment key={Math.random()}>{renderLiquid()}</React.Fragment>
				<Liquid>{`{% endfor %}`}</Liquid>
			</React.Fragment>
		);
	}
	if (!array || !array.length) {
		return null;
	}
	return array.map((elm) => (
		<React.Fragment key={Math.random()}>{renderArray(elm)}</React.Fragment>
	));
};
