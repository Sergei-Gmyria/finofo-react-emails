import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function VendorPaymentApproved() {
  const vendorName = templateVar("vendorPaymentName");
	return <BasicEmailFrame
		previewText="Vendor payment approval approved"
		title="Vendor payment approval approved"
	>
		The new payment method for Vendor {vendorName} has been approved and is now available for use.
	</BasicEmailFrame>
}