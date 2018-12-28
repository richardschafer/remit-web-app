import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

export default function getMuiUtils() {
  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: teal,
    },
  });

  // Create a new class name generator.
  const className = createGenerateClassName();

  return {
    className,
    theme,
  };
}
