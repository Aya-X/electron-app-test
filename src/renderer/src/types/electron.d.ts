declare namespace JSX {
    interface IntrinsicElements {
      webview: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        preload?: string;
        webpreferences?: string;
        partition?: string;
        ref?: React.RefObject<HTMLWebViewElement>;
        onDidFinishLoad?: () => void;
      };
    }
  }
  
  interface HTMLWebViewElement extends HTMLElement {
    reload: () => void;
  }