import { Text } from "@react-email/components";
import { typography } from "../_styles";

type BodyTextProps = {
	children: React.ReactNode;
	marginBottom?: string;
};

export const BodyText = ({
	children,
	marginBottom = "14px",
}: BodyTextProps) => {
	return <Text style={{ ...styles.text, marginBottom }}>{children}</Text>;
};

const styles: Record<string, React.CSSProperties> = {
	text: {
		...typography.body,
		margin: "0",
	},
};
