import { IGalleryItemProps } from "../profileHome.interface";

const GalleryItems = ({
  completedItem,
  image,
  label,
  totalItems,
}: IGalleryItemProps) => {
  console.log(completedItem / totalItems);
  return (
    <div className="w-full flex gap-5 rounded-[8px] bg-[#241E33]">
      <div className="w-[88px] h-[89px] rounded-[8px]">
        <img
          src={image}
          alt="gallery"
          className="w-full h-full object-cover rounded-[8px]"
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center w-[calc(100%-88px)] pr-4">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-bold">{label}</h4>{" "}
          <span className="block text-xl">{`${completedItem}/${totalItems}`}</span>{" "}
        </div>
        <div className="w-full h-4 bg-white rounded-[1000px] ">
          <div
            className={`h-4 rounded-[1000px] bg-[#FF9BE3] z-50`}
            style={{ width: `${(completedItem / totalItems) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItems;
