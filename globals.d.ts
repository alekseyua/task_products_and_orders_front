declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.scss";

declare global {
  interface Window {
    __WB_MANIFEST: any;
  }
}
