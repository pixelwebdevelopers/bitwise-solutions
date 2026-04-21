import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  FileText,
  Scale,
  Building2,
  Layers,
  Download,
  Eye,
  Search,
  FileDown,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import resourcesImg from "@/assets/resources.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources Library — Tax, Legal & Compliance | Bizwise Consultants" },
      {
        name: "description",
        content:
          "Comprehensive library of tax laws, legal acts, and compliance documents for businesses in Pakistan.",
      },
      { property: "og:title", content: "Resources Library — Bizwise Consultants" },
      {
        property: "og:description",
        content: "Curated tax and legal references for Pakistani businesses.",
      },
    ],
  }),
  component: ResourcesPage,
});

const resourceCategories = [
  { id: "all", title: "All", icon: Layers },
  { id: "income-tax", title: "Income Tax", icon: FileText },
  { id: "sales-tax", title: "Sales Tax", icon: BookOpen },
  { id: "services-tax", title: "Services Tax", icon: Layers },
  { id: "companies-act", title: "Companies Act", icon: Building2 },
  { id: "others", title: "Others", icon: Scale },
];

const resourceFiles = [
  // Income Tax
  {
    category: "income-tax",
    title: "Income Tax Ordinance - 4th & 5th Schedule (Amended)",
    filename: "4th-5th-schedule-amended.pdf",
  },
  {
    category: "income-tax",
    title: "Assets Declaration Rules 2019 (SRO 578)",
    filename: "assets-declaration-rules-2019.pdf",
  },
  {
    category: "income-tax",
    title: "POS Integration for Retailers (u/s 236G & 236H)",
    filename: "pos-integration-retailers.pdf",
  },
  {
    category: "income-tax",
    title: "Withholding Tax (WHT) Rate Card - June 2025",
    filename: "wht-rate-card-2025.pdf",
  },

  // Sales Tax
  {
    category: "sales-tax",
    title: "SRO 428 - Online Integration of Businesses",
    filename: "sro-428-online-integration.pdf",
  },
  {
    category: "sales-tax",
    title: "Sales Tax Act (Updated 2025-26)",
    filename: "sales-tax-act-2025-26.pdf",
  },
  {
    category: "sales-tax",
    title: "Sales Tax Special Procedure Rules 2007",
    filename: "sales-tax-special-procedure-rules.pdf",
  },
  {
    category: "sales-tax",
    title: "Sales Tax Withholding Rules 2007 (Updated)",
    filename: "sales-tax-withholding-rules.pdf",
  },

  // Services Tax
  {
    category: "services-tax",
    title: "Sindh Sales Tax - Online Integration Rules",
    filename: "sindh-online-integration-rules.pdf",
  },
  {
    category: "services-tax",
    title: "Sindh Sales Tax Act 2011 (Updated 2025-26)",
    filename: "sindh-sales-tax-act-2025-26.pdf",
  },
  {
    category: "services-tax",
    title: "Sindh Sales Tax Rules 2011 (Updated 2025-26)",
    filename: "sindh-sales-tax-rules-2025-26.pdf",
  },
  {
    category: "services-tax",
    title: "Sindh Sales Tax - Special Procedure for Services",
    filename: "sindh-sales-tax-special-procedure.pdf",
  },
  {
    category: "services-tax",
    title: "Sindh Sales Tax - Withholding Procedure Rules",
    filename: "sindh-sales-tax-withholding-rules.pdf",
  },
  {
    category: "services-tax",
    title: "Sindh Sales Tax - Withholding Procedure Rules (Alt)",
    filename: "sindh-sales-tax-withholding-rules-alt.pdf",
  },

  // Companies Act
  {
    category: "companies-act",
    title: "Limited Liability Partnership (LLP) Act 2017",
    filename: "llp-act-2017.pdf",
  },
  {
    category: "companies-act",
    title: "LLP Amendments Act 2020",
    filename: "llp-amendments-2020.pdf",
  },
  {
    category: "companies-act",
    title: "Companies Act 2017 - Updated 3rd Schedule",
    filename: "companies-act-3rd-schedule.pdf",
  },
  {
    category: "companies-act",
    title: "Companies Act 2017 - Updated 7th Schedule",
    filename: "companies-act-7th-schedule.pdf",
  },

  // Others
  {
    category: "others",
    title: "Anti-Money Laundering (AML) Act 2010",
    filename: "anti-money-laundering-act-2010.pdf",
  },
  {
    category: "others",
    title: "Benami Transactions (Prohibition) Act 2017",
    filename: "benami-transactions-act-2017.pdf",
  },
  {
    category: "others",
    title: "Benami Transactions (Prohibition) Rules 2019",
    filename: "benami-transactions-rules-2019.pdf",
  },
  {
    category: "others",
    title: "Customs Act 1969 (Updated June 2025)",
    filename: "customs-act-1969.pdf",
  },
];

