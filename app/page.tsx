import { Header, Footer } from "@/components/layout";
import { modules } from "@/config/modules";
import { getActiveModules } from "@/lib/module-registry";

export default function Home() {
  const activeModules = getActiveModules(modules);

  return (
    <>
      <Header />
      <main>
        {activeModules.map((module) => {
          const ModuleComponent = module.component;
          return <ModuleComponent key={module.id} id={module.id} />;
        })}
      </main>
      <Footer />
    </>
  );
}
