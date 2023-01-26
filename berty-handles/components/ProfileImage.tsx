import { FC } from "react";

// TODO: support ipfs image

export const ProfileImage: FC<{
  url: string | null | undefined;
  size: number;
}> = ({ url, size }) => {
  if (!url) {
    url = "/img/berty_img.svg";
  }
  return (
    <div
      style={{
        borderRadius: 8,
        width: size,
        height: size,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url('${url}')`,
      }}
    />
  );
};
