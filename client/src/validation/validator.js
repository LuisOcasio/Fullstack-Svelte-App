function emailValidator() {
  return function email(value) {
    return (
      (value && !!value.match(/^[a-zA-Z\-0-9]/)) ||
      "alphanumerical characters only please"
    );
  };
}

function passValidator() {
  return function pass(value) {
    return (
      (value && !!value.match(/^[a-zA-Z\-0-9]/)) ||
      "alphanumerical characters only please"
    );
  };
}

function requiredValidator() {
  return function required(value) {
    return (
      (value !== undefined && value !== null && value !== "") || "Required"
    );
  };
}

export { emailValidator, requiredValidator, passValidator };
