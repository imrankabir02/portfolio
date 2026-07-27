/* The card face carries the opening line and the modal carries the rest, so
   the short version is taken from the writing itself rather than written
   twice — no second copy to drift out of step with the first. */
export const firstSentence = (text = "") => {
  const end = text.search(/[.!?](\s|$)/);
  return end === -1 ? text : text.slice(0, end + 1);
};

/* filename-ish slug so cards can name themselves like files on disk */
export const slug = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
