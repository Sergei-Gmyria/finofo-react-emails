import { Text } from "@react-email/components";
import { typography } from "../_styles";

export const EmailTitle = ({ children }: { children: React.ReactNode }) => {
	return <Text style={styles.title}>{children}</Text>;
};

const styles: Record<string, React.CSSProperties> = {
	title: {
		...typography.title,
		margin: "8px 0 14px",
	},
};
