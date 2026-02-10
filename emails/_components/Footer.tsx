import { Img, Link, Section, Text } from "@react-email/components";
import { typography } from "../_styles";
import {
	COMPANY_NAME,
	COMPANY_ADDRESS_1,
	COMPANY_ADDRESS_2,
	assetSrc,
	templateVar,
} from "../_config";

export const Footer: React.FC = () => {
	return (
		<Section style={styles.wrap}>
			<Img
				src={assetSrc("finofo-mark-gray")}
				alt="logo"
				width={20}
				height={20}
				style={styles.grayMark}
			/>

			<Text style={styles.brandMessage}>
				<span style={typography.footerStrong}>
					Invoice to Paid.&nbsp;AP automation that just works.
				</span>
			</Text>

			<Text style={styles.meta}>
				{`${COMPANY_NAME} | ${COMPANY_ADDRESS_1} | ${COMPANY_ADDRESS_2} | `}
				<Link href={templateVar("helpUrl")} style={typography.link}>
					Help Center
				</Link>{" "}
				|{" "}
				<Link href={templateVar("privacyPolicyUrl")} style={typography.link}>
					Privacy Policy
				</Link>
			</Text>
		</Section>
	);
};

const styles: Record<string, React.CSSProperties> = {
	wrap: { padding: "32px 0 0" },

	grayMark: {
		display: "block",
		margin: "0 0 10px",
	},

	brandMessage: {
		...typography.footer,
		margin: "0 0 10px",
	},

	meta: {
		...typography.footer,
		margin: "0",
	},
};
