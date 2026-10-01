import { useEffect, useRef, useState } from "react";

/**
 * Rendu PDF embarqué via pdf.js (canvas) : fonctionne aussi sur mobile, où les
 * navigateurs refusent souvent d'afficher un PDF dans une iframe. La librairie
 * (~lourde) est importée dynamiquement : elle ne pèse rien tant qu'on n'ouvre
 * pas une page qui affiche un PDF.
 */
const PdfViewer = ({ url, onError }) => {
  const containerRef = useRef(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    let pdf = null;

    const render = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url"))
          .default;
        pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

        pdf = await pdfjs.getDocument({ url }).promise;
        if (cancelled) return;

        const container = containerRef.current;
        if (!container) return;
        container.replaceChildren();
        const width = container.clientWidth || 600;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: (width / base.width) * dpr });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = "100%";
          canvas.style.display = "block";
          canvas.setAttribute("aria-label", `Page ${pageNumber}`);
          if (pageNumber > 1) canvas.style.borderTop = "1px solid var(--ls-stroke)";
          container.appendChild(canvas);
          await page.render({ canvasContext: canvas.getContext("2d"), viewport })
            .promise;
        }
        if (!cancelled) setState("ready");
      } catch {
        if (!cancelled) {
          setState("error");
          onError?.();
        }
      }
    };

    render();
    return () => {
      cancelled = true;
      pdf?.destroy?.();
    };
  }, [url, onError]);

  return (
    <div className='relative'>
      {state === "loading" && (
        <div
          className='absolute inset-0 flex items-center justify-center'
          aria-label='Chargement du document'
        >
          <div className='h-10 w-10 animate-spin rounded-full border-4 border-ls-stroke border-t-ls-primary' />
        </div>
      )}
      {state === "error" ? (
        <p className='p-6 text-center text-sm text-ls-muted'>
          Impossible d&rsquo;afficher le document ici — utilisez le lien
          d&rsquo;ouverture ci-dessous.
        </p>
      ) : (
        <div
          ref={containerRef}
          className={state === "loading" ? "min-h-[40vh]" : undefined}
        />
      )}
    </div>
  );
};

export default PdfViewer;
