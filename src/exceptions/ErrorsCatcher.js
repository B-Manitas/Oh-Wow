import ErrorHandler from "./ErrorsHandler";

export default function Catch(target, key, descriptor) {
  var method = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      return await method.apply(this, args);
    } catch (error) {
      const error_handler = new ErrorHandler(error);
      error_handler.manageAllErrors(error);
    }
  };

  return descriptor;
}
