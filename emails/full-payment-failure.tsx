import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function FullPaymentFailure() {
  const inv = templateVar('paymentFailureInvoice');
	return <BasicEmailFrame
		previewText="Payment for invoice failed"
		title="Payment Failure"
	>
		The payment for invoice {inv} failed. The invoice has returned to Approved.
	</BasicEmailFrame>
}