import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workspace — ImageToolkit',
  description: 'Professional browser-based image compression workspace. Bulk optimize, resize and convert images locally.',
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
