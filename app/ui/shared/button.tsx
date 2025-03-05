export function Button(props: {
  text: string
}) {
  return (
    <button className="bg-yellow-500 text-white p-2 rounded-sm">{props.text}</button>
  );
}