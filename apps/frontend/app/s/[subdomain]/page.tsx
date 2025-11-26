interface SubdomainPageProps {
  params: { subdomain: string };
}

export default function SubdomainLanding({ params }: SubdomainPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Tenant portal</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Subdomain: {params.subdomain}
      </p>
    </main>
  );
}
