import { Lock, LockOpen } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const ToggleLock = ({ locked, ...others }) => (
  <IconButton size="small" disabled={locked} {...others}>
    {locked ? <Lock /> : <LockOpen />}
  </IconButton>
);

export default ToggleLock;
