"use client";

export function HeroVideo() {
  return (
    <section className="relative overflow-hidden">
      <div className="bordered-div-padding !pt-0">
        <div className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-[24px] border p-1 shadow-lg md:rounded-[40px]">
          <div className="aspect-[1.31/1] w-full overflow-hidden rounded-[20px] bg-black md:rounded-[36px]">
            <iframe
              src="https://www.youtube.com/embed/mGHJj6b67NQ?autoplay=1&mute=1&playsinline=1&rel=0"
              title="Maestro on YouTube"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
