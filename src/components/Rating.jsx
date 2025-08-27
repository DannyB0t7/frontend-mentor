
function Rating({ rating }) {
  return (
    <div className="w-12 h-12 p-3 grid place-items-center rounded-full bg-[#2a2e34] text-sm hover:bg-[#f26c07] hover:text-black transition-all hover:cursor-pointer">
      {rating}
    </div>
  );
}

export default Rating;
