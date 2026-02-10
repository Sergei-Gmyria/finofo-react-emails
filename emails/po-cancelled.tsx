import { COMPANY_URL, getEmailAssetMode, safeParse, templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";
import { Liquid, LiquidIf } from "./_components";

export default function PoCancelled() {
  const poNumber = templateVar('poCancelledNumber');
  const poFilename = templateVar('poCancelledFilename');
  const poInvoices = templateVar('poCancelledInvoices');
  const poId = templateVar('poCancelledId');
  const arr = safeParse<Array<string>>(poInvoices);
  const joined = getEmailAssetMode() === 'local'
    ? arr.join(', ')
    : (<Liquid>{` {{ ${poInvoices} | join: ", " }}`}</Liquid>);
	return <BasicEmailFrame
		previewText="Purchase Order has been cancelled"
		title="Purchase order cancelled"
    actionName="View cancelled PO"
    actionUrl={`${COMPANY_URL}/po-document/${poId}`}
	>
    Purchase Order <LiquidIf liquid={poNumber} js={() => !!poNumber} else={poFilename}>{poNumber}</LiquidIf>{' '}
    has been cancelled. <LiquidIf liquid={`${poInvoices}.size > 0`} js={() => arr.length > 0}>
      Related invoice<LiquidIf liquid={`${poInvoices}.size > 1`} js={() => arr.length > 1}>s</LiquidIf>{' '}
      {joined}{' '}
      <LiquidIf liquid={`${poInvoices}.size > 1`} js={() => arr.length > 1} else="has">have</LiquidIf>{' '}
      been demoted to In-Progress.
    </LiquidIf>

	</BasicEmailFrame>
}