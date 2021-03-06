const formSchema = {
  title: "CSS Object detection",
  type: "object",
  properties: {
    navy: { type: "string" },
    blue: { type: "string" },
    aqua: { type: "string" },
    teal: { type: "string" },
    olive: { type: "string" },
    green: { type: "string" },
    lime: { type: "string" },
    yellow: { type: "string" },
    orange: { type: "string" },
    red: { type: "string" },
    fuchsia: { type: "string" },
    purple: { type: "string" },
    maroon: { type: "string" },
    white: { type: "string" },
    gray: { type: "string" },
    silver: { type: "string" },
    black: { type: "string" },
    mobile: { type: "string" },
    tablet: { type: "string" },
    desktop: { type: "string" },
    widescreen: { type: "string" },
    fullhd: { type: "string" },
    "grid-tc": { type: "string" },
    "grid-tr": { type: "string" },
    "col-gap": { type: "string" },
    "row-gap": { type: "string" },
    "grid-cs": { type: "number", minimum: 0, maximum: 100 },
    "grid-ce": { type: "number" },
    "grid-rs": { type: "number" },
    "grid-re": { type: "number" },
    "link-dark": { type: "string" },
    "link-light": { type: "string" },
    "link-mid": { type: "string" },
    "sans-font": { type: "string" },
    "serif-font": { type: "string" },
    utils: {
      type: "boolean",
      default: true,
    },
    res_helpers: {
      type: "boolean",
      default: true,
    },
    grid: {
      type: "boolean",
      default: true,
    },
    forms: {
      type: "boolean",
      default: true,
    },
    type: {
      type: "boolean",
      default: true,
    },
    layout: {
      type: "boolean",
      default: true,
    },
    elements: {
      type: "boolean",
      default: true,
    },
    colors: {
      type: "boolean",
      default: true,
    },
  },
};

const uiSchema = {
  navy: {
    "ui:widget": "color",
  },
  blue: { "ui:widget": "color" },
  aqua: { "ui:widget": "color" },
  teal: { "ui:widget": "color" },
  olive: { "ui:widget": "color" },
  green: { "ui:widget": "color" },
  lime: { "ui:widget": "color" },
  yellow: { "ui:widget": "color" },
  orange: { "ui:widget": "color" },
  red: { "ui:widget": "color" },
  fuchsia: { "ui:widget": "color" },
  purple: { "ui:widget": "color" },
  maroon: { "ui:widget": "color" },
  white: { "ui:widget": "color" },
  gray: { "ui:widget": "color" },
  silver: { "ui:widget": "color" },
  black: { "ui:widget": "color" },
};

export { formSchema, uiSchema };
