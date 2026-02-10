import { Section } from "@react-email/components";
import {
	ApprovalItem,
	Layout,
	BrandedHeader,
	EmailTitle,
	BodyText,
	ButtonLink,
	Divider,
	Footer,
	Liquid,
	LiquidFor,
	LiquidIf,
	Subheader,
} from "./_components";
import { assetSrc, templateVar } from "./_config";

type DocumentApproval = {
	title: string;
};

type PaymentApproval = {
	actor: string;
	subtitle: string;
};

const DocumentApprovals: Array<DocumentApproval> = [
	{ title: "Inv-2_PO-120" },
	{ title: "Inv-2_PO-122" },
];

const PaymentApprovals: Array<PaymentApproval> = [
	{ actor: "Charles Maranda", subtitle: "Added a new payment method" },
];

export default function ApprovalRequiredEmail() {
	return (
		<Layout previewText="Your approval is required">
			<BrandedHeader />

			<Section style={{ padding: "8px 0 0 0" }}>
				<EmailTitle>Your approval is required</EmailTitle>

				<BodyText>
					You have {templateVar("numApprovalItems")} actions awaiting your
					approval
				</BodyText>

				<LiquidIf
					liquid={`${templateVar("approvalDocuments")} and ${templateVar("approvalDocuments")}.size > 0`}
					js={() => DocumentApprovals.length > 0}
				>
					<Subheader>Documents</Subheader>
					<LiquidFor
						liquid={`${templateVar("approvalSingleDoc")} in ${templateVar("approvalDocuments")}`}
						array={DocumentApprovals}
						renderLiquid={() => (
							<ApprovalItem
								iconSrc={assetSrc("finofo-file")}
								title={<Liquid>{templateVar("approvalItemTitle")}</Liquid>}
								href={templateVar("approvalItemDocumentUrl")}
								metaIconSrc={assetSrc("finofo-mark-tiny")}
							/>
						)}
						renderArray={(elm) => (
							<ApprovalItem
								iconSrc={assetSrc("finofo-file")}
								title={elm.title}
								href={templateVar("approvalItemDocumentUrl")}
								metaIconSrc={assetSrc("finofo-mark-tiny")}
							/>
						)}
					/>
				</LiquidIf>

				<LiquidIf
					liquid={`${templateVar("approvalPayments")} and ${templateVar("approvalPayments")}.size > 0`}
					js={() => PaymentApprovals.length > 0}
				>
					<Subheader>Payment methods</Subheader>
					<LiquidFor
						liquid={`${templateVar("approvalSinglePayment")} in ${templateVar("approvalPayments")}`}
						array={PaymentApprovals}
						renderLiquid={() => (
							<ApprovalItem
								metaIconSrc={assetSrc("finofo-mark-tiny")}
								iconSrc={assetSrc("finofo-payment-method")}
								subtitle={
									<>
										<span style={{ fontWeight: 700 }}>
											<Liquid>{templateVar("approvalPaymentActor")}</Liquid>
										</span>{" "}
										<span>
											<Liquid>{templateVar("approvalPaymentText")}</Liquid>
										</span>
									</>
								}
							/>
						)}
						renderArray={(elm) => (
							<ApprovalItem
								metaIconSrc={assetSrc("finofo-mark-tiny")}
								iconSrc={assetSrc("finofo-payment-method")}
								subtitle={
									<>
										<span style={{ fontWeight: 700 }}>{elm.actor}</span>{" "}
										<span>{elm.subtitle}</span>
									</>
								}
							/>
						)}
					/>
				</LiquidIf>

				<Section style={{ marginTop: "16px" }}>
					<ButtonLink href={templateVar("approvalInboxUrl")}>
						Go to approval inbox
					</ButtonLink>
				</Section>
			</Section>

			<Divider />

			<Footer />
		</Layout>
	);
}
