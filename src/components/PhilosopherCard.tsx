"use client"
import React from "react";
import { Bookmark, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import  Link  from "next/link";
import { Philosopher } from "@/data/philosophers";

interface PhilosopherCardProps {
  philosopher: Philosopher;
  isExpanded: boolean;
  onToggle: () => void;
}

export const PhilosopherCard: React.FC<PhilosopherCardProps> = ({
  philosopher,
  isExpanded,
  onToggle,
}) => {
  // Format year (BC/AD)
  const formatYear = (year: number) => {
    return year < 0 ? `${Math.abs(year)} MÖ` : `${year} MS`;
  };

  const lifeYears = `${formatYear(philosopher.birthYear ?? 0)} - ${formatYear(
    philosopher.deathYear ?? 0
  )}`;
  
  
  return (
    <div className="relative w-full">
      <div className="absolute -top-3  left-0 flex gap-2 z-20">
        {philosopher.icons?.map((icons, index) => (
          <div key={index} className={`${icons.color} p-1.5 rounded-md shadow-md`}>
            <icons.icon className="w-4 h-4" />
          </div>
        ))}
      </div>

      <div
        className={`philosopher-card rounded-xl mb-4 w-full border-pink-600 transition-all duration-300 ${
          isExpanded
            ? "philosopher-card-expanded shadow-lg"
            : "shadow-sm hover:shadow-md"
        }`}
        style={{
          maxHeight: isExpanded ? "800px" : "100px",
          zIndex: isExpanded ? 10 : 1,
        }}
      >
        <div
          className="p-4 cursor-pointer flex items-center gap-4"
          onClick={onToggle}
        >
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20 shadow-sm"
            style={{ opacity: isExpanded ? 1 : 0.9 }}
          >
            <img
              src={philosopher.image}
              alt={philosopher.name}
              className="philosopher-image w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow overflow-hidden">
            <h3 className="text-base sm:text-lg font-serif font-medium tracking-wide truncate">
              {philosopher.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light">
              {lifeYears}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-light">
              {philosopher.movement}
            </p>
          </div>
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>

        {isExpanded && (
          <div className="philosopher-detail-transition px-4 pb-6 animate-fade-in">
            <div className="h-1 w-full bg-border mb-3 "></div>
            <p>{philosopher.bio}</p>

            {philosopher.influence?.length ? (
              <>
                <div className="h-px w-full bg-border my-3"></div>
                <h4 className="text-sm font-semibold mb-1">Etkilendikleri</h4>
                {philosopher.influence.map((work) => (
                  <p
                    key={work}
                    className="text-xs line-clamp-2 text-foreground/80"
                  >
                    {work}
                  </p>
                ))}
              </>
            ) : null}

            {philosopher.keyIdeas?.length ? (
              <>
                <div className="h-px w-full bg-border my-3"></div>
                <h4 className="text-sm font-semibold mb-1">Ana Fikirleri</h4>

                {philosopher.keyIdeas.map((idea) => (
                  <p
                    key={idea}
                    className="text-xs line-clamp-2 text-foreground/80"
                  >
                    {idea}
                  </p>
                ))}
              </>
            ) : null}


            {philosopher.book?.length ? (
              <>
                <div className="h-px w-full bg-border my-3"></div>
                <h4 className="text-sm font-semibold mb-1">Kitaplar</h4>

                {philosopher.book.map((book) => (
                  <li
                    key={book.title}
                    className="text-xs line-clamp-2 text-foreground/80"
                  >
                    {book.title}
                  </li>
                ))}
              </>
            ) : null}


            <div className="mt-6 flex justify-center md:justify-end">
              <Link
                href={`/philosopher/${philosopher.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/90 text-primary-foreground text-sm font-medium transition-all hover:bg-primary shadow-sm hover:shadow-md"
              >
                Sayfaya Git
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
