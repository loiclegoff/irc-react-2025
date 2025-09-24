export function Visual({ type, source }) {
  if (type === "img") {
    return <img style={{ width: "100%" }} src={source} alt="image"></img>;
  }

  return <object data={source}></object>;
}
