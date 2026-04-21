import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfViewerProps {
  file: string;
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  const [PDF, setPDF] = useState<any>(null);

  useEffect(() => {
    // Dynamically import react-pdf only on the client
    import("react-pdf").then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
      // Import styles dynamically if possible, or we can just hope they are handled by Vite
      setPDF(mod);
    });
  }, []);

  useEffect(() => {
    setPageNumber(1);
    setIsPdfLoading(true);
  }, [file]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsPdfLoading(false);
  }

  if (!PDF) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-50">
        <Loader2 className="h-10 w-10 text-brand animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 relative bg-slate-100 overflow-hidden flex flex-col h-full">
      {/* Viewer Toolbar */}
      <div className="bg-white border-b px-4 py-2 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-xs font-medium min-w-[80px] text-center">
            Page {pageNumber} of {numPages || "--"}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setPageNumber((p) => Math.min(numPages || p, p + 1))}
            disabled={pageNumber >= (numPages || 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-[10px] font-bold w-10 text-center">{Math.round(scale * 100)}%</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setScale((s) => Math.min(2, s + 0.2))}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-border mx-1 hidden sm:block" />
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hidden sm:flex"
            onClick={() => setScale(1)}
            title="Reset Zoom"
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-slate-200/50 p-4 flex justify-center min-h-0">
        {isPdfLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20">
            <div className="flex flex-col items-center gap-4 text-center p-6">
              <Loader2 className="h-10 w-10 text-brand animate-spin" />
              <p className="text-sm font-bold text-slate-800">Preparing Document</p>
            </div>
          </div>
        )}
        <div className="shadow-2xl bg-white origin-top transition-transform duration-200 h-fit">
          <PDF.Document file={`/docs/${file}`} onLoadSuccess={onDocumentLoadSuccess} loading={null}>
            <PDF.Page
              pageNumber={pageNumber}
              scale={scale}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className="max-w-full"
              width={typeof window !== "undefined" ? Math.min(window.innerWidth * 0.9, 800) : 800}
            />
          </PDF.Document>
        </div>
      </div>
    </div>
  );
}
