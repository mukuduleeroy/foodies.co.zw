import { PageShell, PlaceholderSection } from "./PageShell";

export function TalkToUsPage() {
  return (
    <PageShell
      eyebrow="Contact Foodies"
      title="Talk To Us"
      intro="This page is ready for the external contact layout, support options, and a structured enquiry form."
    >
      <PlaceholderSection title="Contact Hero" description="Reference-led contact page intro and visual treatment will go here." />
      <PlaceholderSection title="Contact Options" description="Cards for store enquiries, feedback, catering, careers, or general questions." />
      <PlaceholderSection title="Contact Form" description="A focused form with validation states and clear success feedback." />
      <PlaceholderSection title="Store Support" description="Location details and support information can live near the bottom." />
    </PageShell>
  );
}
