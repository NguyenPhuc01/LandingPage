export const replacePath = (path) =>
  path === `/` ? path : path.replace(/\/$/, ``);
