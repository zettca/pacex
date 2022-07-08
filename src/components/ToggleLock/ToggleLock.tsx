import { Radio } from "@material-ui/core";

const ToggleLock = ({ locked, ...others }) => (
  <Radio color="primary" size="small" checked={locked} {...others} />
);

export default ToggleLock;
