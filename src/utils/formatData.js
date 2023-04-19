// 格式化数据
export function formatNum(num) {
  if (num >= 20000) {
    num /= 10000
  }
  return num
}