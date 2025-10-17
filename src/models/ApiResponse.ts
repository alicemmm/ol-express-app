interface ApiResponse<T> {
  success: boolean;
  data?: T;      // 成功时返回的数据
  error?: string; // 失败时的错误信息
}