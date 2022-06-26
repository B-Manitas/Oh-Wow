export default {
  clean(string) {
    return string.strip();
  },

  formattingLastname(lastname) {
    return lastname.toUpperCase();
  },

  formattingFirstname([first, ...rest]) {
    return [first.toUpperCase(), ...rest].join("");
  },
};
