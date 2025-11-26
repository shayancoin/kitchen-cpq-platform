interface ConfigurePageProps {
  params: { projectId: string };
}

export default function ConfigureProjectPage({ params }: ConfigurePageProps) {
  return (
    <main>
      <h2>Configure project {params.projectId}</h2>
      <p>3D configurator surface (stub).</p>
    </main>
  );
}

