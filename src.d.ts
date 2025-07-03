declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      autoplay?: boolean;
      [key: string]: unknown;
    };
  }
}

declare module "*.svg?url" {
  const src: string;
  export default src;
}
