export const SET_FONT_LOADED = 'SET_FONT_LOADED';

export function setFontLoaded(hasFonts: boolean) {
  return {
      type: SET_FONT_LOADED,
      hasFonts: hasFonts
  }
}