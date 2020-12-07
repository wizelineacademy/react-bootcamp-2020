const commonTheme = {
  header_contianer_height: '56px',
  primary_text_size: '14px', //  --primary-text-size: 14px;
  primary_title_weight: '500', //  --primary-title-weight: 500;

  secondary_text_size: '13px', // --info-font-size: 13px;
  secondary_title_weight: '400', //  --info-font-weight: 400;
};

const light = {
  ...commonTheme,
  base_background_color: '#f9f9f9', //  --general-background: #f9f9f9;
  secondary_background_color: '#fff', //   --secondary-background: #fff;
  primary_text_color: '#030303', //  --text-primary-color: #030303;
  secondary_text_color: '#606060', //  --text-secondary-color: #606060;
  primary_border_color: '1px solid rgba(0, 0, 0, 0.1);',
  primary_action_icon_color: '#f00',

  //  --text-input-border: #606060;
  //  --text-input-selected-border: #4285f4;
  //  --header-container-height: 56px;
};
const dark = {
  ...commonTheme,
  base_background_color: '#181818',
  secondary_background_color: '#181818',
  primary_text_color: '#fff',
  secondary_text_color: '#aaa',
  primary_border_color: '1px solid rgba(255, 255, 255, 0.1);',
  primary_action_icon_color: '#fff',
};

const Themes = {
  default: light,
  light,
  dark,
};

export default Themes;
