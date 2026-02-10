import { COMPANY_URL, getEmailAssetMode, safeParse, templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";
import { BodyText, ButtonLink, Liquid } from "./_components";

type Activity = {
  file_name: string;
  approvable_id: string;
};

const LIQUID_ASSIGN_AND_LOOP = `{% assign total_activities = activities | size %}
{% assign invoice_labels = '' %}
{% for activity in activities %}
  {% assign label = '' %}
  {% if activity.email_data.invoice_number %}
    {% assign label = activity.email_data.invoice_number %}
  {% else %}
    {% assign label = '"' | append: activity.email_data.file_name | append: '"' %}
  {% endif %}
  {% assign invoice_labels = invoice_labels | append: label %}
  {% unless forloop.last %}
    {% assign invoice_labels = invoice_labels | append: ', ' %}
  {% endunless %}
{% endfor %}`;

const INBOX_URL = `${COMPANY_URL}/inbox`;

export default function InvoiceApprovalReminder() {
  const activitiesJson = templateVar("invoiceApprovalActivities");
  const arr = safeParse<Array<Activity>>(activitiesJson);
  const isCid = getEmailAssetMode() === "cid";

  const totalActivities = arr.length;
  const invoiceLabelsPreview = arr.map((a) => a.file_name).join(", ");

  return (
    <BasicEmailFrame
      previewText="Invoice Approval Reminder"
      title="Invoice Approval Reminder"
      useSection
    >
      {isCid && <Liquid>{LIQUID_ASSIGN_AND_LOOP}</Liquid>}
      <div style={{ paddingBottom: "10px" }}>
        {isCid ? (
          <>
            <BodyText marginBottom="14px">
              Reminder: Your approval is required for invoice
              <Liquid>{`{% if total_activities > 1 %}<span>s: </span>{% endif %}`}</Liquid>
              <Liquid>{`<span> : </span>`}</Liquid>
              <Liquid>{`{{ invoice_labels }}`}</Liquid>
            </BodyText>
            <ButtonLink href={INBOX_URL}>View Inbox</ButtonLink>
          </>
        ) : (
          <>
            <BodyText marginBottom="14px">
              <b>Reminder:</b> Your approval is pending for invoice
              {totalActivities > 1 ? "s" : ""}
              {" : "}
              {invoiceLabelsPreview}
            </BodyText>
            <ButtonLink href={INBOX_URL}>View Inbox</ButtonLink>
          </>
        )}
      </div>
    </BasicEmailFrame>
  );
}