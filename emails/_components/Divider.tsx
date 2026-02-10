import { Hr } from "@react-email/components";
import { COLORS } from "../_styles";

export const Divider = ({ margin = "16px 0 14px" }: { margin?: string }) => {
	return <Hr style={{ ...styles.hr, margin }} />;
};

const styles: Record<string, React.CSSProperties> = {
	hr: {
		border: "none",
		borderTop: `1px solid ${COLORS.border}`,
	},
};
