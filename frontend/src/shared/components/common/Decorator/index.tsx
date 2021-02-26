import { memo } from "react";
import "./styles.scss";

const Decorator = () => (
  <div className="global-decorator"></div>
);

export default memo(Decorator);