import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
  createImageProp,
  createResizeModeProp,
  createColorProp,
} from "../core/component-types";

export const SEED_DATA = {
  name: "Image Background",
  tag: "ImageBackground",
  doc_link:
    "https://docs.expo.io/versions/latest/react-native/imagebackground/",
  code_link:
    "https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js",
  description:
    "A very simple drop-in replacement for Image that allows you to use an Image as a background.",
  category: COMPONENT_TYPES.media,
  layout: {
    width: "100%",
    height: "100%",
  },
  props: {
    source: createImageProp({
      defaultValue:
        "https://static.draftbit.com/images/placeholder-image-background.png",
    }),
    resizeMode: createResizeModeProp(),
    backgroundColor: createColorProp({
      label: "Background Color",
      description: "If no image is chosen render a colored background.",
    }),
    backfaceVisibility: {
      group: GROUPS.advanced,
      label: "Backface Visibility",
      description: "When animating a card, show the back face of it",
      editable: false,
      required: false,
      defaultValue: null,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      options: ["visible", "hidden"],
    },
  },
};
