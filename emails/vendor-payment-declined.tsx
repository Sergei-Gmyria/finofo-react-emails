import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function VendorPaymentDeclined() {
  const vendorName = templateVar("vendorPaymentName");
	return <BasicEmailFrame
		previewText="Vendor payment approval declined"
		title="Vendor payment approval declined"
	>
		The submitted payment method for Vendor {vendorName} has been declined.
	</BasicEmailFrame>
}