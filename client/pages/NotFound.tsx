import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center container-grid">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Page non trouvée
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Désolé, la page que vous recherchez n'existe pas ou a été supprimée.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
}