function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFile) {
      setIsPdfLoading(true);
    }
  }, [selectedFile]);

  const handleDownload = async (filename: string) => {
    if (downloadingFile) return;

    setDownloadingFile(filename);
    try {
      const response = await fetch(`/docs/${filename}`);
      if (!response.ok) throw new Error("File not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback to direct link if fetch fails
      const link = document.createElement("a");
      link.href = `/docs/${filename}`;
      link.download = filename;
      link.click();
    } finally {
      // Add a small delay for better UX feedback
      setTimeout(() => setDownloadingFile(null), 500);
    }
  };

  const filteredFiles = resourceFiles.filter((file) => {
    const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || file.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-background pb-12">
      <section className="relative gradient-hero text-primary-foreground py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={resourcesImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-page relative text-center px-4 animate-fade-up">
          <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
            Knowledge Center
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight">Resources Library</h1>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-primary-foreground/85 text-base md:text-lg leading-relaxed">
            Access our curated collection of tax laws, legal acts, and regulatory updates in
            Pakistan.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-page px-4 md:px-6">
          <div className="flex flex-col gap-8 mb-10 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl text-center md:text-left">
                <SectionHeading eyebrow="Document Archive" title="Find what you need" />
              </div>
              <div className="relative w-full md:w-80 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand transition-colors" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10 h-12 bg-card border-muted-foreground/20 focus-visible:ring-brand shadow-sm rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <Tabs
              defaultValue="all"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex flex-col gap-8">
                {/* Horizontal Scrollable Tabs for Mobile */}
                <div className="relative">
                  <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide flex justify-start md:justify-center">
                    <TabsList className="bg-card border h-auto p-1.5 inline-flex shadow-sm rounded-xl">
                      {resourceCategories.map((cat) => (
                        <TabsTrigger
                          key={cat.id}
                          value={cat.id}
                          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-brand data-[state=active]:text-white transition-all rounded-lg whitespace-nowrap text-sm font-semibold"
                        >
                          <cat.icon className="h-4 w-4 shrink-0" />
                          <span>{cat.title}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  {/* Subtle fade effect for scrolling indicators on mobile */}
                  <div className="md:hidden absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                </div>

                <TabsContent
                  value={activeTab}
                  className="mt-0 animate-in fade-in-50 duration-500 outline-none"
                >
                  {filteredFiles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                      {filteredFiles.map((file, i) => (
                        <div
                          key={file.filename}
                          style={{ animationDelay: `${i * 50}ms` }}
                          className="group bg-card rounded-2xl p-5 md:p-7 border border-muted/30 shadow-soft hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-fade-up relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FileText className="h-16 w-16 md:h-20 md:w-20 text-brand" />
                          </div>

                          <div className="flex flex-col h-full relative z-10">
                            <div className="mb-6">
                              <div className="flex items-center justify-between mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand">
                                  {file.category.replace("-", " ")}
                                </span>
                                {/* <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-brand transition-colors" />
                                </div> */}
                              </div>
                              <h3 className="text-lg font-bold leading-tight group-hover:text-brand transition-colors line-clamp-2 min-h-[3rem]">
                                {file.title}
                              </h3>
                            </div>

                            <div className="mt-auto flex flex-col sm:grid sm:grid-cols-2 gap-3 pt-5 border-t border-muted/50">
                              <Button
                                variant="outline"
                                size="sm"
                                className="hidden sm:flex h-10 gap-2 rounded-xl border-muted-foreground/20 hover:bg-brand hover:text-white hover:border-brand transition-all"
                                onClick={() => setSelectedFile(file.filename)}
                                disabled={!!selectedFile}
                              >
                                <Eye className="h-4 w-4" />
                                View
                              </Button>
                              <Button
                                variant="default"
                                size="sm"
                                className="h-10 gap-2 bg-slate-900 hover:bg-brand rounded-xl transition-all min-w-[80px] w-full"
                                onClick={() => handleDownload(file.filename)}
                                disabled={downloadingFile === file.filename}
                              >
                                {downloadingFile === file.filename ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Download className="h-4 w-4" />
                                )}
                                {downloadingFile === file.filename ? "Saving" : "Save"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-24 bg-card/50 rounded-3xl border border-dashed border-muted-foreground/30 shadow-inner">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 mb-6">
                        <Search className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold">No results found</h3>
                      <p className="text-muted-foreground mt-3 max-w-sm mx-auto px-4">
                        We couldn't find any documents matching "{searchQuery}" in this category.
                      </p>
                      <Button
                        variant="link"
                        className="mt-6 text-brand font-semibold text-base"
                        onClick={() => {
                          setSearchQuery("");
                          setActiveTab("all");
                        }}
                      >
                        Clear all filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <Dialog open={!!selectedFile} onOpenChange={(open) => !open && setSelectedFile(null)}>
        <DialogContent className="sm:max-w-5xl w-[95vw] h-[90vh] sm:h-[85vh] flex flex-col p-0 overflow-hidden bg-white border-none shadow-2xl rounded-2xl sm:rounded-3xl">
          <DialogHeader className="px-5 py-4 border-b bg-slate-50 flex flex-row items-center justify-between space-y-0">
            <DialogTitle className="text-sm md:text-base font-bold flex items-center gap-2 truncate pr-10">
              <FileDown className="h-5 w-5 text-brand shrink-0" />
              <span className="truncate">
                {resourceFiles.find((f) => f.filename === selectedFile)?.title}
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 relative bg-slate-100">
            {isPdfLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20">
                <div className="flex flex-col items-center gap-4 text-center p-6">
                  <div className="relative">
                    <Loader2 className="h-12 w-12 text-brand animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-2 w-2 bg-brand rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-bold text-slate-800">Loading Document</p>
                    <p className="text-xs text-muted-foreground">Please wait a moment...</p>
                  </div>
                </div>
              </div>
            )}
            {selectedFile && (
              <iframe
                key={selectedFile}
                src={`/docs/${selectedFile}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none"
                title="PDF Viewer"
                onLoad={() => setIsPdfLoading(false)}
              />
            )}
            {/* Mobile overlay indicator */}
            <div className="absolute top-4 right-4 md:hidden pointer-events-none opacity-50">
              <span className="bg-black/60 text-white text-[10px] px-2 py-1 rounded-md backdrop-blur-sm">
                PDF View
              </span>
            </div>
          </div>
          <div className="px-5 py-4 border-t bg-slate-50 flex items-center justify-between gap-4">
            <p className="hidden sm:block text-[11px] text-muted-foreground italic uppercase tracking-wider">
              Bizwise Consultants Digital Library
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none h-10 border-muted-foreground/20 rounded-xl"
                onClick={() => setSelectedFile(null)}
              >
                Close
              </Button>
              <Button
                size="sm"
                className="flex-1 sm:flex-none h-10 bg-brand text-white hover:bg-brand/90 rounded-xl px-6 min-w-[120px]"
                onClick={() => selectedFile && handleDownload(selectedFile)}
                disabled={downloadingFile === selectedFile}
              >
                {downloadingFile === selectedFile ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                {downloadingFile === selectedFile ? "Downloading" : "Download"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
