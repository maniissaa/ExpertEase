
// eslint-disable-next-line react/prop-types
function Card({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-7 md:pl-4 pl-2 py-6">
        <div className="card md:w-80 w-96 bg-base-100 shadow-xl sm:h-96 h-80 hover:shadow-2xl hover:scale-105 duration-300">
          <figure>
            <img className="h-48" src={item.imageUrl} alt="No image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between">
              {item.course}
              <div className="badge badge-success">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-2 py-1">${item.price}</div>
              <div className="badge badge-outline hover:bg-indigo-700 hover:text-white px-2 hover:py-2">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
