import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    url: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}