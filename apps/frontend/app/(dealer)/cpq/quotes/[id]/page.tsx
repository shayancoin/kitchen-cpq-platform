interface QuoteDetailPageProps {
  params: { id: string };
}

export default function QuoteDetailPage({ params }: QuoteDetailPageProps) {
  return (
    <main>
      <h2>Quote {params.id}</h2>
      <p>Detail view with embedded configurator (stub).</p>
    </main>
  );
}

