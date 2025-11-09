import { Link } from "react-router-dom";
import { ChevronLeft, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";

interface PlaceholderProps {
  title: string;
  description?: string;
  pageName?: string;
}

export default function Placeholder({
  title,
  description,
  pageName,
}: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center container-grid py-20">
        <div className="text-center max-w-2xl">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>

          {/* Description */}
          {description && (
            <p className="text-lg text-muted-foreground mb-8">{description}</p>
          )}

          {/* Placeholder Message */}
          <div className="bg-card border-2 border-dashed border-border rounded-xl p-8 mb-8">
            <p className="text-muted-foreground mb-4">
              Cette page est actuellement en cours de développement.
            </p>
            <p className="text-sm text-muted-foreground">
              Continuez à explorer BADENSHOP ou demandez de l'aide au support.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              Retour à l'accueil
            </Link>

            <a
              href="#contact-support"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Contacter le support
            </a>
          </div>

          {/* Coming Soon Note */}
          {pageName && (
            <p className="mt-12 text-sm text-muted-foreground">
              📌 <strong>{pageName}</strong> sera bientôt disponible. Revenez
              régulièrement pour découvrir les nouvelles fonctionnalités !
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
