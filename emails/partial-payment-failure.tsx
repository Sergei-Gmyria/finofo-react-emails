import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function PartialPaymentFailure() {
  const inv = templateVar('paymentFailureInvoice');
	return <BasicEmailFrame
		previewText="Payment for invoice partially failed"
		title="Partial Payment Failure"
	>
		Partial payment for invoice {inv} failed. Please review the remaining balance.
	</BasicEmailFrame>
}