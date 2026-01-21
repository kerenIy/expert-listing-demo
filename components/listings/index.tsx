import Image from "next/image";

export function FeaturedListings() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
      <ListingCard
        label="Most Clicked"
        image="/images/sliders/most-viewed.png"
        length={2}
      />
      <ListingCard
        label="Most Watchlisted"
        image="/images/sliders/watchlisted.png"
      />
      <ListingCard
        label="Hottest Listing"
        image="/images/sliders/recent-listings.png"
      />

      <div className="fixed right-5 md:right-9 bottom-10">
        <div className="bg-[#242526] border border-[#FFFFFF33] rounded-full p-3">
          <Image
            src="/images/sliders/messages-3.svg"
            alt="arrow"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
function ListingCard({
  label,
  image,
  length = 5,
}: {
  label: string;
  image: string;
  length?: number;
}) {
  return (
    <div className="relative h-64 rounded-xl overflow-hidden bg-gray-200">
      <Image src={image} alt={label} fill />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-4 text-white">
        <p className="text-xs uppercase tracking-wide">{label}</p>
        <p className="font-semibold">Urban Prime Plaza Premiere</p>
      </div>

      <div className="flex justify-center items-center absolute bottom-3 right-[50%]">
        <div className="flex items-center space-x-1">
          {Array.from({ length: length }).map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                index === 0
                  ? "bg-white border border-[#E5E5E5]"
                  : "bg-[#FFFFFF33] blur-[]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
