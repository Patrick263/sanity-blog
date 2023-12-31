import {buildLegacyTheme} from "sanity";

const props ={
    "--my-white":"#fff",
    "--my-black":"#1a1a1a",
    "--papafam-brand":"#F7AB0A",
    "--my-red":"#db4437",
    "--my-yellow":"#f4b400",
    "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
    /*Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#676",
    "--gray-base":"#676",

    "--component-bg":props["--my-black"],
    "--component-text-color":props["--my-white"],

   "--brand-primary": props["--papafam-brand"],

   /*Brand*/
   "--default-button-color": "#676",
   "--default-button-primary-color": props["--papafam-brand"],
   "--default-button-success-color":props["--my-green"],
   "--default-button-warning-color":props["--my-yellow"],
   "--default-button-danger-color":props["--my-red"],

   /*state */
   "--state-info-color":props["--papafam-brand"],
   "--state-success-color":props["--my-green"],
   "--state-warning-color":props["--my-yellow"],
   "--state-danger-color":props["--my-red"],

   /*Navbar*/
   "--main-navigation-color":props["--my-black"],
   "--main-navigation-color--inverted":props["--my-white"],

   "--focus-color":props["--papafam-brand"],



});
