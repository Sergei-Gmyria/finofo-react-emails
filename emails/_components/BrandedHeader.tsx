import { Img, Section } from "@react-email/components";
import { COLORS, FONT, typography } from "../_styles";
import { assetSrc } from "../_config";

export const BrandedHeader = () => {
	return (
		<Section style={styles.wrap}>
			<Img
				src={assetSrc("finofo-mark-black-text")}
				alt="finofo"
				width={114}
				height={24}
				style={styles.logo}
			/>
		</Section>
	);
};

const styles: Record<string, React.CSSProperties> = {
	wrap: { padding: "0 0 8px" },

	logo: {
		display: "block",
		margin: "0",
	},

	fallbackText: {
		...typography.footerStrong,
		fontFamily: FONT.base,
		fontSize: "20px",
		lineHeight: "24px",
		margin: "0",
		color: COLORS.text,
	},
};
