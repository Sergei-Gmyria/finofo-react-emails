// Company info
export const COMPANY_NAME = "Finofo Inc.";
export const COMPANY_ADDRESS_1 = "700 2 St SW, Suite 2320";
export const COMPANY_ADDRESS_2 = "Calgary, CA T2P 2W2";
export const COMPANY_URL = 'https://staging.d348suumkxiq30.amplifyapp.com'

// Assets
export const ASSETS = {
	"finofo-mark-black-text": {
		local: "/static/finofo-mark-black-text.png",
		cid: "finofo-mark-black-text",
		cdn: 'https://finofo-emails.com/email-images/logo/finofo-mark-black-text.png'
	},
	"finofo-mark-gray": {
		local: "/static/finofo-mark-gray.png",
		cid: "finofo-mark-gray",
		cdn: 'https://finofo-emails.com/email-images/logo/finofo-mark-gray.png'
	},
	"finofo-mark-tiny": {
		local: "/static/finofo-mark-tiny.png",
		cid: "finofo-mark-tiny",
		cdn: ''
	},
	"finofo-signature": {
		local: "/static/finofo-signature.png",
		cid: "finofo-signature",
		cdn: 'https://finofo-emails.com/email-images/misc/finofo-signature.png'
	},
	"finofo-payment-method": {
		local: "/static/finofo-payment-method.png",
		cid: "finofo-payment-method",
		cdn: ''
	},
	"finofo-file": {
		local: "/static/finofo-file.png",
		cid: "finofo-file",
		cdn: ''
	},
} as const;

// Vars
const localUrl = "https://www.example.com";

export const VARS = {
	// Generic
	recipient: {
		local: "John",
		var: "recipient.name",
	},
	actorName: {
		local: "Steven",
		var: "actor.name"
	},

	// Reset password
	resetPasswordUrl: {
		local: localUrl,
		var: "data.email_data.reset_url",
	},
	supportUrl: {
		local: localUrl,
		var: "data.email_data.support_url",
	},

	// Approval notification
	approvalPayments: {
		local: "data.email_data.payments",
		var: "data.email_data.payments",
	},
	approvalSinglePayment: {
		local: "payment",
		var: "payment",
	},
	approvalPaymentActor: {
		local: "payment.actor",
		var: "payment.actor",
	},
	approvalPaymentText: {
		local: "payment.text",
		var: "payment.text",
	},
	approvalInboxUrl: {
		local: localUrl,
		var: "data.email_data.approval_inbox_url",
	},
	approvalItemDocumentUrl: {
		local: localUrl,
		var: "doc.href",
	},
	approvalDocuments: {
		local: "data.email_data.documents",
		var: "data.email_data.documents",
	},
	approvalSingleDoc: {
		local: "doc",
		var: "doc",
	},
	approvalItemTitle: {
		local: "doc.title",
		var: "doc.title",
	},
	numApprovalItems: {
		local: "3",
		var: "data.email_data.action_count",
	},

	// Invoice sent for approval / approval complete
	invoiceApprovalActivities: {
		local: '[{"file_name": "INV-201", "approvable_id": "ABC"}, {"file_name": "INV-202", "approvable_id": "DEF"}]',
		var: 'activities'
	},
	invoiceApprovalSingleActivity: {
		local: '',
		var: 'activity'
	},
	invoiceApprovalFileName: {
		local: '',
		var: 'activity.file_name'
	},
	invoiceApprovalId: {
		local: '',
		var: 'activity.approvable_id'
	},


	// Approval declined
	approvalDeclinedInvoiceNumber: {
		local: 'INV-201',
		var: "data.email_data.invoice_number"
	},
	approvalDeclinedFileName: {
		local: 'InvoiceFile.pdf',
		var: 'data.email_data.file_name'
	},
	approvalDeclinedId: {
		local: '12345',
		var: 'data.email_data.approvable_id'
	},

	// Document Linked / Unlinked / Edited
	documentLinkedDoctype: {
		local: 'Invoice',
		var: 'data.email_data.document_type'
	},
	documentLinkedFilename: {
		local: 'InvoiceFile.pdf',
		var: 'data.email_data.file_name'
	},
	documentLinkedId: {
		local: '1234',
		var: 'data.email_data.document_id'
	},


	// PO Cancelled
	poCancelledNumber: {
		local: 'PO-23B',
		var: 'data.email_data.purchase_order_number'
	},
	poCancelledFilename: {
		local: 'PurchaseOrder.pdf',
		var: 'data.email_data.file_name'
	},
	poCancelledInvoices: {
		local: '["INV-201","INV-202"]',
		var: 'data.email_data.invoice_names'
	},
	poCancelledId: {
		local: '1234',
		var: 'data.email_data.document_id'
	},

	// Full / partial payment failure
	paymentFailureInvoice: {
		local: 'INV-201',
		var: "data.email_data.invoice_name"
	},

	// Batch cancelled
	batchCancelledId: {
		local: '#445448',
		var: "data.email_data.batch_id"
	},

	// Vendor payment required/approved/declined
	vendorPaymentName: {
		local: 'Nike Inc.',
		var: 'data.email_data.vendor_name'
	},

	// ERP disabled/failed to sync
	erpConnectionName: {
		local: 'QuickBooks',
		var: 'data.email_data.erp_name'
	},

	// Footer
	helpUrl: {
		local: localUrl,
		var: "data.email_data.help_url",
	},
	privacyPolicyUrl: {
		local: localUrl,
		var: "data.email_data.privacy_policy_url",
	},
} as const;
