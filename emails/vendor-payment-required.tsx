import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function VendorPaymentRequired() {
  const vendorName = templateVar("vendorPaymentName");
	return <BasicEmailFrame
		previewText="Vendor payment approval required"
		title="Vendor payment approval required"
	>
		Approval is required for the new payment method for Vendor {vendorName}.
	</BasicEmailFrame>
}