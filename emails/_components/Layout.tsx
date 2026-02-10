import { Body, Container, Html, Preview, Head } from "@react-email/components";
import { COLORS, FONT, LAYOUT } from "../_styles";

type LayoutProps = {
	previewText: string;
	children: React.ReactNode;
};

export const Layout = ({ previewText, children }: LayoutProps) => {
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>

			<Body style={styles.body}>
				<Container style={styles.container}>{children}</Container>
			</Body>
		</Html>
	);
};

const styles: Record<string, React.CSSProperties> = {
	body: {
		margin: 0,
		padding: 0,
		backgroundColor: COLORS.background,
		color: COLORS.text,
		fontFamily: FONT.base,
	},

	container: {
		width: LAYOUT.containerWidth,
		maxWidth: "100%",
		margin: "0 auto",
		padding: `${LAYOUT.outerPaddingTop} 0 ${LAYOUT.outerPaddingBottom}`,
	},
};
