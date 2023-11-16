declare module "*.css" {
  const json: Record<string, any>;
  export default json;
}

declare module "*.svg" {
  import { FunctionComponent, SVGAttributes } from "react";
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}
