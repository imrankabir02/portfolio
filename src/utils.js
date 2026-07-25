/* filename-ish slug so cards can name themselves like files on disk */
export const slug = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
