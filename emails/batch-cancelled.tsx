import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function BatchCancelled() {
  const id = templateVar('batchCancelledId');
	return <BasicEmailFrame
		previewText="Batch payment cancelled in finance app"
		title="Batch payment cancelled"
	>
		Payment batch {id} has been cancelled in the finance app. Invoices in batch have returned to Approved.
	</BasicEmailFrame>
}