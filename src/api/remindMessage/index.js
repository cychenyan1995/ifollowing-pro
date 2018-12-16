import constants from '../../config/constants'
import http from '../http'

export function queryTableList(params){
  return http.get(`${constants.httpApi}/remindMessage/getTableList`, params);
}