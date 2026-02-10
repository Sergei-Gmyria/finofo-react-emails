import { Section, Img } from "@react-email/components";
import { templateVar, assetSrc } from "../_config";
import { BodyText } from "./BodyText";
import { BrandedHeader } from "./BrandedHeader";
import { ButtonLink } from "./ButtonLink";
import { Divider } from "./Divider";
import { EmailTitle } from "./EmailTitle";
import { Footer } from "./Footer";
import { Layout } from "./Layout";

type BasicEmailFrameProps = {
  previewText: string;
  title: string;
  greetingLine?: string;
  actionName?: string;
  actionUrl?: string;
  useSection?: boolean;
  children?: React.ReactNode
}

export const BasicEmailFrame: React.FC<BasicEmailFrameProps> = ({
  previewText,
  title,
  greetingLine,
  children,
  useSection,
  actionName,
  actionUrl
}) => {
  const renderGreeting = () => {
    if (greetingLine) {
      return <BodyText>${greetingLine}</BodyText>
    }
    return (
      <BodyText>Hi {templateVar("recipient")},</BodyText>
    )
  }
  const renderAction = () => {
    if (!actionName || !actionUrl) {
      return null;
    }
    return (
      <ButtonLink href={actionUrl}>
        {actionName}
      </ButtonLink>
    )
  }

  const renderBody = () => {
    if (useSection) {
      return (
        <Section style={{marginBottom: "20px"}}>
          {children}
        </Section>
      )
    }
    return (
      <BodyText marginBottom="20px">
        {children}
      </BodyText>
    )
  }
	return (
		<Layout previewText={previewText}>
			<BrandedHeader />

			<Section style={{ paddingTop: "8px" }}>
				<EmailTitle>{title}</EmailTitle>

				{renderGreeting()}

				{renderBody()}

				{renderAction()}

				<BodyText marginBottom="24px">Thank you,</BodyText>

				<Section style={{ marginTop: "4px" }}>
					<Img
						src={assetSrc("finofo-signature")}
						alt="finofo team"
						width={78}
						height={24}
						style={{ display: "block", margin: "2px 0 10px" }}
					/>
				</Section>
			</Section>

			<Divider />

			<Footer />
		</Layout>
	);
}
