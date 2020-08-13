var debugThrowError = false;
if (debugThrowError) {
  //throwing an error at any startup will cause travis to fail
  throw new Error();
}
