"use client"
import { FilterMenu } from "@/components/FilterMenu";
import { PhilosopherCard } from "@/components/PhilosopherCard";
import { philosophers } from "@/data/philosophers";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filteredPhilosophers, setFilteredPhilosophers] = useState(philosophers);
  const [searchQuery, setSearchQuery] = useState("");

  // Sort philosophers by birth year
  const sortedPhilosophers = [...filteredPhilosophers].sort(
    (a, b) => (a.birthYear ?? Infinity) - (b.birthYear ?? Infinity)
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleFilterChange = (filters: {
    period?: string;
    movement?: string;
  }) => {
    let filtered = [...philosophers];

    if (filters.period) {
      filtered = filtered.filter((p) => p.period === filters.period);
    }

    if (filters.movement) {
      filtered = filtered.filter((p) => p.movement === filters.movement);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPhilosophers(filtered);
    setExpandedId(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    let filtered = [...philosophers];

    if (query) {
      filtered = filtered.filter((p) =>
        p.name?.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredPhilosophers(filtered);
    setExpandedId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <header className="p-6 backdrop-blur-sm border-b border-white/10 sticky top-0 z-30 bg-background/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-semibold">Filozoflar Listesi</h1>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Filozof ara..."
                className="pl-9 w-full"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <FilterMenu onFilterChange={handleFilterChange} />
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline center line with gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-primary/50 -translate-x-1/2 z-0"></div>

          {/* Timeline content */}
          <div className="relative space-y-8 md:space-y-12 py-8">
            {sortedPhilosophers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Sonuç bulunamadı</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setFilteredPhilosophers(philosophers);
                  }}
                >
                  Filtreleri Temizle
                </Button>
              </div>
            ) : (
              sortedPhilosophers.map((philosopher, index) => {
                const visibleIndex = sortedPhilosophers
                  .filter((p) => p.name !== null)
                  .findIndex((p) => p.id === philosopher.id);

                const isCentered = philosopher.name === null;

                return (
                  <div
                    key={philosopher.id}
                    id={`philosopher-${philosopher.id}`}
                    className={`relative flex flex-col md:flex-row ${
                      isCentered
                        ? "items-center justify-center"
                        : visibleIndex % 2 === 0
                        ? "md:justify-start items-start"
                        : "md:justify-end items-end"
                    }`}
                  >
                    {philosopher.name ? (
                      <>
                        {/* Timeline dot with glow effect */}
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 z-10">
                          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-4 border-background relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                          </div>
                        </div>

                        {/* Year marker - always visible */}
                        <div
                          className={`
                            absolute top-8 text-sm font-medium text-primary-foreground px-2 py-0.5 rounded-full 
                            bg-primary/90 backdrop-blur-sm shadow-sm z-10
                            left-1/2 -translate-x-1/2 md:translate-x-0
                            ${
                              index % 2 === 0
                                ? "md:right-1/2 md:left-auto md:mr-8"
                                : "md:left-1/2 md:ml-8"
                            }
                          `}
                        >
                          {philosopher.birthYear != null
                            ? philosopher.birthYear < 0
                              ? `${Math.abs(philosopher.birthYear)} MÖ`
                              : `${philosopher.birthYear} MS`
                            : "Bilinmiyor"}
                        </div>
                      </>
                    ) : (
                      <div className="absolute left-1/2 top-8 text-sm font-medium bg-red-500 text-primary-foreground px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm z-10 -translate-x-1/2">
                        {philosopher.bio}
                      </div>
                    )}

                    {/* Card container */}
                    {philosopher.name ? (
                      <div
                        className={`
                          mt-16 md:mt-0 w-full md:w-5/12 
                          ${expandedId === philosopher.id ? "z-20" : "z-10"}
                          ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}
                        `}
                      >
                        <PhilosopherCard
                          philosopher={philosopher}
                          isExpanded={expandedId === philosopher.id}
                          onToggle={() => toggleExpand(philosopher.id)}
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>

    </div>
  );
}