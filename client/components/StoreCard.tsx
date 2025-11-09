import { Link } from "react-router-dom";
import { Star, MapPin, ShoppingBag } from "lucide-react";

interface StoreCardProps {
  id: string;
  name: string;
  logo: string;
  cover: string;
  rating: number;
  followers: number;
  products: number;
  location: string;
  verified: boolean;
  aiGenerated?: boolean;
}

export default function StoreCard({
  id,
  name,
  logo,
  cover,
  rating,
  followers,
  products,
  location,
  verified,
  aiGenerated,
}: StoreCardProps) {
  return (
    <Link
      to={`/store/${id}`}
      className="group card-hover overflow-hidden rounded-xl border border-border bg-card"
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden bg-muted h-32 sm:h-40">
        <img
          src={cover}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Logo */}
        <div className="flex items-end gap-3 mb-3">
          <div className="relative -mt-12 w-16 h-16 rounded-xl border-4 border-card bg-muted overflow-hidden">
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          {verified && (
            <div className="mb-1">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                ✓ Vérifié
              </span>
            </div>
          )}
        </div>

        {/* Store Name */}
        <h3 className="font-bold text-foreground text-lg line-clamp-1 group-hover:text-primary transition-colors mb-1">
          {name}
        </h3>

        {/* AI Badge */}
        {aiGenerated && (
          <p className="text-xs text-violet-600 dark:text-violet-400 font-medium mb-2">
            📊 Optimisé par IA
          </p>
        )}

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center justify-between text-sm mb-3 pb-3 border-b border-border">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
          <div className="text-muted-foreground">
            {followers.toLocaleString()} followers
          </div>
        </div>

        {/* Products Count */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShoppingBag className="w-4 h-4" />
          <span>
            <strong className="text-foreground">{products}</strong> produits
          </span>
        </div>
      </div>
    </Link>
  );
}
