function Button({ number }: { number: number }) {
  return (
    <div className="btn w-32 h-32 text-2xl font-bold text-white bg-red-500 rounded-full">
      {number}
    </div>
  );
}

function ButtonGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full px-8 py-2">
      <Button number={1} />
      <Button number={2} />
      <Button number={3} />
      <Button number={4} />
      <Button number={5} />
      <Button number={6} />
      <Button number={7} />
      <Button number={8} />
      <Button number={9} />
    </div>
  );
}

export default ButtonGrid;
