import { Img, Link, Row, Column, Section, Text } from "@react-email/components";
import { COLORS, FONT } from "../_styles/tokens";
import { typography } from "../_styles/typography";

type ApprovalItemProps = {
	iconSrc: string;
	iconAlt?: string;

	title?: React.ReactNode;
	href?: string;

	// Optional “mini brand” row under the title (like tiny finofo mark + "Finofo")
	metaIconSrc?: string;
	metaText?: React.ReactNode;

	// Optional second line (for payment method: “Charles … Added …”)
	subtitle?: React.ReactNode;
};

export const ApprovalItem = ({
	iconSrc,
	iconAlt = "",
	title,
	href,
	metaIconSrc,
	subtitle,
}: ApprovalItemProps) => {
	const TitleNode = href ? (
		<Link href={href} style={styles.titleLink}>
			{title}
		</Link>
	) : (
		<span>{title}</span>
	);

	return (
		<Section style={styles.card}>
			<Row>
				<Column style={styles.iconCol} width={44}>
					<Section style={styles.iconWrap}>
						<Img
							src={iconSrc}
							alt={iconAlt}
							width={30}
							height={30}
							style={styles.icon}
						/>
					</Section>
				</Column>

				<Column style={styles.contentCol}>
					<Text style={styles.title}>{TitleNode}</Text>

					{metaIconSrc && (
						<Row style={styles.metaRow}>
							{metaIconSrc && (
								<Column style={styles.metaIconCol}>
									<Img
										src={metaIconSrc}
										alt=""
										width={436}
										height={16}
										style={styles.metaIcon}
									/>
								</Column>
							)}
						</Row>
					)}

					{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
				</Column>
			</Row>
		</Section>
	);
};

const styles: Record<string, React.CSSProperties> = {
	card: {
		backgroundColor: "#F5F5F5",
		border: `1px solid ${COLORS.border}`,
		borderRadius: "8px",
		margin: "0 0 10px",
		padding: "10px 0 6px 10px",
	},

	iconCol: {
		verticalAlign: "top",
	},

	iconWrap: {
		backgroundColor: "#FFFFFF",
		borderRadius: "999px",
		width: "40px",
		height: "40px",
		textAlign: "center",
		border: `1px solid ${COLORS.border}`,
	},

	icon: {
		display: "block",
		margin: "auto",
	},

	contentCol: {
		verticalAlign: "top",
		paddingLeft: "10px",
	},

	title: {
		...typography.bodyStrong,
		margin: "0 0 4px",
	},

	titleLink: {
		...typography.link,
		// keep “looks like text” in cards; change if you want underlined links
		textDecoration: "none",
		color: COLORS.text,
		fontFamily: FONT.base,
		fontWeight: 700,
	},

	metaRow: {
		margin: "0 0 6px",
	},

	metaIconCol: { verticalAlign: "middle" },
	metaTextCol: { verticalAlign: "middle" },

	metaIcon: { display: "block" },

	metaText: {
		...typography.body,
		margin: 0,
		color: COLORS.text,
	},

	subtitle: {
		...typography.body,
		margin: 0,
	},
};
