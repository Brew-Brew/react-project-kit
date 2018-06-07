export const NAME = 'META';
export const SET_META = `${NAME}/SET_META`;


export function setMeta(meta) {
  return {
    type: SET_META,
    meta,
  };
}
