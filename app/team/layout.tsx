import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meet Our Dentist | Holistic Dentist Austin & Cedar Park | Rise Dental",
  description: "Meet the experienced dentist and team at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Our dedicated professionals combine expertise with a concierge approach to dental wellness.",
  keywords: "thu trinh, dds, dr thu trinh, dental team cedar park, holistic dentist austin, dental professionals brushy creek, concierge dentistry austin, experienced dentist cedar park, dental wellness team",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}