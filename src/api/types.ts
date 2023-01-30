// 假设接口响应通过格式
export interface ApiResp {
    code: number
    message: string
    data: any
    meta?: {
      pageSize: number
      total: number
      current: number
    }
}

// 文件上传成功返回数据
export interface UploadResp {
    code: number
    msg: string
    data: {
      filename: string
      fileUrl: string
    }
}