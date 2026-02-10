import { COMPANY_URL, templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function DocumentUnlinked() {
  const type = templateVar('documentLinkedDoctype');
  const filename = templateVar('documentLinkedFilename');
  const actor = templateVar('actorName');
	const urlPath = templateVar('documentUrlPath');
	return <BasicEmailFrame
		previewText="Document unlinked"
		title="Document has been unlinked"
		actionName="Go to Unlinked Document"
		actionUrl={`${COMPANY_URL}/${urlPath}`}
	>
		{actor}{' '}
    unlinked your {type}{' '}
    {filename}.
	</BasicEmailFrame>
}