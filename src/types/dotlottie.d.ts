declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src: string;
      autoplay?: boolean;
      className?: string;
      [key: string]: unknown;
    };
  }
}
