export const transformImage = (img) => {
  const path = img.split('/upload/')
  return `${path[0]}/upload/w_auto/f_auto/q_auto/dpr_auto/${path[1]}`
}
