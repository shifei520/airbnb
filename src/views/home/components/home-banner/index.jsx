import { memo } from "react";
import { BannerWrapper } from "./style";

const Hello = memo(() => {
  return <BannerWrapper></BannerWrapper>;
});

export default Hello;
