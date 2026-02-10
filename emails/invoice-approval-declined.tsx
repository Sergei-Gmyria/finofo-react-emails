import { COMPANY_URL, templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";
import { LiquidIf } from "./_components";

export default function InvoiceApprovalDeclined() {
  const num = templateVar('approvalDeclinedInvoiceNumber');
  const filename = templateVar('approvalDeclinedFileName');
	const approvableLink = templateVar('approvalDeclinedId');
	return <BasicEmailFrame
		previewText="Invoice approval run rejected"
		title="Invoice approval rejected"
		actionName="Go to Document"
		actionUrl={`${COMPANY_URL}/invoice-document/${approvableLink}`}
	>
		The approval for invoice{' '}
    <LiquidIf liquid={num} js={() => !!num} else={filename}>{num}</LiquidIf>{' '}
    has been declined. The invoice has been moved back to In-Progress.
	</BasicEmailFrame>
}