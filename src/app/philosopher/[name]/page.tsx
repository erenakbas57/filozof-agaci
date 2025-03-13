"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  BookOpen,
  Quote,
  Users,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { philosophers, Philosopher } from "@/data/philosophers";
import { useParams } from "next/navigation";

const PhilosopherDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [philosopher, setPhilosopher] = useState<Philosopher | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBooksExpanded, setIsBooksExpanded] = useState(false);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);

    setTimeout(() => {
      const foundPhilosopher = philosophers.find((p) => p.id === name) || null;
      setPhilosopher(foundPhilosopher);
      setIsLoading(false);
    }, 500);
  }, [name]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!philosopher) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-medium mb-4">
            Filozof Bulunamadı
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90"
          >
            <ArrowLeft className="w-4 h-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  // Format year (BC/AD)
  const formatYear = (year: number) => {
    return year < 0 ? `${Math.abs(year)} MÖ` : `${year} MS`;
  };

  const lifeYears = `${formatYear(philosopher.birthYear ?? 0)} - ${
    philosopher.deathYear ? formatYear(philosopher.deathYear) : "Günümüz"
  }`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 flex justify-between items-center glass-card border-b border-white/10 sticky top-0 z-30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-foreground text-sm transition-all hover:bg-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Zaman Çizelgesine Dön
        </Link>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-12 animate-slide-up">
          <div className="text-center">
            <div className="inline-block mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src={philosopher.image}
                alt={philosopher.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-2">
              {philosopher.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {lifeYears}
              </span>
              <span>•</span>
              <span>{philosopher.period}</span>
              <span>•</span>
              <span>{philosopher.movement}</span>
            </div>
          </div>

          <section className="space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h2 className="flex items-center gap-2 text-xl font-serif font-medium mb-4">
                <User className="w-5 h-5 text-primary" />
                Biyografi
              </h2>
              <p className="leading-relaxed">{philosopher.bio}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Ulus
                  </h3>
                  <p>{philosopher.nationality}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Dönem
                  </h3>
                  <p>{philosopher.period}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Felsefi Akım
                  </h3>
                  <p>{philosopher.movement}</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h2 className="flex items-center gap-2 text-xl font-serif font-medium mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                Temel Fikirler
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {philosopher.keyIdeas?.map((idea, index) => (
                  <li key={index}>{idea}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-6">
              <button
                onClick={() => setIsBooksExpanded(!isBooksExpanded)}
                className="w-full flex items-center justify-between text-xl font-serif font-medium mb-4"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Eserler
                </span>
                {isBooksExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
                  isBooksExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {philosopher.book?.map((book, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white/5 rounded-lg p-4 transition-transform hover:scale-105"
                  >
                    <div className="w-full aspect-[8/13] mb-4 rounded-lg overflow-hidden">
                      <img
                        src={book.image || "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop"}
                        alt={book.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-center font-medium">{book.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h2 className="flex items-center gap-2 text-xl font-serif font-medium mb-4">
                <Users className="w-5 h-5 text-primary" />
                Etkilendiği & Etkilediği Kişiler
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Etkilendiği Kişiler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {philosopher.influence?.map((influence, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 dark:bg-white/5 rounded-full text-sm"
                      >
                        {influence}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Etkilediği Kişiler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {philosopher.influenced?.map((influenced, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 dark:bg-white/5 rounded-full text-sm"
                      >
                        {influenced}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {(philosopher.keyIdeas?.length ?? 0) > 0 && (
              <div className="glass-card rounded-xl p-6">
                <h2 className="flex items-center gap-2 text-xl font-serif font-medium mb-4">
                  <Quote className="w-5 h-5 text-primary" />
                  Ünlü Sözleri
                </h2>

                <div className="space-y-4">
                  {philosopher.keyIdeas?.map((quote, index) => (
                    <blockquote
                      key={index}
                      className="border-l-4 border-primary/30 pl-4 py-2 italic"
                    >
                      "{quote}"
                    </blockquote>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default PhilosopherDetails;