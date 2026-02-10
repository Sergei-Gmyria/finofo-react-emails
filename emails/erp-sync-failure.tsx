import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function ERPSyncFailure() {
  const erpName = templateVar('erpConnectionName');
	return <BasicEmailFrame
		previewText="ERP sync failure"
		title="ERP sync failure"
	>
		A general sync error with {erpName} has occurred. Please check the ERP Sync dashboard for details.
	</BasicEmailFrame>
}