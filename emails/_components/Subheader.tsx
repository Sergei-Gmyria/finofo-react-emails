import { Text } from "@react-email/components";
import { typography } from "../_styles";

export const Subheader = ({ children }: { children: React.ReactNode }) => (
	<Text style={styles.text}>{children}</Text>
);

const styles: Record<string, React.CSSProperties> = {
	text: {
		...typography.bodyStrong,
		margin: "16px 0",
	},
};
