import { Link } from "@react-email/components";
import { typography } from "./_styles";
import { templateVar } from "./_config";
import { BasicEmailFrame } from "./_components/BasicEmailFrame";

export default function ResetPasswordEmail() {
	return <BasicEmailFrame
		previewText="Reset your Finofo password"
		title="Reset password"
		actionName="Reset password"
		actionUrl={templateVar("resetPasswordUrl")}
	>
		Here is the link to reset your password:{" "}
		<Link href={templateVar("resetPasswordUrl")} style={typography.link}>
			Reset password
		</Link>
		. If you didn&apos;t request a password change, you can ignore this
		email. If you&apos;re concerned about the security of your account,
		please contact{" "}
		<Link href={templateVar("supportUrl")} style={typography.link}>
			Finofo Support
		</Link>
		.
	</BasicEmailFrame>
}