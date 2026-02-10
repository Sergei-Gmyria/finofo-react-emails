import type * as React from "react";
import { COLORS, FONT, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from "./tokens";

export const typography = {
	title: {
		fontFamily: FONT.base,
		fontSize: FONT_SIZES.title24,
		fontWeight: FONT_WEIGHTS.bold,
		lineHeight: LINE_HEIGHTS.title,
		color: COLORS.text,
		margin: "0",
	} satisfies React.CSSProperties,

	body: {
		fontFamily: FONT.base,
		fontSize: FONT_SIZES.body13,
		fontWeight: FONT_WEIGHTS.regular,
		lineHeight: LINE_HEIGHTS.body,
		color: COLORS.text,
		margin: "0",
	} satisfies React.CSSProperties,

	bodyStrong: {
		fontFamily: FONT.base,
		fontSize: "14px",
		fontWeight: FONT_WEIGHTS.bold,
		lineHeight: LINE_HEIGHTS.body,
		color: COLORS.text,
		margin: "0",
	} satisfies React.CSSProperties,

	footer: {
		fontFamily: FONT.base,
		fontSize: FONT_SIZES.footer14,
		fontWeight: FONT_WEIGHTS.regular,
		lineHeight: LINE_HEIGHTS.footer,
		color: COLORS.text,
		margin: "0",
	} satisfies React.CSSProperties,

	footerStrong: {
		fontFamily: FONT.base,
		fontSize: FONT_SIZES.footer14,
		fontWeight: FONT_WEIGHTS.bold,
		lineHeight: LINE_HEIGHTS.footer,
		color: COLORS.text,
		margin: "0",
	} satisfies React.CSSProperties,

	link: {
		color: COLORS.text,
		textDecoration: "underline",
	} satisfies React.CSSProperties,
};
