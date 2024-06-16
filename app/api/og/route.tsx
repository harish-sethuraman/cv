import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name") ?? "Curriculum Vitae";
  const summary = searchParams.get("summary") ?? "";

  const RalewayBold = await fetch(
    new URL("../../../assets/Raleway/Raleway-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const LatoRegular = await fetch(
    new URL("../../../assets/Lato/Lato-Light.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="bg-neutral-100 w-full h-full flex items-center justify-center">
        <div tw="w-[80%] h-[80%] bg-white shadow-lg rounded-t-md flex items-center flex flex-col mt-[10%] p-10">
          <p
            tw="text-[80px] capitalize"
            style={{
              fontFamily: "RalewayBold",
              fontWeight: 900,
            }}
          >
            {name}
          </p>
          <div tw="flex mx-20 items-center justify-center text-center">
            <p
              tw="text-[20px] text-neutral-500"
              style={{
                fontFamily: "LatoRegular",
              }}
            >
              {summary}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "RalewayBold",
          data: RalewayBold,
          style: "normal",
        },
        {
          name: "LatoRegular",
          data: LatoRegular,
          style: "normal",
        },
      ],
    }
  );
}
