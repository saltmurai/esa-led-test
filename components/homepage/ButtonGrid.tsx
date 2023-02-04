function Button({ number }: { number: number }) {
  return (
    <div className="btn w-32 h-32 text-2xl font-bold text-white bg-red-500 rounded-full">
      {number}
    </div>
  );
}

function ButtonGrid() {
  return (
    <div className="flex flex-col w-full items-center gap-2">
      <div className="flex flex-row gap-4 w-full justify-around">
        <Button number={1} />
        <Button number={2} />
        <Button number={3} />
      </div>
      <div className="flex flex-row gap-4 w-full justify-around">
        <Button number={4} />
        <Button number={5} />
        <Button number={6} />
      </div>
      <div className="flex flex-row gap-4 w-full justify-around">
        <Button number={7} />
        <Button number={8} />
        <Button number={9} />
      </div>
    </div>
  );
}

export default ButtonGrid;
