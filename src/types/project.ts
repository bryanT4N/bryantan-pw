export interface Project {
  img?: string;                       // optional: 没有时显示 placeholder
  title: string;
  description: string;
  codeLink?: string | null;
  liveLink?: string | null;
  techstack?: Array<string>;
  status?: string;                    // placeholder 状态文字（如 "in proposal" / "upcoming"）
  detailLink?: string;                // 内部跳转链接，覆盖 codeLink/liveLink
}
