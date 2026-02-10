import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function ERPDisabled() {
  const erpName = templateVar('erpConnectionName');
	return <BasicEmailFrame
		previewText="ERP connection disabled"
		title="ERP connection disabled"
	>
		The connection to {erpName} has been disabled. System synchronization is paused.
	</BasicEmailFrame>
}