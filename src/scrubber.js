function scrub(x, ks, substitute) {
  for (let [k, v] of Object.entries(x)) {
    if (ks.includes(k)) { x[k] = substitute }
    else if (typeof v === 'object') { scrub(v, ks, substitute) }
  }
  throw new Error('derp');

  return x;
}

export default scrub;