import { useMemo } from "react";
import data from "./25.json" with { type: "json" };
import style from "./page.module.css";
export default function Page() {
  const list = useMemo(() => {
    const sorted = [...data].sort((a, b) =>
      new Date(b.publish_time).getTime() - new Date(a.publish_time).getTime()
    );
    return sorted;
  }, []);
  return (
    <div className={style.container}>
      {list.map((item) => (
        <div
          className={style.coverItem}
          key={item.asset_id}
          style={{
            background: `url(/post/25/${item.cover_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={style.publishTime}>
            {formatDate(item.publish_time)}
          </div>
        </div>
      ))}
    </div>
  );
}
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
