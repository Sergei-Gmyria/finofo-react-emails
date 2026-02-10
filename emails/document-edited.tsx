import { COMPANY_URL, templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function DocumentEdited() {
  const type = templateVar('documentLinkedDoctype');
  const filename = templateVar('documentLinkedFilename');
  const actor = templateVar('actorName');
	const id = templateVar('documentLinkedId');
	return <BasicEmailFrame
		previewText="Document edited"
		title="Document has been edited"
		actionName="Go to Edited Document"
		actionUrl={`${COMPANY_URL}/${type}/${id}`}
	>
		{actor}{' '}
    edited your {type}{' '}
    {filename}.
	</BasicEmailFrame>
}