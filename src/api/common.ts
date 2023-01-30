import { createUpload, createDownload } from '@prequest/miniprogram-addon'
import type { UploadResp } from './types'

declare module '@prequest/types' {
    interface PQRequest {
      name?: string
      url?: string
      filePath?: string
      formData?: Common
      skipTokenCheck?: boolean
    }
  }
  
class CommonService {
  // 上传文件
  static uploadFile(filePath: string) {
    const upload = createUpload(uni.uploadFile, {
      name: 'imgFile',
      filePath,
      formData: { fileName: 'testName' },
    })
    return upload<UploadResp>('/fileUpload/imgUpload')
  }
  // 下载文件
  static downloadFile(url: string) {
    const download = createDownload(uni.downloadFile, {
      url,
    })
    return download(url)
  }
}

export default CommonService