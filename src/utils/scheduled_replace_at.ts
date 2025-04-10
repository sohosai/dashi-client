const scheduledReplaceAtConverter = (scheduled_replace_at: string | null): string => {
  if (scheduled_replace_at === null) {
    return '未定';
  }
  const year: number = parseInt(scheduled_replace_at.slice(0, 4));
  const month: number = parseInt(scheduled_replace_at.slice(5, 7));
  const date: number = parseInt(scheduled_replace_at.slice(8, 10));
  const result: string = `${year}年 ${month}月 ${date}日`;
  return result;
};

export { scheduledReplaceAtConverter };
