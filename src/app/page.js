"use client";
import PageList, { PageListMenu } from "@/components/PageList.jsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PageControl from "@/components/PageControl.jsx";
import PageProgress from "@/components/PageProgress.jsx";
// import TapGuide from "@/components/TapGuide.jsx";

export default function Home() {
  const searchParams = useSearchParams();
  const [pageIndex, setPageIndex] = useState((+searchParams.get("page")) || 0)
  const [prevPageIndex, setPrevPageIndex] = useState(pageIndex);
  const [controlsShow, setControlsShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setPageIndex((+searchParams.get("page")) || 0);
    setControlsShow(searchParams.get("controls") !== "false");
  }, [searchParams])

  useEffect(() => {
    if (prevPageIndex !== pageIndex) {
      const p = PageList[pageIndex];
      if (controlsShow) {
        if (p.reload) {
          window.location.href = `/mie-academic-seminar-2025/?page=${pageIndex}`;
        } else {
          router.push(`?page=${pageIndex}`, { scroll: false });
        }
      } else {
        if (p.reload) {
          window.location.href = `/mie-academic-seminar-2025/?page=${pageIndex}&controls=false`;
        } else {
          router.push(`?page=${pageIndex}&controls=false`, { scroll: false });
        }
      }
    }
    setPrevPageIndex(pageIndex);
    // eslint-disable-next-line
  }, [pageIndex, router, controlsShow])

  return (
    <>
      <PageProgress current={pageIndex} total={PageList.length} />
      {PageList[pageIndex].slide}
      <PageControl
        setPageIndex={setPageIndex}
        maxPageIndex={PageList.length - 1}
        controlsShow={controlsShow}
        setControlsShow={setControlsShow}
      />
      <PageListMenu setPageIndex={setPageIndex} pageIndex={pageIndex} controlsShow={controlsShow} />
    </>
  )
}
