import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  seller: string;
  aiGenerated?: boolean;
  badge?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  seller,
  aiGenerated,
  badge,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${id}`}
      className="group card-hover overflow-hidden rounded-xl border border-border bg-card"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-48 sm:h-56">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex gap-2 flex-wrap">
          {aiGenerated && (
            <span className="badge-ai">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
              IA
            </span>
          )}
          {badge && (
            <span className="inline-flex items-center px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
              {badge}
            </span>
          )}
          {discount > 0 && (
            <span className="ml-auto inline-flex items-center px-2.5 py-1 bg-destructive text-destructive-foreground rounded-full text-xs font-bold">
              -{discount}%
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute bottom-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full hover:scale-110 transition-transform shadow-md"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-destructive text-destructive" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Seller */}
        <p className="text-xs text-muted-foreground font-medium mb-2">
          {seller}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-primary">
            €{price.toFixed(2)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              €{originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all active:scale-95"
        >
          <ShoppingCart className="w-4 h-4" />
          Ajouter
        </button>
      </div>
    </Link>
  );
}
