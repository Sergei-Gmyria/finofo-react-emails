import { COMPANY_URL, templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function DocumentLinked() {
  const type = templateVar('documentLinkedDoctype');
  const filename = templateVar('documentLinkedFilename');
  const actor = templateVar('actorName');
	const urlPath = templateVar('documentUrlPath');
	return <BasicEmailFrame
		previewText="Document linked"
		title="Document has been linked"
		actionName="Go to Linked Document"
		actionUrl={`${COMPANY_URL}/${urlPath}`}
	>
		{actor}{' '}
    linked your {type}{' '}
    {filename}.
	</BasicEmailFrame>
}