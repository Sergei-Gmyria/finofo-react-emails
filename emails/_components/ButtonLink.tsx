import { Button, Section } from "@react-email/components";
import {
	COLORS,
	FONT_WEIGHTS,
	FONT_SIZES,
	LINE_HEIGHTS,
	FONT,
} from "../_styles";

type ButtonLinkProps = {
	href: string;
	children: React.ReactNode;
};

export const ButtonLink = ({ href, children }: ButtonLinkProps) => {
	return (
		<Section style={styles.row}>
			<Button href={href} style={styles.button}>
				{children}
			</Button>
		</Section>
	);
};

const styles: Record<string, React.CSSProperties> = {
	row: { margin: "8px 0 18px" },

	button: {
		backgroundColor: COLORS.buttonBg,
		color: COLORS.buttonText,
		fontFamily: FONT.base,
		fontSize: FONT_SIZES.body13,
		fontWeight: FONT_WEIGHTS.bold,
		lineHeight: LINE_HEIGHTS.body,
		textDecoration: "none",
		display: "inline-block",
		padding: "6px 12px",
		borderRadius: "2px",
	},
};
