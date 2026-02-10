import { COMPANY_URL, safeParse, templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";
import { BodyText, ButtonLink, LiquidFor } from "./_components";

type Activity = {
  file_name: string;
  approvable_id: string;
}

export default function InvoiceApprovalComplete() {
  const activities = templateVar('invoiceApprovalActivities');
  const arr = safeParse<Array<Activity>>(activities);
  const singleActivity = templateVar('invoiceApprovalSingleActivity');
  const invoiceFilename = templateVar('invoiceApprovalFileName');
  const invoiceApprovalId = templateVar('invoiceApprovalId');
  const formatLink = (id: string) => `${COMPANY_URL}/invoice-document/${id}`

  const renderLiquid = () => (
    <div style={{paddingBottom: '10px'}}>
      <BodyText>Invoice {invoiceFilename} has been fully approved.</BodyText>
      <ButtonLink href={formatLink(invoiceApprovalId)}>
        View Invoice
      </ButtonLink>
    </div>
  )

  const renderArray = (elm: Activity) => (
    <div style={{paddingBottom: '10px'}}>
      <BodyText>Invoice {elm.file_name} has been fully approved.</BodyText>
      <ButtonLink href={formatLink(elm.approvable_id)}>
        View Invoice
      </ButtonLink>
    </div>
  )

	return <BasicEmailFrame
		title="Invoice Approved"
		previewText="Invoice(s) Fully Approved"
    useSection
	>
    <LiquidFor 
      liquid={`${singleActivity} in ${activities}`}
      renderLiquid={renderLiquid}
      array={arr}
      renderArray={renderArray}
    />
	</BasicEmailFrame>
}