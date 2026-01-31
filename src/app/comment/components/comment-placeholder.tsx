import { LoadingPlaceholder } from "@/components/shared";

export const CommentPlaceHolder = () => {
  return (
    <div className="white p-4 rounded-lg grid grid-cols-2 gap-4">
      <div className="col-span-full flex gap-4 items-center">
        <LoadingPlaceholder className="p-8 rounded-full background" />
        <LoadingPlaceholder className="background p-4 px-24" />
      </div>
      <LoadingPlaceholder className="background py-24 col-span-full" />
    </div>
  );
};
