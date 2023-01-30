import prerequest from '@/utils/request'
import type { ApiResp } from './types';

export interface GetUserListParm {
    position: number
}
  
export interface GetUserListData {
name: string
position: number
}
  
class UserService {
  // 获取列表
//   static getList(params: UserModel.GetListParm) {
//     return prerequest.post<UserModel.GetListResp>(
//       '/list',
//       { params },
//     )
//   }
}

export default UserService