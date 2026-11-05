import { BRAND } from '../utils/navigation';

const UPDATED = 'November 2026';

export const PRIVACY = {
  title: 'Privacy policy',
  updated: UPDATED,
  intro:
    'This policy explains what information M.S Solutions collects through this website, how we use it, and the choices you have.',
  sections: [
    {
      h: 'Information we collect',
      p: ['We only collect information you choose to send us through the contact form: your name, email address, organisation (optional), the topic you select and your message. We also record the date and time of submission.'],
    },
    {
      h: 'How we use it',
      p: ['We use this information to reply to your enquiry and to discuss a possible project with you. We do not sell your information and we do not use it for advertising.'],
    },
    {
      h: 'Where it is stored',
      p: ['Enquiries are stored in Google Firebase (Cloud Firestore), a service operated by Google. Only authorised M.S Solutions staff can read them. We keep an enquiry for as long as it is needed to respond and to keep a reasonable record of our conversations.'],
    },
    {
      h: 'Cookies and tracking',
      p: ['This website does not use advertising cookies or third-party analytics. If this changes, we will update this policy first.'],
    },
    {
      h: 'Links to other sites',
      p: ['Our pages link to LinkedIn and Instagram. Those services have their own privacy policies and we are not responsible for them.'],
    },
    {
      h: 'Your choices',
      p: [`You can ask us to show, correct or delete the information you sent us by emailing ${BRAND.email}.`],
    },
    {
      h: 'Children',
      p: ['This website is intended for businesses and organisations and is not directed at children.'],
    },
    {
      h: 'Changes to this policy',
      p: ['We may update this policy from time to time. The date at the top shows when it was last changed.'],
    },
  ],
};

export const TERMS = {
  title: 'Terms of service',
  updated: UPDATED,
  intro: 'By using this website you agree to the terms below. If you do not agree, please do not use the site.',
  sections: [
    {
      h: 'About this website',
      p: ['This website describes the services of M.S Solutions. Content is provided for general information and may change without notice. Product concepts and screens shown on the site are illustrations of our approach, not client projects or live products.'],
    },
    {
      h: 'Project work',
      p: ['Browsing this website or sending an enquiry does not create a contract. Any project is governed by a separate written agreement that sets out scope, price, timelines, ownership and governing law.'],
    },
    {
      h: 'Intellectual property',
      p: ['The M.S Solutions name, logo, text, illustrations and design of this website belong to M.S Solutions. You may not copy or reuse them without permission.'],
    },
    {
      h: 'Acceptable use',
      p: ['Please do not misuse the website, including by attempting to disrupt it, gain unauthorised access, or submit unlawful or misleading content through the contact form.'],
    },
    {
      h: 'No warranty and limits of liability',
      p: ['The website is provided "as is". To the extent permitted by law, M.S Solutions is not liable for any loss arising from your use of the website or from relying on its content.'],
    },
    {
      h: 'Contact',
      p: [`Questions about these terms can be sent to ${BRAND.email}.`],
    },
  ],
};
